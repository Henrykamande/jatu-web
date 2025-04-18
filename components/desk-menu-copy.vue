<template>
  <div>
    <div class="flex text-white px-6 py-2 justify-between font-bold" style="background: #d8713d">
      <div style="color: #fff; font-family: Caveat">"Together, We Feed Africa"</div>
      <div style="color: #fff">info@shambaniconnect.com</div>
    </div>
    <!-- top header -->
    <div
      class="items-center bg-white justify-center grid md:grid-cols-7 p-4 border-b border-purple-500"
    >
      <!-- logo div -->
      <div class="col-span-3 flex items-center">
        <div>
          <nuxt-link to="/">
            <img
              src="~assets/images/shambani-logo.png"
              alt
              class="h-16 md:h-20 md:ml-1 mt-1 object-contain"
              style="width: 200px; height: 200px; transform: scale(1.7)"
            />
          </nuxt-link>
        </div>
        <div class="flex justify-center text-xl font-bold"></div>
      </div>
      <!-- end -->

      <!-- div 2 -->
      <div class="col-span-2 md:justify-around relative mx-3"></div>
      <!-- end -->

      <!-- div 4 -->
      <div class="col-span-2 flex pr-8 font-bold text-xl">
        <!-- favourites icon -->
        Call: +254 748 193 219
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
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/about"
            >About Us</nuxt-link>
          </li>

          <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/services"
            >Agri Support</nuxt-link>
          </li>

          <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/projects"
            >Partnership Projects</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/location"
            >Our Location</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/blog"
            >Blog</nuxt-link>
          </li>
          <li class="menu-li group inline-block relative">
            <nuxt-link
              class="font-medium text-lg text-white p-2 hover:text-orange-500"
              to="/contact-us"
            >Contact Us</nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="pr-56">
        <li class="menu-li group inline-block relative">
          <nuxt-link class="font-medium text-lg text-white p-2" to="/">E-Commerce</nuxt-link>
          <!-- <ul
              v-if="categories && categories.length > 0"
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
                v-for="category in categories"
                :key="category._id"
              >
                <nuxt-link
                  :to="`/category/${category.url}`"
                  class="p-2 text-xs font-normal"
                  >{{ category.name }}</nuxt-link
                >
              </li>
          </ul>-->
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
    ...mapGetters("product", ["cart"])
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
      services: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true,
      disabled: true
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
  @apply py-2 md:py-0;
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