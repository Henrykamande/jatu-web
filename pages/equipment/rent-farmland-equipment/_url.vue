<template>
   <div class="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12">
        <!-- Enhanced Header Section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
            </svg>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
            <span class="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              AGRI-MACHINE
            </span>
            <br>
            <span class="text-gray-500">TOOLS & EQUIPMENT</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover and rent premium agricultural machinery from our comprehensive collection
          </p>
          
          <!-- Decorative line -->
          <div class="flex items-center justify-center mt-8">
            <div class="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-64"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full mx-4"></div>
            <div class="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-64"></div>
          </div>
        </div>

        <!-- Equipment Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div
            v-for="equipment in records"
            :key="equipment._id"
            class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100/50 backdrop-blur-sm"
          >
            <!-- Image Container with Overlay -->
            <div class="relative overflow-hidden rounded-t-3xl">
              <img
                class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out cursor-pointer"
                :src="`${imageUrl}/uploads/projects/${equipment.imageLink}`"
                :alt="`${equipment.machineType} - ${equipment.model}`"
                @click="viewEquipmentDetails(equipment._id)"
              />
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200 shadow-sm">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available
                </span>
              </div>
              
              <!-- Quick Action Overlay -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  @click="viewEquipmentDetails(equipment._id)"
                  class="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>

            <!-- Content Container -->
            <div class="p-8">
              <!-- Equipment Header -->
              <div class="mb-6">
                <div class="flex items-start justify-between mb-3">
                  <h2 class="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {{ equipment.machineType }}
                  </h2>
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="text-sm text-gray-500 font-medium">4.8</span>
                  </div>
                </div>
                
                <p class="text-gray-600 font-medium text-lg">{{ equipment.model }}</p>
                
                <!-- Quick Info Pills -->
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    {{ equipment.capacity }}
                  </span>
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                    {{ equipment.region }}
                  </span>
                </div>
              </div>

              <!-- Quick Preview Info -->
              <div class="space-y-4 mb-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <div class="text-xl font-bold text-green-600">{{ equipment.capacity }}</div>
                    <div class="text-sm text-gray-500 font-medium">Capacity</div>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4 text-center">
                    <div class="text-xl font-bold text-blue-600">{{ equipment.region }}</div>
                    <div class="text-sm text-gray-500 font-medium">Location</div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100">
                  <div class="text-2xl font-bold text-green-600">{{ equipment.pricing }}</div>
                  <div class="text-sm text-gray-600 font-medium">Starting Price</div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <!-- View Details Button -->
                <button
                  @click="viewEquipmentDetails(equipment._id)"
                  class="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group/btn"
                >
                  <svg class="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Full Details
                </button>

                <!-- Apply to Rent Button -->
               <button
  @click="applyToRent(equipment)"
  class="group/apply relative block w-full text-center bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl overflow-hidden"
>
  <!-- Animated background -->
  <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/apply:translate-x-full transition-transform duration-1000"></div>
  
  <span class="relative flex items-center justify-center">
    <svg class="w-5 h-5 mr-3 group-hover/apply:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    APPLY TO RENT
    <svg class="w-4 h-4 ml-3 group-hover/apply:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
    </svg>
  </span>
</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Empty State -->
        <div v-if="!records || records.length === 0" class="text-center py-20">
          <div class="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-8">
            <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-700 mb-4">No Equipment Available</h3>
          <p class="text-xl text-gray-500 max-w-md mx-auto">Check back later for new equipment listings or contact us for custom requirements.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["imageUrl"]),
    selectedEquipment() {
      return this.$store.getters['equipment/selectedEquipment']
    }
  },
  data() {
    return {
      showDetails: []
    };
  },
  async asyncData({ params }) {
    try {
      const url = `/api/list-equipment`;
      const { data } = await http.get(url);
      const category = params.url;
      const filteredRecords = data.records.filter(equipment => equipment.mainUse.toLowerCase().replace(/\s+/g, '-') == category);
      return {
        records: filteredRecords,
      };
    } catch (err) {
      return {
        records: [],
      };
    }
  },

  methods: {

    viewEquipmentDetails(equipmentId) {
      this.$router.push(`/equipment/${equipmentId}`);
    },
    toggleDetails(eqId) {
      this.$set(this.showDetails, eqId, !this.showDetails[eqId]);
    },
     applyToRent(equipment) {
      this.$store.dispatch('equipment/selectEquipment', equipment)
    this.$router.push(`/equipment/apply/${equipment.serialNo}`)
    }
  }
};

</script>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.4s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #059669);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #059669, #047857);
}
</style>
