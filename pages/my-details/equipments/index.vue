<template>
  <div class="container mx-auto px-4 md:px-20 py-8">
    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <!-- Header -->
      <div class="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-6 rounded-md shadow-lg flex justify-between items-center">
        <div>
          <h2 class="text-3xl font-bold">Listed Equipment</h2>
          <p class="text-sm opacity-90">Manage, edit, or remove your registered equipment.</p>
        </div>
      </div>

      <!-- Notification -->
      <div v-if="notification.show" :class="notificationClass" class="mt-4 p-4 rounded-md">
        {{ notification.message }}
      </div>

      <!-- Loader & Error Message -->
      <div v-if="loader" class="text-green-600 mt-6 text-center">Loading your equipment...</div>
      <div v-if="errorMessage" class="text-red-600 mt-6 text-center">{{ errorMessage }}</div>

      <!-- Owned Equipment Section -->
      <div v-if="equipments.length" class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Owned Equipment</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="equipment in equipments" :key="equipment._id"
            class="p-6 bg-gray-50 rounded-lg shadow-md border transition-transform transform hover:scale-105">
            
            <NuxtLink :to="`/equipment/${equipment._id}`" class="block">
              <img
                :src="`${imageUrl}/uploads/projects/${equipment.imageLink}`"
                :alt="equipment.machineType"
                class="rounded-lg w-full max-w-md object-cover shadow-md cursor-pointer hover:opacity-90 transition-opacity"
              />
            </NuxtLink>
            
            <h3 class="text-xl font-bold text-gray-900">{{ equipment.machineType }} - {{ equipment.model }}</h3>
            <p class="text-sm text-gray-700 mt-2"><strong>Condition:</strong> {{ equipment.condition || 'N/A' }}</p>
            <p class="text-sm text-gray-700 mt-2"><strong>Pricing:</strong> {{ equipment.pricing || 'N/A' }}</p>
            <p class="text-sm text-gray-700 mt-2"><strong>Main Use:</strong> {{ equipment.mainUse || 'N/A' }}</p>
            
            <div class="flex gap-4 mt-4">
              <button @click="editEquipment(equipment)"
                class="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'pen']" class="w-5 h-5" />
                <span>Edit</span>
              </button>
              <button @click="confirmDelete(equipment)"
                class="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'trash']" class="w-5 h-5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="!loader" class="text-gray-600 mt-6 text-center">No equipment listed yet.</div>
    </div>

    <!-- Edit Equipment Modal -->
    <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto mx-4">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Edit Equipment</h3>
        
        <form @submit.prevent="confirmSave">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Machine Type -->
            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine Type</label>
              <input
                v-model="editedEquipment.machineType"
                type="text"
                class="input"
                required
              />
            </div>

            <!-- Model -->
            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Model</label>
              <input
                v-model="editedEquipment.model"
                type="text"
                class="input"
                required
              />
            </div>

            <!-- Condition -->
            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine status (current condition)</label>
              <select
                v-model="editedEquipment.condition"
                class="input"
                required
              >
                <option disabled value="">Select condition</option>
                <option>Brand new</option>
                <option>Slightly used</option>
                <option>Used over a season</option>
                <option>Need a small service and maintenance</option>
                <option>Needs heavy service and repair before use</option>
              </select>
            </div>

            <!-- Pricing -->
            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Pricing</label>
              <input
                v-model="editedEquipment.pricing"
                type="text"
                class="input"
                required
              />
            </div>

            <!-- Main Use -->
            <div class="flex flex-col col-span-2">
              <label class="mb-2 font-bold text-gray-700">Main Use</label>
              <input
                v-model="editedEquipment.mainUse"
                type="text"
                class="input"
                required
              />
            </div>

            <!-- Image Upload -->
            <div class="flex flex-col col-span-2">
              <label class="mb-2 font-bold text-gray-700">Equipment Image</label>
              <input
                @change="handleImageUpload"
                accept="image/*"
                type="file"
                class="w-full cursor-pointer rounded-md shadow px-4 py-3 text-gray-700 focus:outline-none focus:ring border border-gray-300"
              />
              
              <!-- Current Image Preview -->
              <div v-if="editedEquipment.imageLink" class="mt-4">
                <img
                  :src="`${imageUrl}/uploads/projects/${editedEquipment.imageLink}`"
                  :alt="editedEquipment.machineType"
                  class="w-32 h-32 object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>

          <!-- Form Error -->
          <div v-show="formError" class="mt-6">
            <div class="bg-red-500 text-white font-bold rounded px-4 py-2">
              Please fill all the required fields
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4 mt-8">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isLoading"
            >
              <font-awesome-icon :icon="['fas', 'save']" class="w-4 h-4 mr-2" />
              {{ isLoading ? 'Saving...' : 'Save Changes' }}
            </button>
            
            <button
              type="button"
              @click="cancelEdit"
              class="btn btn-secondary"
            >
              <font-awesome-icon :icon="['fas', 'times-circle']" class="w-4 h-4 mr-2" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h3 class="text-xl font-semibold text-gray-800">Confirm Changes</h3>
        <p class="text-gray-700 mt-2">Are you sure you want to update this equipment?</p>
        
        <div class="flex gap-4 mt-6 justify-center">
          <button
            @click="saveEquipment"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Updating...' : 'Yes, Update' }}
          </button>
          <button
            @click="closeConfirmModal"
            class="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "@/common/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen, faTrash, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPen, faTrash, faSave, faTimesCircle);

export default {
  components: {
    FontAwesomeIcon
  },
  
  computed: {
    ...mapGetters(["imageUrl", "user"]),
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    },
    notificationClass() {
      return {
        'bg-green-100 text-green-800 border border-green-300': this.notification.type === 'success',
        'bg-red-100 text-red-800 border border-red-300': this.notification.type === 'error'
      };
    }
  },
  
  data() {
    return {
      equipments: [],
      loader: false,
      errorMessage: "",
      showEditModal: false,
      showConfirmModal: false,
      editedEquipment: {},
      originalEquipment: {},
      formError: false,
      isLoading: false,
      notification: {
        show: false,
        message: '',
        type: 'success'
      }
    };
  },
  
  async mounted() {
    await this.fetchUserEquipments();
  },
  
  methods: {
    async fetchUserEquipments() {
      if (!this.userSerialNo) {
        this.errorMessage = "No user serial number found.";
        return;
      }
      
      this.loader = true;
      this.errorMessage = "";
      
      try {
        const { data } = await http.get(`/api/list-equipment/fetched-by-userSerialNo/${this.userSerialNo}`);
        this.equipments = data.record || [];
      } catch (error) {
        console.error("Failed to fetch equipment:", error);
        this.errorMessage = "Failed to fetch equipment.";
      } finally {
        this.loader = false;
      }
    },
    
    editEquipment(equipment) {
      this.originalEquipment = { ...equipment };
      this.editedEquipment = { ...equipment };
      this.showEditModal = true;
      this.formError = false;
    },
    
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editedEquipment.imageFile = file;
      }
    },
    
    validateForm() {
      const required = ['machineType', 'model', 'condition', 'pricing', 'mainUse'];
      return required.every(field => 
        this.editedEquipment[field] && 
        this.editedEquipment[field].toString().trim() !== ''
      );
    },
    
    confirmSave() {
      if (!this.validateForm()) {
        this.formError = true;
        return;
      }
      this.formError = false;
      this.showConfirmModal = true;
    },
    
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    
    cancelEdit() {
      this.showEditModal = false;
      this.showConfirmModal = false;
      this.formError = false;
      this.editedEquipment = {};
    },
    
    async saveEquipment() {
      this.showConfirmModal = false;
      this.isLoading = true;
      
      try {
        const formData = new FormData();
        
        // Add all equipment data to FormData
        Object.keys(this.editedEquipment).forEach(key => {
          if (key !== 'imageFile' && this.editedEquipment[key] !== null && this.editedEquipment[key] !== undefined) {
            formData.append(key, this.editedEquipment[key]);
          }
        });
        
        // Add image file if selected
        if (this.editedEquipment.imageFile) {
          formData.append('image', this.editedEquipment.imageFile);
        }
        
        // Use the correct API endpoint for your equipment
        const response = await http.put(
          `/api/list-equipment/update/${this.editedEquipment._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        
        // Update the equipment in the local array
        const updatedEquipment = response.data.equipment || this.editedEquipment;
        this.equipments = this.equipments.map(e => 
          e._id === this.editedEquipment._id ? updatedEquipment : e
        );
        
        // Show success notification
        this.showNotification('Equipment updated successfully!', 'success');
        
        // Close modal
        this.showEditModal = false;
        
      } catch (error) {
        console.error('Error updating equipment:', error);
        this.showNotification('Error updating equipment. Please try again.', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    
    confirmDelete(equipment) {
      if (confirm(`Are you sure you want to delete ${equipment.machineType} - ${equipment.model}?`)) {
        this.deleteEquipment(equipment._id);
      }
    },
    
    async deleteEquipment(equipmentId) {
      try {
        await http.delete(`/api/list-equipment/delete/${equipmentId}`);
        this.equipments = this.equipments.filter(e => e._id !== equipmentId);
        this.showNotification('Equipment deleted successfully!', 'success');
      } catch (error) {
        console.error('Error deleting equipment:', error);
        this.showNotification('Error deleting equipment. Please try again.', 'error');
      }
    },
    
    showNotification(message, type = 'success') {
      this.notification = {
        show: true,
        message,
        type
      };
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        this.notification.show = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.input {
  background-color: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  color: #1f2937;
  width: 100%;
  border: 1px solid #d1d5db;
  transition: all 0.2s ease-in-out;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #10b981;
  border-color: #10b981;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #10b981;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #059669;
}

.btn-secondary {
  background-color: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background-color: #4b5563;
}
</style>
