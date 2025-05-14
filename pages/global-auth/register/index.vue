<template>
  <div class="container mx-auto md:px-48 px-4 lg:min-h-screen">
    <h2 class="text-center font-bold mt-6 text-3xl text-green-600">Welcome to Jubilant Afro Farms</h2>

    <div class="bg-white p-6 border border-green-300 rounded-lg shadow-lg">
      <h3 class="py-4 font-bold text-2xl text-green-600">Create An Account</h3>

      <!-- Row 1: Name Inputs -->
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-2 font-semibold text-green-600">First Name *</label>
          <input v-model="dataItem.first_name" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-green-600">Last Name *</label>
          <input v-model="dataItem.last_name" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>
      </div>

      <!-- Row 2: Email & Phone -->
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="block mb-2 font-semibold text-green-600">Email *</label>
          <input v-model="dataItem.email" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-green-600">Phone Number *</label>
          <input v-model="dataItem.phone" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>
      </div>

      <!-- Row 3: Location & House No -->
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="block mb-2 font-semibold text-green-600">Location *</label>
          <input v-model="dataItem.location" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-green-600">House No</label>
          <input v-model="dataItem.house" type="text"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>
      </div>

      <!-- Row 4: Password Fields -->
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="block mb-2 font-semibold text-green-600">Password *</label>
          <input v-model="dataItem.password" type="password"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <div>
          <label class="block mb-2 font-semibold text-green-600">Confirm Password *</label>
          <input v-model="dataItem.confirm_password" type="password"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>
      </div>

      <!-- Register Button -->
      <div class="flex flex-col items-center mt-6">
        <button :loading="loader" @click="register"
          class="bg-orange-600 text-white py-2 px-6 rounded-md font-bold shadow-md hover:bg-orange-700 transition">
          Register
        </button>
        <img v-show="loader" src="~assets/images/loader.gif" alt class="mt-4" style="width: 30px; height: 30px" />
        <div class="flex py-3">
          <span class="text-orange-500">Already have an account?</span>
          <nuxt-link to="/global-auth/login">
            <button class="text-blue-700 underline ml-2">Login</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { mapGetters } from "vuex";
import { http } from "~/common/index.js";
const { toast } = require("tailwind-toast");
export default {
  computed: {
    ...mapGetters("product", ["cart"]),
    dynamicUrl() {
      return this.$route.params.url
    }
  },
  data() {
    return {
      dataItem: {},
      loader: false,
      successMsg: false,
      emailError: false,
      formError: false
    };
  },

  methods: {
    async register() {
      const details = this.dataItem;
      // const pageUrl = this.$route.params.url;

      if (!details.first_name || !details.last_name || !details.email || !details.phone) {
        toast()
          .danger("⚠️ Attention!", "All required fields must be completed.")
          .with({
            shape: "rounded",
            duration: 4000,
            speed: 700,
            positionX: "center",
            positionY: "top",
            color: "bg-red-700",
            fontColor: "white",
            fontTone: 100,
            shadow: true,
            opacity: 90,
            icon: "warning",
          })
          .show();
        return;
      }

      try {
        const url = `/api/users`;
        this.loader = true;

        const response = await http.post(url, details);

        if (!response.data.state) {
          // Show error toast based on the API response message
          toast()
            .danger("⚠️ Attention!", response.data.msg)
            .with({
              shape: "rounded",
              duration: 4000,
              speed: 700,
              positionX: "center",
              positionY: "top",
              color: "bg-red-700",
              fontColor: "white",
              fontTone: 100,
              shadow: true,
              opacity: 90,
              icon: "warning",
            })
            .show();
          this.loader = false;
          return;
        }

        // Registration successful
        const data = response.data;
        this.successMsg = true;
        this.loader = false;
        this.dataItem = {};
        this.$store.commit("setUser", data.user);
        this.$store.commit("setToken", data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast()
          .success("🎉 Welcome!", "You have successfully registered.")
          .with({
            shape: "rounded",
            duration: 4000,
            speed: 800,
            positionX: "center",
            positionY: "top",
            color: "bg-green-600",
            fontColor: "white",
            fontTone: 100,
            shadow: true,
            opacity: 85,
            icon: "check-circle",
          })
          .show();

        // Redirect user
        this.$router.push("/");
      } catch (err) {

        toast()
          .danger("Server Error", "An unexpected error occurred. Please try again.")
          .with({
            shape: "square",
            duration: 3000,
            speed: 1000,
            positionX: "end",
            positionY: "top",
            color: "bg-red-500",
            fontColor: "white",
            fontTone: 200,
          })
          .show();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>