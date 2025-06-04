<template>
  <div class="relative container mx-auto px-2">
    <div
      class="
        md:p-4
        p-2
        text-2xl
        font-bold
        border-b border-gray-300
        flex
        justify-center
      "
    >
      <div>Wish List</div>
    </div>

    <div class="md:px-6 min-h-screen">
      <div class="grid md:grid-cols-12">
        <div class="col-span-12">
          <!-- products loops -->
          <div class="grid md:grid-cols-5 grid-cols-2 gap-2 py-4">
            <div
              class="card p-2"
              v-for="product in favorites"
              :key="product._id"
            >
              <product :product="product" />
            </div>
          </div>
          <!-- end of products loop -->
        </div>
      </div>
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
    ...mapGetters(["favorites"]),
  },
  data() {
    return {
      category: {},
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      activeCategory: null,
      isOpen: false,
    };
  },
  head() {
    const meta = this.meta || {};
    return {
      title: `${meta.metaTitle}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: meta.metaDescription,
        },
        { hid: "og:title", name: "og:title", content: `${meta.metaTitle}` },
        {
          hid: "og:description",
          name: "og:description",
          content: meta.metaDescription,
        },
        { hid: "og:type", name: "og:type", content: "website" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>