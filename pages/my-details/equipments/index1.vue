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
            :alt="equipments.machineType"
            class="rounded-lg w-full max-w-md object-cover shadow-md"
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

      <div v-else class="text-gray-600 mt-6 text-center">No equipment listed yet.</div>

      <!-- Edit Equipment Modal -->
      <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold text-gray-800">Edit Equipment Details</h3>
           <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Edit Equipment</h2>
      
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
          <div class="flex flex-col">
            <label class="mb-2 font-bold text-gray-700">Main Use</label>
            <input 
              v-model="editedEquipment.mainUse" 
              type="text"
              class="input"
              required
            />
          </div>

          <!-- Image Upload -->
          <div class="flex flex-col">
            <label class="mb-2 font-bold text-gray-700">Equipment Image</label>
            <input 
              @change="handleImageUpload" 
              accept="image/*" 
              type="file"
              class="w-full cursor-pointer rounded-md shadow px-4 py-3 text-gray-700 focus:outline-none focus:ring file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
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
          <div class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2">
            Please fill all the required fields
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 mt-8">
          <button 
            type="submit" 
            class="btn bg-green-500 hover:bg-green-600"
            :disabled="isLoading"
          >
            <font-awesome-icon :icon="['fas', 'save']" class="icon" /> 
            {{ isLoading ? 'Saving...' : 'Save Changes' }}
          </button>
          
          <button 
            type="button" 
            @click="cancelEdit" 
            class="btn bg-gray-400 hover:bg-gray-500"
          >
            <font-awesome-icon :icon="['fas', 'times-circle']" class="icon" /> 
            Cancel
          </button>
        </div>
      </form>
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
          >
            Yes, Update
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "@/common/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPen, faTrash);

export default {
  components: {
    FontAwesomeIcon
  },
  computed: {

    ...mapGetters(["imageUrl","user"]),
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    }
  },
  data() {
    return {
      equipments: [],
      loader: false,
      errorMessage: "",
      showEditModal: false,
      editedEquipment: {}
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
      try {
        const { data } = await http.get(`/api/list-equipment/fetched-by-userSerialNo/${this.userSerialNo}`);
        this.equipments = data.record || [];
      } catch (error) {
        console.error("Failed to fetch equipment:", error);
        this.errorMessage = "Failed to fetch equipment.";
      }
      this.loader = false;
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editedEquipment.imageFile = file;
      }
    },
     validateForm() {
      const required = ['machineType', 'model', 'condition', 'pricing', 'mainUse'];
      return required.every(field => this.editedEquipment[field] && this.editedEquipment[field].trim() !== '');
    },
    editEquipment(equipment) {
      this.editedEquipment = { ...equipment };
      this.showEditModal = true;
    },
    // async saveEquipment() {
    //   try {
    //     await http.put(`/api/list-equipment/update/${this.editedEquipment._id}`, this.editedEquipment);
    //     this.equipments = this.equipments.map(e => (e._id === this.editedEquipment._id ? this.editedEquipment : e));
    //     this.showEditModal = false;
    //   } catch (error) {
    //     alert("Error updating equipment details.");
    //   }
    // },

     async saveEquipment() {
      this.showConfirmModal = false;
      this.isLoading = true;
      
      try {
        const formData = new FormData();
        
        // Add all equipment data to FormData
        Object.keys(this.editedEquipment).forEach(key => {
          if (key !== 'imageFile' && this.editedEquipment[key] !== null) {
            formData.append(key, this.editedEquipment[key]);
          }
        });
        
        // Add image file if selected
        if (this.editedEquipment.imageFile) {
          formData.append('image', this.editedEquipment.imageFile);
        }
        
        const response = await http.put(
          `/api/farm-equipments/update/${this.editedEquipment._id}`, 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );

        // Show success message
        this.$toast.success('Equipment updated successfully!');
        
        // Navigate back to equipment list
        this.$router.push('/equipment');
        
      } catch (error) {
        console.error('Error updating equipment:', error);
        this.$toast.error('Error updating equipment. Please try again.');
      } finally {
        this.isLoading = false;
      }
    },
    closeEditModal() {
      this.showEditModal = false;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.input {
  @apply bg-gray-100 px-4 py-2 rounded-md text-gray-800 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500;
}
</style>
