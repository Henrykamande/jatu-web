<template>
  <div class="mt-2">
    <div class="p-2 bg-red-600 text-white text-lg">Offers</div>
    <div
      v-if="products.length > 0"
      class="grid md:grid-cols-5 grid-cols-2 gap-2 my-2"
    >
      <!-- products -->
      <div v-for="product in products" :key="product._id" class="card p-2">
        <product :product="product" />
      </div>
      <!-- products -->
    </div>
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapGetters(["imageUrl"]),
  },
  data() {
    return {
      imageName: "moet.jpeg",
      products: [],
    };
  },
  async fetch() {
    const url = `api/products/fetch/offers`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then((res) => res.json());
    if (data.records) {
      this.products = data.records;
    }
  },
};
</script>

<style>
.card {
  @apply bg-white rounded overflow-hidden shadow-lg;
}
</style>