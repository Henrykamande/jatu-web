<template>
  <div class="container mx-auto px-4 md:px-48 py-8">
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <!-- Header -->
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 rounded-md shadow-lg">
        <h2 class="text-2xl font-semibold">Rented Farmlands</h2>
        <p class="text-sm opacity-90">Below are details of your rented farm.</p>
      </div>

      <!-- Loader & Error Message -->
      <div v-if="loader" class="text-green-600 mt-6 text-center">Loading your farmland details...</div>
      <div v-if="errorMessage" class="text-red-600 mt-6 text-center">{{ errorMessage }}</div>

      <!-- Equipment List -->
      <!-- <div v-if="equipments.length" class="grid md:grid-cols-2 gap-6 mt-6">
        <div v-for="equipment in equipments" :key="equipment.serialNo" class="p-6 bg-white rounded-lg shadow-lg border">
          <h3 class="text-lg font-semibold text-gray-800">{{ equipment.make }} - {{ equipment.model }}</h3>
          <p class="text-sm text-gray-700 mt-2"><strong>Condition:</strong> {{ equipment.condition }}</p>
          <p class="text-sm text-gray-700 mt-2"><strong>Pricing:</strong> {{ equipment.pricing }}</p>
          <p class="text-sm text-gray-700 mt-2"><strong>Main Use:</strong> {{ equipment.mainUse }}</p>
          <p class="text-sm text-gray-700 mt-2"><strong>Contract Type:</strong> {{ equipment.preferredContract }}</p>
          <button @click="editEquipment(equipment)" class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Edit Details</button>
        </div>
      </div> -->

      <div v-else class="text-gray-600 mt-6 text-center">No farmlands rented yet.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "@/common/index.js";

export default {
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
      errorMessage: ""
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
      alert(`Editing ${equipment.make} - ${equipment.model}`);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1280px;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.rounded-md {
  border-radius: 8px;
}
</style>
