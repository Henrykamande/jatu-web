<template>
  <div class="min-h-screen">
    <div class="overflow-auto max-w-screen-xl mx-auto py-3 hidden md:block">
      <table class="table-auto w-full border-collapse border border-gray-400 text-left">
        <thead class="bg-gray-300 text-gray-700 font-bold">
          <tr>
            <th class="border border-gray-400 p-4">FARM CODE</th>
            <th class="border border-gray-400 p-4">COUNTRY</th>
            <th class="border border-gray-400 p-4">STATUS</th>
            <th class="border border-gray-400 p-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="farm in records" :key="farm._id" class="even:bg-gray-100 hover:bg-gray-200">
            <td class="border border-gray-400 p-3">{{ farm.serialNo }}</td>
            <td class="border border-gray-400 p-3">{{ farm.country.name }}</td>
            <td class="border border-gray-400 p-3">{{ farm.status }}</td>
            <td class="border border-gray-400 p-3">
              <nuxt-link
                :to="`/farmlands/${farm.serialNo}`"
                class="text-blue-600 underline hover:text-blue-800"
              >Read more</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MOBILE DESIGN -->
    <div class="flex flex-col space-y-6 md:hidden p-6">
      <div
        v-for="farm in records"
        :key="farm._id"
        class="border border-gray-300 rounded-sm p-4 shadow-sm"
      >
        <div class="flex justify-between items-center mb-3">
          <span class="font-semibold">Farm Code:</span>
          <span class="">{{ "FC-1/01KE/" }}</span>
        </div>
        <div class="flex justify-between items-center mb-3">
          <span class="font-semibold">Country:</span>
          <span class="">{{ farm.country.name }}</span>
        </div>
        <div class="flex justify-between items-center mb-3">
          <span class="font-semibold">Status:</span>
          <span class="">{{ farm.status }}</span>
        </div>
        <div class="flex justify-center">
          <nuxt-link
            :to="`/farmlands/${farm._id}`"
            class="text-blue-500 font-bold underline hover:text-blue-700"
          >Read more</nuxt-link>
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
    ...mapGetters(["imageUrl"])
  },

  async asyncData() {
    const url = `/api/available/farms`;

    try {
      const { data } = await http.get(url);
      const { records, meta } = data;

      return {
        records,
        meta
      };
    } catch (err) {
      return {
        records: [],
        meta: {}
      };
    }
  },
  methods: {}
};
</script>
  
  <style lang="scss" scoped>
</style>