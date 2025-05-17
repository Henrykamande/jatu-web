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
        <div class="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h3 class="text-xl font-semibold text-gray-800">Edit Equipment Details</h3>
          <div class="space-y-4 mt-4">
            <label class="block text-gray-700 font-medium">Machine Type</label>
            <input v-model="editedEquipment.machineType" type="text" class="input">

            <label class="block text-gray-700 font-medium">Model</label>
            <input v-model="editedEquipment.model" type="text" class="input">

            <label class="block text-gray-700 font-medium">Condition</label>
            <input v-model="editedEquipment.condition" type="text" class="input">

            <label class="block text-gray-700 font-medium">Pricing</label>
            <input v-model="editedEquipment.pricing" type="text" class="input">

            <label class="block text-gray-700 font-medium">Main Use</label>
            <input v-model="editedEquipment.mainUse" type="text" class="input">
          </div>
          <div class="flex justify-center gap-4 mt-4">
            <button @click="saveEquipment" class="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">Save Changes</button>
            <button @click="closeEditModal" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">Cancel</button>
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
    ...mapGetters(["user"]),
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
    editEquipment(equipment) {
      this.editedEquipment = { ...equipment };
      this.showEditModal = true;
    },
    async saveEquipment() {
      try {
        await http.put(`/api/list-equipment/update/${this.editedEquipment._id}`, this.editedEquipment);
        this.equipments = this.equipments.map(e => (e._id === this.editedEquipment._id ? this.editedEquipment : e));
        this.showEditModal = false;
      } catch (error) {
        alert("Error updating equipment details.");
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
