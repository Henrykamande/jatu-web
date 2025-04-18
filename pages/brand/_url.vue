<template>
  <div class="relative container mx-auto px-2">
    <div
      class="md:p-4 p-2 font-bold border-b border-gray-300 flex justify-between"
    >
      <div class="text-lg">{{ brand.name }}</div>
      <button
        @click="handleToggleMenu"
        class="rounded p-1 bg-white text-red-600 float-right text-base"
      >
        <font-awesome-icon
          class="h-4 w-4 cursor-pointer"
          style="color: black"
          :icon="['fas', 'filter']"
        />
        <span> Filters</span>
      </button>
    </div>

    <div class="md:px-6 min-h-screen">
      <div class="grid md:grid-cols-12">
        <div class="col-span-12">
          <!-- products loops -->
          <div class="grid md:grid-cols-5 grid-cols-2 gap-2 py-4">
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

    <!-- side drawer -->
    <div
      class="
        filterDiv
        border border-black
        rounded-tl-3xl rounded-bl-3xl
        transform
        min-h-screen
        top-0
        right-0
        w-64
        bg-white
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition
        translate-x-full
        duration-300
        z-30
        py-7
        px-2
      "
    >
      <!-- logo -->
      <div class="flex justify-between">
        <nuxt-link to="/" class="flex items-center space-x-2 px-4">
          <span class="text-2xl font-extrabold">Filters</span>
        </nuxt-link>

        <button @click="handleToggleMenu">
          <font-awesome-icon
            class="h-6 w-6"
            style="color: black"
            :icon="['fas', 'times']"
          />
        </button>
      </div>

      <!-- price filter -->
      <div class="bg-gray-100 p-2 block justify-center mt-2">
        <div class="text-red-600 flex justify-center">Sort By Price</div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="2" />
            <span class="ml-2">Lowest - Highest</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">Highest - Lowest</span>
          </label>
        </div>
      </div>
      <!-- end of price -->

      <!-- alcohol filter -->
      <div class="bg-gray-100 p-2 block justify-center mt-2">
        <div class="text-red-600 flex justify-center">Sort By Alcohol %</div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="2" />
            <span class="ml-2">Lowest - Highest</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">Highest - Lowest</span>
          </label>
        </div>
      </div>
      <!-- end of alcohol -->

      <!-- category filter -->
      <div class="bg-gray-100 p-2 block justify-center mt-2">
        <div class="text-red-600 flex justify-center">Sort By Category</div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="2" />
            <span class="ml-2">Single Malt</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">Blended Scotch Whisky</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">Scotch Whisky</span>
          </label>
        </div>
      </div>
      <!-- end of category filter -->

      <!-- country filter -->
      <div class="bg-gray-100 p-2 block justify-center mt-2">
        <div class="text-red-600 flex justify-center">Sort By Country</div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="2" />
            <span class="ml-2">Scotland</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">Japan</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">USA</span>
          </label>
        </div>
      </div>
      <!-- end of country filter -->

      <!-- size filter -->
      <div class="bg-gray-100 p-2 block justify-center mt-2">
        <div class="text-red-600 flex justify-center">Size</div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="2" />
            <span class="ml-2">750 Ml</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">1 Ltr</span>
          </label>
        </div>

        <div>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="radio" value="3" />
            <span class="ml-2">5 Ltr</span>
          </label>
        </div>
      </div>
      <!-- end of size filter -->
    </div>
    <!-- end of side drawer -->
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
    const brand = params.url;
    const url = `/api/products/brand/${brand}`;

    try {
      const { data } = await http.get(url);
      const { records, meta, brand } = data;
      return { records, meta, brand };
    } catch (err) {
      return { records: [], meta: {}, brand: {} };
    }
  },
  methods: {
    handleToggleMenu() {
      const sidebar = document.querySelector(".filterDiv");
      sidebar.classList.toggle("translate-x-full");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>