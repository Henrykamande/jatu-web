  <template>
  <div class="container mx-auto px-4 md:px-20 py-10">
    <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
      <div class="grid md:grid-cols-2 gap-8" v-if="equipments">
        <!-- Equipment Image -->
        <div class="flex justify-center items-center">
          <img
            :src="`${imageUrl}/uploads/projects/${equipments.imageLink}`"
            :alt="equipments.machineType"
            class="rounded-lg w-full max-w-md object-cover shadow-md"
          />
        </div>

        <!-- Equipment Details -->
        <div>
          <h1 class="text-3xl font-bold text-green-700 mb-4">
            {{ equipments.machineType }} - {{ equipments.model }}
          </h1>
          <p class="text-gray-600 mb-2"><strong>Serial No:</strong> {{ equipments.serialNo }}</p>
          <p class="text-gray-600 mb-2"><strong>Make:</strong> {{ equipments.make }}</p>
          <p class="text-gray-600 mb-2"><strong>Capacity:</strong> {{ equipments.capacity }}</p>
          <p class="text-gray-600 mb-2"><strong>Drive Type:</strong> {{ equipments.driveType }}</p>
          <p class="text-gray-600 mb-2"><strong>Main Use:</strong> {{ equipments.mainUse }}</p>
          <p class="text-gray-600 mb-2"><strong>Condition:</strong> {{ equipments.condition }}</p>
          <p class="text-gray-600 mb-2"><strong>Timeline Available:</strong> {{ formatDate(equipments.timeLine) }}</p>

          <div class="mt-6 bg-gray-100 p-4 rounded-md">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Pricing Details</h2>
            <p class="text-gray-700"><strong>Preferred Contract:</strong> {{ equipments.preferredContract }}</p>
            <p class="text-gray-700"><strong>Pricing Basis:</strong> {{ equipments.pricing }}</p>
            <p class="text-gray-700"><strong>Average Price:</strong> KES {{ parseInt(equipments.averagePrice).toLocaleString() }}</p>
          </div>

          <div class="mt-6 bg-gray-100 p-4 rounded-md">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Location Details</h2>
            <p class="text-gray-700"><strong>Country:</strong> {{ equipments.countryAt }}</p>
            <p class="text-gray-700"><strong>Region:</strong> {{ equipments.region }}</p>
            <p class="text-gray-700"><strong>District:</strong> {{ equipments.district }}</p>
            <p class="text-gray-700"><strong>Ward:</strong> {{ equipments.ward }}</p>
            <p class="text-gray-700"><strong>Village:</strong> {{ equipments.village }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="loading" class="text-center text-gray-500">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    </div>
  </div>
</template>


<script>
import { http } from '@/common/index.js'


import { mapGetters } from "vuex";

 
export default {
 computed: {
    ...mapGetters(["imageUrl"]),
  },

  async asyncData({ params }) {

    try {
      const { data } = await http.get(`/api/list-equipment/fetch-by-id/${params.id}`)
      return { equipments: data.record }
    } catch (err) {
      console.error('Failed to fetch equipment details', err)
     return { 
        equipments: null,
        error: 'Failed to load equipment details'
      }
    }
  },
 data() {
    return {
      equipments: null,
      loading: false,
      error: null
    }
  },
   async mounted() {
    await this.refetchEquipment()
  },
  methods: {

 
    async refetchEquipment() {
      this.loading = true
      console.log(this.$route.params.id);
      try {
        const { data } = await http.get(`/api/list-equipment/fetched-by-id/${this.$route.params.id}`)
        this.equipments = data.record
        console.log(this.equipments);
        this.error = null
      } catch (err) {
        console.error('Failed to fetch equipment details', err)
        this.error = 'Failed to load equipment details'
      }
      this.loading = false
    },

    formatDate(dateString) {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}

</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
