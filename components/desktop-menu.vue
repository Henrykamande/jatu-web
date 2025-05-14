<template>
  <div>
    <div class="flex text-white px-6 py-2 justify-between font-bold" style="background: #d8713d">
      <div style="color: #fff; font-family: Caveat">"Together, We Feed Africa"</div>
      <div style="color: #fff">info@jubilantafrofarms.com</div>
    </div>
    <!-- top header -->
    <div class="items-center bg-white justify-center gap-3 grid md:grid-cols-8 p-4 border-b border-purple-500">
      <!-- logo div -->
      <div class="col-span-3 flex items-center">
        <div>
          <nuxt-link to="/">
            <img src="~assets/images/jubilant-afrofarms-logo.png" alt class="h-full md:h-16 md:ml-1 py-1 object-contain"
              style="width: 200px; height: 200px; transform: scale(1.7)" />
          </nuxt-link>
        </div>
        <div class="flex justify-center text-xl font-bold"></div>
      </div>
      <!-- end -->

      <!-- div 2 -->
      <div class="col-span-2 md:justify-around relative mx-3"></div>
      <!-- end -->

      <!-- div 4 -->
      <div class="col-span-2 place-content-end flex font-bold text-xl">
        <!-- favourites icon -->
        Call: +254 748 193 219
      </div>

      <div class="col-span-1 text-gray-600 flex justify-center">
        <div v-if="isAuthenticated">
          <div class="col-span-1 flex place-content-center relative">
            <div>
              <button @click="showMenu" class="flex flex-col items-center border border-gray-200 p-1 rounded ">
                <font-awesome-icon :icon="['fas', 'user-circle']" class="text-gray-600 md:text-2xl" />
                <span class="font-semibold text-xs">{{ userName }}</span>
              </button>
            </div>
            <div v-if="showDropdown" class="absolute right-0 mt-14 w-auto bg-gray-100 border rounded-md shadow">
              <ul>
                <li>
                  <nuxt-link to="/my-details/account" class="block px-2 py-2 hover:bg-gray-100">Account</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/my-details/equipments" class="block px-2 py-2 hover:bg-gray-100">Equipments</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/my-details/farms" class="block px-2 py-2 hover:bg-gray-100">Farms</nuxt-link>
                </li>
                <li>
                  <button @click="logout" class="flex px-2 py-2 text-red-600 hover:bg-gray-100 w-full text-left">
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- v-else -->
        <div class="text-white w-16 bg-orange-400 px-2 py-1 rounded font-bold" v-else>
          <nuxt-link to="/global-auth/login">
            Login
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end  of top bar-->

    <!-- navbar -->
    <!-- #2f93a3 -->
    <div style="background: #10914e" class="md:flex items-center p-3 justify-between">
      <nav class="ml-4">
        <ul class="md:flex flex-wrap">
          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/">Home</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/about">About Us</nuxt-link>
          </li>

          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/services">Agri
              Support</nuxt-link>
          </li>

          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/projects">Partnership
              Projects</nuxt-link>
            <!-- <div
              class="absolute left-0 right-0 top-fdivl bg-gray-50 text-gray-800 rounded-md shadow-md hidden group-hover:block">
              <nuxt-link to="/agriculture" class="block px-4 py-2 hover:bg-gray-100">Agriculture</nuxt-link>
              <nuxt-link to="/mining" class="block px-4 py-2 hover:bg-gray-100">Mining</nuxt-link>
              <nuxt-link to="/real-estate" class="block px-4 py-2 hover:bg-gray-100">Real Estate</nuxt-link>
            </div> -->
          </li>
          <!-- On click the the link directs the user to the list of farms -->
          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="#">Services</nuxt-link>
            <div
              class="absolute left-0 top-fdivl bg-gray-50 text-gray-800 rounded-md shadow-md hidden group-hover:block">
              <nuxt-link to="/farmlands" class="block px-4 py-2 hover:bg-gray-100">Farmlands</nuxt-link>
              <nuxt-link to="/equipment" class="block px-4 py-2 hover:bg-gray-100">Equipment</nuxt-link>
              <!-- <nuxt-link to="/management" class="block px-4 py-2 hover:bg-gray-100">Management</nuxt-link>
              <nuxt-link to="/financing" class="block px-4 py-2 hover:bg-gray-100">Financing</nuxt-link>
              <nuxt-link to="/marketing" class="block px-4 py-2 hover:bg-gray-100">Marketing</nuxt-link> -->
            </div>
          </li>

          <!-- <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/farmlands"
            >Farmlands</nuxt-link>
          </li>-->

          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/location">Our
              Location</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/blog">Blog</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link class="font-medium text-lg text-white p-2 hover:text-orange-500" to="/contact-us">Contact
              Us</nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="pr-56">
        <li class="menu-li group inline-block relative">
          <nuxt-link class="font-medium text-lg text-white p-2" to="/">E-Commerce</nuxt-link>
        </li>
      </div>
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
    isAuthenticated() {
      return process.client ? !!localStorage.getItem("token") : false;
    },
    userName() {
      if (process.client) {
        const user = JSON.parse(localStorage.getItem("user"));
        return `${user.first_name || "Guest"} ${user.last_name || ""}`.trim()

      }
    }
  },
  data() {
    return {
      categories: [],
      services: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true,
      disabled: true,
      showDropdown: false,
    };
  },
  async fetch() {
    const url = `api/categories`;
    const servicesUrl = `api/services`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then(res => res.json());
    // fetch services
    const servicesData = await fetch(`${host}/${servicesUrl}`).then(res =>
      res.json()
    );
    // end
    this.categories = data.records;
    this.services = servicesData.records;
  },
  watch: {
    $route() {
      this.searchResults = [];
    }
  },
  methods: {
    userMenu() {
      const menuBtn = document.querySelector("#menu-btn");
      const dropdown = document.querySelector("#dropdown");

      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("block");
    },
    showMenu() {
      this.showDropdown = true;
    },
    hideMenu() {
      this.showDropdown = false;
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
    }
  }
};
</script>

<style scoped>
.menu-li {
  @apply py-2;
  md: py-0;
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