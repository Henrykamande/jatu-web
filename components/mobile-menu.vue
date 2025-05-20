<template>
  <div>
    <div class="bg-white grid border-b border-green-400 grid-cols-12 justify-center items-center relative">
      <!-- top div -->
      <div style="background: #2e7d32" class="
          col-span-12
          p-2
          text-white
          justify-between
          flex
          text-lg
          font-bold
        ">
        <div class="text-xs">Jubilant Afro Farms</div>
        <div class="text-xs">+254 752 940 909</div>

        <!-- user account -->
        <div v-if="isAuthenticated">
          <div class="col-span-1 flex place-content-center relative">
            <button @click="showMenu">
              <font-awesome-icon :icon="['fas', 'user-circle']" class="text-white text-xl md:text-2xl" />
            </button>
            <div v-if="showDropdown"
              class="absolute flex flex-col items-center right-0 text-gray-400 font-normal mt-10 w-32 bg-white border rounded-md shadow">
              <ul>
                <li>
                  <nuxt-link to="/my-details/account" class="block py-1 hover:bg-gray-100">Account</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/my-details/equipments" class="block py-1 hover:bg-gray-100">Equipments</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/my-details/farms" class="block py-1 hover:bg-gray-100">Farms</nuxt-link>
                </li>
                <li>
                  <button @click="logout" class="flex py-1 text-red-600 hover:bg-gray-100 w-full text-left">
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- v-else -->
        <nuxt-link class="text-white bg-orange-400 rounded font-bold px-2 py-0 text-sm" v-else to="/global-auth/login">
          Login
        </nuxt-link>
      </div>
      <!-- end of top bar -->

      <div class="col-span-6">
        <nuxt-link to="/">
          <img src="~assets/images/jani-logo.png" alt class="w-1/2 h-12 md:w-full md:h-20 md:ml-2 object-contain" />
        </nuxt-link>
      </div>
      <!-- end of div 1 -->

      <!-- div 2 -->
      <div class="col-span-6 flex justify-end pr-4">

        <!-- mobile menu -->
        <div class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 float-right md:hidden mobile-menu-button" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" @click="handleMenu">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      <div class="
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
        ">
        <!-- logo -->
        <div class="flex justify-between">
          <nuxt-link to="/" class="flex items-center space-x-2 px-4">
            <span class="text-lg font-bold">Jubilant Afro Farms Market</span>
          </nuxt-link>

          <button @click="handleMenu">
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'times']" />
          </button>
        </div>

        <!-- nav -->
        <nav class="ml-4 bg-green-600">
          <ul class="md:flex">
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMenu()">
              Home
            </li>
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('about')">
              About Us
            </li>
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('services')">
              Agri Support
            </li>
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('projects')">
              Partnership Projects
            </li>

            <li class="menu-li group inline-block relative text-white px-4 border-b border-white w-full">
              <a href="/services" class="inline-flex gap-3 items-center" @click="toggleDropdown">Services
                <!-- <font-awesome-icon class="h-6 w-6 cursor-pointer" style="color: #fff" :icon="['fas', 'caret-down']" /> -->
              </a>

              <!-- <ul
                :class="showDropdown ? 'block' : 'hidden'"
                class="
                  w-56
                  bg-orange-600
                  text-white
                  shadow-xl
                  absolute
                  hidden
                  group-hover:block
                  z-40
                  divide-y divide-gray-300 divide-solid
                "
              >
                <li
                  class="block py-2 px-4 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="`/farmlands`"
                    class="p-2 text-xs font-normal"
                    >Farmlands</nuxt-link
                  >
                </li>
                <li
                  class="block py-2 px-4 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="`/equipment`"
                    class="p-2 text-xs font-normal"
                    >Equipment</nuxt-link
                  >
                </li>
                <li
                  class="block py-2 px-4 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="`/financing`"
                    class="p-2 text-xs font-normal"
                    >Financing</nuxt-link
                  >
                </li>
                <li
                  class="block py-2 px-4 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="`/marketing`"
                    class="p-2 text-xs font-normal"
                    >Marketing</nuxt-link
                  >
                </li>
              </ul> -->
            </li>

            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('location')">
              Our Location
            </li>
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('blog')">
              Blog
            </li>
            <li class="menu-li group inline-block relative text-white px-4">
              <a href="#" class="inline-flex items-center font-bold">Market Place
                <font-awesome-icon class="h-6 w-6 cursor-pointer" style="color: #fff" :icon="['fas', 'caret-down']" />
              </a>

              <ul v-if="categories && categories.length > 0" class="
                  w-56
                  bg-orange-600
                  text-white
                  shadow-xl
                  absolute
                  hidden
                  group-hover:block
                  z-40
                  divide-y divide-gray-300 divide-solid
                ">
                <li class="block py-2 px-4 hover:bg-gray-100" v-for="category in categories" :key="category._id">
                  <nuxt-link :to="`/category/${category.url}`" class="p-2 text-xs font-normal">{{ category.name
                    }}</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="
                bg-green-600
                text-white
                border-b border-white
                menu-li
                block
                px-4
                rounded
                transition
                duration-200
                hover:bg-blue-400 hover:text-white
              " @click="navigateMain('contact-us')">
              Contact Us
            </li>
          </ul>
        </nav>
        <!-- end nav -->
      </div>
      <!-- end of sidebar -->
    </div>
    <!-- end  of div 2 -->
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["imageUrl",  "isAuthenticated"]),
    ...mapGetters("product", ["cart"]),
  },
  data() {
    return {
      categories: [],
      disabled: true,
      services: [],
      searchPhrase: "",
      sResults: [],
      showDropdown: false
    };
  },

  async fetch() {
    const url = `api/categories`;
    const servicesUrl = `api/services`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then((res) => res.json());
    // fetch services
    const servicesData = await fetch(`${host}/${servicesUrl}`).then((res) =>
      res.json()
    );
    // end
    this.categories = data.records;
    this.services = servicesData.records;
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
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    showMenu() {
      this.showDropdown = !this.showDropdown;
      console.log(this.showDropdown, "Show dropdown")
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    navigateMenu(url) {
      if (url == undefined) {
        this.$router.push(`/`);
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
      } else {
        this.$router.push(`/services/${url}`);
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
      }
    },
    navigateMain(url) {
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
import Login from "~/components/login.vue";
<style scoped>
.menu-li {
  @apply py-2;
  md: py-0;
}
</style>
