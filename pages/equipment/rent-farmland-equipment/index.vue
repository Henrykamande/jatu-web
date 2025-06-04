<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6">
      <div
        class="flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-6 rounded-xl shadow shadow-gray-50"
      >
        <h1 class="text-center font-bold text-3xl text-green-600 mt-2">RENT EQUIPMENT</h1>
        <p
          class="text-center text-gray-600 text-lg leading-relaxed"
        >Choose the machine category by use from the following</p>
        <div class="md:m-6">
          <table class="table-auto w-full border-collapse border border-gray-300 rounded text-left">
            <thead class="bg-gray-200 text-gray-800">
              <tr>
                <th class="border border-gray-400 p-3">Farming Activity (use)</th>
                <th class="border border-gray-400 p-3">Machine</th>
              </tr>
            </thead>
            <tbody>
              <tr class v-for="category in uniqueCategories"
              :key="category">
                <td class="border border-gray-400 p-3 capitalize">{{ category }}</td>
                <td class="border border-gray-400 p-3">
                  <nuxt-link
                    :to="`/equipment/rent-farmland-equipment/${formatCategoryForURL(category)}`"
                    class="text-blue-500 underline hover:text-blue-700"
                  >View</nuxt-link>
                </td>
              </tr>
              
            </tbody>
          </table>
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
    const url = `/api/list-equipment`;

    try {
      const { data } = await http.get(url);
      const { records, meta } = data;
      const categories = [...new Set(data.records.map(item => item.mainUse.toLowerCase()))];
      return {
        records,
        meta,
        uniqueCategories: categories
      };
    } catch (err) {
      return {
        records: [],
        meta: {}
      };
    }
  },
  methods: {
    formatCategoryForURL(category) {
      return category.toLowerCase().replace(/\s+/g, '-');
    }
  }
};
</script>
    
    <style lang="scss" scoped>
</style>