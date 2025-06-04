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
      v-if="category"
    >
      <div>{{ meta.h1 }}</div>
    </div>

    <div class="md:px-6 min-h-screen">
      <div class="grid md:grid-cols-12">
        <div class="col-span-12">
          <!-- products loops -->
          <div class="grid md:grid-cols-4 grid-cols-2 gap-2 py-4">
            <div class="card p-2" v-for="product in records" :key="product._id">
              <product :product="product" />
            </div>
          </div>
          <!-- end of products loop -->

          <!-- footer content -->
          <div class="bg-white p-3 mb-3">
            <section v-html="meta.footerContent"></section>
          </div>
          <!-- end of loop content -->
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
  },
  data() {
    return {
      category: {},
      isOpen: false,
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      records: [],
      brands: [],
      meta: {},
      subcategories: [],
      activeCategory: null,
      record: {},
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
  async asyncData({ params, error }) {
    const subcategory = params.subcategory;

    const url = `/api/products/query/category/${subcategory}`;

    try {
      const { data } = await http.get(url);

      const categoryData = await http.get(subcategory);

      const { records, meta } = data;
      const { record } = categoryData.data;

      return { records, meta, category: record };
    } catch (err) {
      console.log("error occured", err);
      return {
        records: [],
        meta: {},
        record: {},
      };
    }
  },
  methods: {
    handleToggleMenu() {
      const sidebar = document.querySelector(".filterDiv");
      sidebar.classList.toggle("translate-x-full");
    },
    async categoryFilter() {
      const category = this.filterCategory;
      const details = {
        category: category,
        sizeFilter: this.sizeFilter,
        alcoholFilter: this.alcoholFilter,
        priceFilter: this.priceFilter,
      };
      const url = `api/products/filter`;

      try {
        const self = this;
        await http.post(url, details).then((res) => {
          if (res.data.state) {
            self.records = res.data.records;
          } else {
            self.emailError = true;
            self.loader = false;
          }
        });
      } catch (err) {}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>