<template>
  <div>
    <!-- top header -->
    <div class="bg-white grid grid-cols-12 items-center relative">
      <div
        style="background: #2e7d32"
        class="
          col-span-12
          p-1
          text-white
          justify-between
          flex
          text-lg
          font-bold
        "
      >
        <div>Shambani Connect</div>
        <div>+254700000000</div>
      </div>
      <!-- div 1 -->
      <div class="col-span-6">
        <nuxt-link to="/">
          <img
            src="~assets/images/shambani-logo.png"
            alt
            class="w-3/4 h-16 md:w-full md:h-20 md:ml-2 object-contain"
          />
        </nuxt-link>
      </div>
      <!-- end of div 1 -->

      <!-- div 2 -->
      <div class="col-span-6 flex justify-between">
        <!-- favourites icon -->
        <nuxt-link to="/whishlist" class="flex items-center">
          <font-awesome-icon
            class="h-6 w-6 md:mr-2 mt-3"
            style="color: #e11d48"
            :icon="['fas', 'heart']"
          />
        </nuxt-link>
        <!-- end -->

        <nuxt-link to="/cart" class="flex mt-3">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="{2}"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div class="relative">
            My Cart
            <span
              class="
                bg-black
                absolute
                text-white
                -top-2
                text-base
                rounded-full
                h-6
                w-6
                animate-pulse
                text-center
              "
              >{{ cart && cart.length }}</span
            >
          </div>
        </nuxt-link>
        <!-- mobile menu -->
        <div class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 float-right md:hidden mobile-menu-button"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="handleMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <div
        class="
          sidebar
          min-h-screen
          md:flex
          z-30
          bg-white
          w-80
          py-7
          px-2
          absolute
          inset-y-0
          left-0
          transform
          -translate-x-full
          md:relative md:translate-x-0
          transition
          duration-200
          ease-in-out
        "
      >
        <!-- logo -->
        <div class="flex justify-between">
          <nuxt-link to="/" class="flex items-center space-x-2 px-4">
            <span class="text-lg font-extrabold">Jatu Market</span>
          </nuxt-link>

          <button @click="handleMenu">
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'times']" />
          </button>
        </div>

        <!-- nav -->
        <nav class="ml-4">
          <ul class="md:flex">
            <li
              class="
                bg-gray-100
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              "
              v-for="category in categories.records"
              :key="category._id"
              @click="navigateMenu(category.url)"
            >
              {{ category.name }}
            </li>
          </ul>
        </nav>
        <!-- end nav -->
      </div>
      <!-- end of sidebar -->
    </div>
    <!-- end  of div 2 -->

    <!-- search input -->
    <div class="p-2 relative">
      <div>
        <input
          v-model="searchPhrase"
          placeholder="Search Here"
          type="text"
          class="
            w-full
            border border-gray-200
            py-1
            px-3
            md:justify-around
            rounded
            outline-none
            focus:border-gray-400
          "
          @keydown="search"
          @keypress="search"
          v-on:keyup.enter="search"
          @input="search"
        />
      </div>

      <div
        v-if="sResults && sResults.length > 0"
        class="
          transition
          duration-500
          ease-in-out
          searchDiv
          bg-white
          shadow-md
          absolute
          mt-10
          border-t border-gray-200
          md:justify-around
          w-full
          h-72
          top-0
          z-10
        "
      >
        <nuxt-link
          class="w-full bg-gray-200"
          v-for="item in sResults"
          :key="`${item.url}-${item.name}`"
          :to="`/product/${item.url}`"
        >
          <div class="border-b border-white bg-gray-100 p-1">
            {{ item.name }}
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["imageUrl"]),
    ...mapGetters("product", ["cart"]),
  },
  data() {
    return {
      categories: [],
      searchPhrase: "",
      sResults: [],
    };
  },
  async fetch() {
    const url = `api/categories`;
    const host = this.imageUrl;
    this.categories = await fetch(`${host}/${url}`).then((res) => res.json());
  },
  watch: {
    $route() {
      this.sResults = [];
    },
  },
  methods: {
    handleMenu() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("-translate-x-full");
    },
    navigateMenu(url) {
      this.$router.push(`/${url}`);
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("-translate-x-full");
    },
    async search() {
      const keyword = this.searchPhrase.trim().toLowerCase();
      const url = `/api/products/search/${keyword}`;

      try {
        const { data } = await http.get(url);
        const { searchResults } = data;
        if (searchResults.length > 0) {
          this.sResults = searchResults;
        } else {
          this.sResults = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    // enterEvent() {
    //   this.searchResults = [];
    // },
    // showMenu() {
    //   const menu = document.querySelector("#menu");

    //   if (menu.classList.contains("hidden")) {
    //     menu.classList.remove("hidden");
    //   } else {
    //     menu.classList.add("hidden");
    //   }
    // },
  },
};
</script>

<style scoped>
.menu-li {
  @apply py-2 md:py-0;
}
</style>