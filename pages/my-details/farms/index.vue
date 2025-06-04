<template>
  <div class="container mx-auto px-4 md:px-24 py-8">
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">

      <!-- Header -->
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 rounded-md shadow-lg">
        <h2 class="text-2xl font-semibold">Rented Farmlands</h2>
        <p class="text-sm opacity-90">Below are details of your rented farm.</p>
      </div>

      <!-- Loader & Error Message -->
      <div v-if="loader" class="text-green-600 mt-6 text-center animate-pulse">Loading your farmland details...</div>
      <div v-if="errorMessage" class="text-red-600 mt-6 text-center font-semibold">{{ errorMessage }}</div>

      <!-- Farm Details -->
      <div v-if="farms.length" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div v-for="(farm, index) in farms" :key="farm._id"
          class="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-bold text-green-700">{{ farm.farm.serialNo }}</h3>
          <p class="text-gray-600"><strong>Country:</strong> {{ farm.farm.countryName || "Loading..." }}</p>
          <p class="text-gray-600"><strong>District:</strong> {{ farm.farm.district }}</p>
          <p class="text-gray-600"><strong>Village:</strong> {{ farm.farm.village }}</p>
          <p class="text-gray-600"><strong>Acres:</strong> {{ farm.acres }}</p>
          <p class="text-gray-600"><strong>Contact:</strong> {{ farm.phoneNumber }}</p>

          <!-- Action Buttons -->
          <div class="mt-4 flex space-x-4">
            <button @click="editFarm(farm)"
              class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center">
              <font-awesome-icon :icon="['fas', 'edit']" class="mr-2" /> Edit
            </button>
            <button @click="deleteFarm(farm._id, index)"
              class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center">
              <font-awesome-icon :icon="['fas', 'trash']" class="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-gray-500 mt-6 text-center">No farmlands rented yet.</div>

      <!-- Edit Farm Modal -->
      <div v-if="showEditModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 class="text-xl font-bold text-green-400 mb-4">Edit Farm Details</h2>
          <div class="flex flex-col">
            <label class="font-semibold text-green-400" for="acres">Acres</label>
            <input v-model="selectedFarm.acres" class="border p-2 w-full mb-2" placeholder="Acres">
          </div>
          <div class="flex flex-col">
            <label class="font-semibold text-green-400" for="contact">Contact</label>
          <input v-model="selectedFarm.phoneNumber" class="border p-2 w-full mb-2" placeholder="Contact">
          </div>
          <div class="flex gap-3">
            <button @click="saveFarmChanges"
              class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center">
              <font-awesome-icon :icon="['fas', 'check']" class="mr-2" /> Save
            </button>
            <button @click="showEditModal = false"
              class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center ml-2">
              <font-awesome-icon :icon="['fas', 'times']" class="mr-2" /> Cancel
            </button>
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
import { faEdit, faTrash, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faTrash, faTimes, faCheck);

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
      farms: [],
      loader: false,
      errorMessage: "",
      showEditModal: false,
      selectedFarm: null
    };
  },
  async mounted() {
    await this.fetchUserFarms();
  },
  methods: {
    async fetchUserFarms() {
      if (!this.userSerialNo) {
        this.errorMessage = "No user serial number found.";
        return;
      }

      this.loader = true;
      try {
        const response = await http.get(`/api/farmlands-application/${this.userSerialNo}`);
        this.farms = response.data.record;

        // Fetch country names dynamically
        await Promise.all(
          this.farms.map(async (farm, index) => {
            const countryName = await this.fetchCountryName(farm.farm.country);
            this.$set(this.farms[index].farm, "countryName", countryName.name);
          })
        );

      } catch (error) {
        this.errorMessage = "Failed to fetch farms.";
      }
      this.loader = false;
    },

    async fetchCountryName(countryId) {
      try {
        const response = await http.get(`/api/countries/by/id/${countryId}`);
        return response.data.record;
      } catch (error) {
        console.error("Failed to fetch country name", error);
        return "Unknown Country";
      }
    },

    editFarm(farm) {
      this.selectedFarm = { ...farm };
      this.showEditModal = true;
    },

    async saveFarmChanges() {
      try {
        await http.put(`/api/farmlands-application/${this.selectedFarm._id}`, this.selectedFarm);
        this.showEditModal = false;
        await this.fetchUserFarms();
      } catch (error) {
        console.error("Failed to update farm", error);
      }
    },

    async deleteFarm(farmId, index) {
      try {
        await http.delete(`/api/farmlands-application/${farmId}`);
        this.farms.splice(index, 1); // Update UI immediately
      } catch (error) {
        console.error("Failed to delete farm", error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1280px;
}

.shadow-md {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.rounded-lg {
  border-radius: 10px;
}

.hover\:shadow-md:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
