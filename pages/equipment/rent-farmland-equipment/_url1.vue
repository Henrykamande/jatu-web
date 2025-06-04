<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6">
      <div
        class="flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-6 rounded-xl shadow shadow-gray-50"
      >
        <h1
          class="text-center font-bold text-3xl text-green-600 mt-2"
        >AGRI-MACHINE TOOLS AND EQUIPMENT</h1>
        <div class>
          <p
            class="text-center text-gray-600 text-lg leading-relaxed"
          >Select specific machine / equipment from the following list</p>

          <div class="flex flex-col md:flex-row my-5 gap-3">
            <div
              class="flex flex-1 max-w-xs justify-center shadow rounded-lg p-3"
              v-for="equipment in records"
              :key="equipment._id"
            >
              <div class="flex w-full flex-col gap-2">
                <img
                  class="w-full h-80 rounded-md object-cover"
                  :src="`${imageUrl}/uploads/projects/${equipment.imageLink}`"
                  alt="Rent - Equipment"
                />
                <div class="flex flex-col gap-2">
                  <h1 class="font-semibold text-2xl text-center text-green-600">Details</h1>
                  <button
                    @click="toggleDetails(equipment._id)"
                    class="text-blue-500 underline font-bold"
                  >{{ showDetails[equipment._id] ? "Hide" : "Show" }}</button>
                </div>
                <div class="flex flex-col gap-3" v-if="showDetails[equipment._id]">
                  <div class>
                    <p class="font-normal text-xl text-green-600 mt-2">Machine Specifics</p>
                    <p class>
                      <span class="font-semibold">Type:</span>
                      {{ equipment.machineType }}
                    </p>
                    <p class>
                      <span class="font-semibold">Model:</span>
                      {{ equipment.model }}
                    </p>
                    <p class>
                      <span class="font-semibold">Capacity:</span>
                      {{ equipment.capacity }}
                    </p>
                    <p class>
                      <span class="font-semibold">Activity / Use:</span>
                      {{ equipment.mainUse }}
                    </p>
                  </div>
                  <div class>
                    <p class="font-normal text-xl text-green-600 mt-2">Current Location</p>
                    <p class>
                      <span class="font-semibold">Country:</span>
                      {{ equipment.countryAt }}
                    </p>
                    <p class>
                      <span class="font-semibold">Region:</span>
                      {{ equipment.region }}
                    </p>
                    <p class>
                      <span class="font-semibold">Ward:</span>
                      {{ equipment.ward }}
                    </p>
                    <p class>
                      <span class="font-semibold">Village:</span>
                      {{ equipment.village }}
                    </p>
                  </div>
                  <div class>
                    <p class="font-normal text-xl text-green-600 mt-2">Engagement</p>
                    <p class>
                      <span class="font-semibold">Engagement:</span>
                      {{ equipment.preferredContract }}
                    </p>
                    <p class>
                      <span class="font-semibold">Pricing:</span>
                      {{ equipment.pricing }}
                    </p>
                    <p class>
                      <span class="font-semibold">Price:</span>
                      {{ equipment.averagePrice }}
                    </p>
                    <p class>
                      <span class="font-semibold">Availability:</span>
                      {{ equipment.timeLine}}
                    </p>
                  </div>
                  <!-- <p class><span class="">:</span>{{ equipment.condition }}</p> -->
                  <!-- <p class><span class="">:</span>{{ equipment.make }}</p> -->
                  <!-- <p class><span class="">:</span>{{ equipment.driveType }}</p> -->
                  <nuxt-link
                    :to="`/equipment/apply/${equipment.serialNo}`"
                    class="text-blue-500 font-bold"
                  >APPLY TO RENT</nuxt-link>
                </div>
                <!-- Apply button -->
              </div>
            </div>
          </div>
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
    toggleDetails(eqId) {
      this.$set(this.showDetails, eqId, !this.showDetails[eqId]);
    },
  }
};
</script>
      
      <style lang="scss" scoped>
</style>