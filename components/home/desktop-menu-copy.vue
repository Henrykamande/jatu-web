<template>
  <div>
    <!-- top header -->
    <div
      class="
        items-center
        bg-white
        justify-center
        grid
        md:grid-cols-7
        p-2
        border-b border-purple-500
      "
    >
      <!-- logo div -->
      <div class="col-span-2 flex items-center">
        <div>
          <nuxt-link to="/">
            <img
              src="~assets/images/jubilantafrofarms-logo.png"
              alt
              class="h-16 md:h-16 md:ml-1 object-contain"
              style="width: 142px; height: 90px"
            />
          </nuxt-link>
        </div>
        <div class="flex justify-center text-xl font-bold">
          Call: +254700000000
        </div>
      </div>
      <!-- end -->

      <!-- div 2 -->
      <div class="col-span-3 md:justify-around relative mx-3">
        <div></div>
        <div
          v-if="searchResults && searchResults.length > 0"
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
            v-for="item in searchResults"
            :key="`${item.url}-${item.name}`"
            :to="`/product/${item.url}`"
          >
            <div class="border-b border-white bg-gray-100 p-1">
              {{ item.name }}
            </div>
          </nuxt-link>
        </div>
        <!-- search results -->

        <!-- end of search results -->
      </div>
      <!-- end -->

      <!-- div 4 -->
      <div class="col-span-2 flex pr-8">
        <!-- favourites icon -->
        <nuxt-link to="/whishlist" class="flex items-center">
          <font-awesome-icon
            class="h-6 w-6 md:mr-2 mt-3"
            style="color: #e11d48"
            :icon="['fas', 'heart']"
          />
        </nuxt-link>
        <!-- end -->
        <div class="mr-3 pt-2">
          <nuxt-link to="/cart" class="flex items-center">
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
                  text-center
                "
                >{{ cart && cart.length }}</span
              >
            </div>
          </nuxt-link>
        </div>

        <div class="group inline-block relative ml-6">
          <button
            class="font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <font-awesome-icon class="h-4 w-4 mr-1" :icon="['fas', 'user']" />
            <span v-if="user" class="mr-1"> {{ user.first_name }} </span>
            <span v-else class="mr-1">Account</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul class="absolute hidden pt-1 group-hover:block">
            <li class="w-36">
              <nuxt-link
                v-if="user"
                class="
                  bg-gray-200
                  hover:bg-gray-400
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                "
                to="/checkout"
                >My Account</nuxt-link
              >
              <nuxt-link
                v-else
                class="
                  bg-gray-200
                  hover:bg-gray-400
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                "
                to="/register"
                >Register</nuxt-link
              >
            </li>

            <li class="w-36">
              <button
                v-if="user"
                class="
                  rounded-t
                  bg-gray-200
                  hover:bg-gray-400
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                  w-36
                "
                @click="logout"
              >
                Logout
              </button>
              <nuxt-link
                v-else
                class="
                  rounded-t
                  bg-gray-200
                  hover:bg-gray-400
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                "
                to="/login"
                >Login</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end  of top bar-->

    <!-- navbar -->
    <!-- #2f93a3 -->
    <div
      style="background: #4caf50"
      class="md:flex items-center p-3 justify-between"
    >
      <nav class="ml-4">
        <ul class="md:flex flex-wrap">
          <li
            class="menu-li group inline-block relative"
            v-for="category in categories.records"
            :key="category._id"
          >
            <!-- {{ category.subs }} -->
            <nuxt-link
              class="font-medium text-lg text-white p-2"
              :to="`/${category.url}`"
              >{{ category.name }}</nuxt-link
            >
            <ul
              v-if="category.subs && category.subs.length > 0"
              class="
                w-56
                bg-white
                shadow-xl
                absolute
                hidden
                group-hover:block
                z-40
                divide-y divide-gray-300 divide-solid
              "
            >
              <li
                class="block py-2 hover:bg-gray-100"
                v-for="subcategory in category.subs"
                :key="subcategory._id"
              >
                <nuxt-link
                  :to="`/${category.url}/${subcategory.url}`"
                  class="p-2 text-xs font-normal"
                  >{{ subcategory.name }}</nuxt-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!-- end of navbar -->
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["imageUrl", "user"]),
    ...mapGetters("product", ["cart"]),
    // user() {
    //   const token = localStorage.getItem("token");
    //   return token;
    //   // var decoded = jwt_decode(token);
    //   // return decoded;
    // },
  },
  data() {
    return {
      categories: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true,
    };
  },
  async fetch() {
    const url = `api/categories`;
    const host = this.imageUrl;
    this.categories = await fetch(`${host}/${url}`).then((res) => res.json());
  },
  watch: {
    $route() {
      this.searchResults = [];
    },
  },
  methods: {
    userMenu() {
      const menuBtn = document.querySelector("#menu-btn");
      const dropdown = document.querySelector("#dropdown");

      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("block");
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    async search() {
      const keyword = this.searchPhrase.trim().toLowerCase();
      const url = `/api/products/search/${keyword}`;

      try {
        const { data } = await http.get(url);
        const { searchResults } = data;
        this.searchResults = searchResults;
      } catch (err) {
        this.searchResults = [];
      }
    },
    activateSearch() {
      this.blured = false;
    },
    enterEvent() {
      this.searchResults = [];
    },
  },
};
</script>

<style scoped>
.menu-li {
  @apply py-2; md:py-0;
}

.search-drop-down {
  /* min-height: 40px; */
  /* transition: all 0.3s ease-in-out; */
  position: absolute;
  margin-top: 40px;
  z-index: 300;
}

/* drop down styles */
.search-drop {
  background: #fff;
  transition: all 0.3s ease-in-out;
  border-top: 1px solid #e3e3e3;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.26s ease;
  box-shadow: 2px 2px 4px #bdbdbd;
}

.searching {
  min-height: 30px;
  /* transition: all 0.3s ease-in-out; */
  transform: scaleY(1);
}
</style>