<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6">
      <div
        class="flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-6 rounded-xl shadow shadow-gray-50"
      >
        <h1 class="text-center font-bold text-3xl text-green-600 mt-2">AGRICULTURAL EQUIPMENT</h1>
        <p
          class="text-center text-gray-600 text-lg leading-relaxed"
        >It's very costly to purchase and manage modern agricultural equipment, especially for smallholders and beginners in agri-investments.</p>
        <p
          class="text-center text-gray-600 text-lg leading-relaxed"
        >Save your money while enjoying unlimited flexibility on technology by sharing the available modern agricultural equipment through a renting program structured to accommodate both fiscal constraints and profit maximization for the farmer and the owner respectively.</p>
        <p
          class="text-center text-gray-600 text-lg leading-relaxed"
        >While applying for this service, choose to rent the equipment if you are looking for machinery or equipment and choose to list if you have the machinery or equipment that you want to rent to farmers.</p>

        <div class="flex flex-col gap-3">
          <div class="text-center">
            <p class="text-green-600 text-lg font-semibold mb-4">TO RENT EQUIPMENT</p>
            <!-- User auth -->
            <nuxt-link v-if="isAuthenticated"
              to="/equipment/rent-farmland-equipment"
              class="px-6 py-3 font-bold text-white border border-gray-300 rounded-full hover:bg-orange-600 bg-orange-700"
            >Start Here</nuxt-link>

            <nuxt-link v-else to="/auth"
              class="px-6 py-3 font-bold text-white border border-gray-300 rounded-full hover:bg-orange-600 bg-orange-700"
            >Start Here</nuxt-link>
          </div>

          <div class="text-center">
            <p class="text-green-600 text-lg font-semibold my-4">TO LIST EQUIPMENT</p>
            <nuxt-link v-if="isAuthenticated"
              to="/equipment/list-farmland-equipment"
              class="px-6 py-3 font-bold text-white border border-gray-300 rounded-full hover:bg-orange-600 bg-orange-700"
            >Start Here</nuxt-link>
            
            <nuxt-link v-else to="/auth"
              class="px-6 py-3 font-bold text-white border border-gray-300 rounded-full hover:bg-orange-600 bg-orange-700"
            >Start Here</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="" v-else>
      <register></register>
    </div> -->
  </div>
</template>
  
<script>

export default {
  computed: {
    isAuthenticated() {
      return process.client ? !!localStorage.getItem("token") : false;
    }
  },
};
</script>
  
  <style lang="scss" scoped>
</style>