<template>
  <div class="container mx-auto md:px-48 px-2 lg:min-h-screen">
    <h2 class="text-center font-bold text-wrap text-3xl text-green-600">Welcome to Jubilant Afro Farms</h2>
    <div class="bg-white p-3">
      <div class="text-geen-200 py-2 font-bold text-2xl text-green-600">Create An Account</div>
      <!-- row 1 -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold text-green-600">First Name *</label>
          <input
            v-model="dataItem.first_name"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold text-green-600">Last Name *</label>
          <input
            v-model="dataItem.last_name"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row two -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold text-green-600">Email *</label>
          <input
            v-model="dataItem.email"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold text-green-600">Phone Number *</label>
          <input
            v-model="dataItem.phone"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row three -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold text-green-600">Location *</label>
          <input
            v-model="dataItem.location"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold text-green-600">House No</label>
          <input
            v-model="dataItem.house"
            type="text"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row four -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold text-green-600">Password *</label>
          <input
            v-model="dataItem.password"
            type="password"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold text-green-600">Confirm Password *</label>
          <input
            v-model="dataItem.confirm_password"
            type="password"
            class="border border-green-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full text-green-600"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row 6 -->
      <div>
        <button
          :loading="loader"
          @click="register"
          class="bg-orange-600 text-white py-1 px-2 mt-3 rounded font-bold"
        >Register</button>
        <img
          v-show="loader"
          src="~assets/images/loader.gif"
          alt
          class="mt-4 ml-4"
          style="width: 30px; height: 30px"
        />
        <div class="flex py-2">
          <span class="text-orange-500">Already have an account?</span>
          <nuxt-link :to="`/auth/${dynamicUrl}`" class="text-blue ml-2">
            <button class="text-blue-700 underline">Login</button>
          </nuxt-link>
        </div>
      </div>
      <!-- end -->
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
    const pageUrl = this.$route.params.url;

    if (!details.first_name || !details.last_name || !details.email || !details.phone) {
      toast()
        .danger("Oops!", "Please fill all the required fields!")
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
      return;
    }

    try {
      const url = `/api/users`;
      this.loader = true;

      const response = await http.post(url, details);

      if (!response.data.state) {
        // Show error toast based on the API response message
        toast()
          .danger("Error", response.data.msg)
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
        .success("Welcome!", "You have successfully registered.")
        .with({
          shape: "square",
          duration: 3000,
          speed: 1000,
          positionX: "end",
          positionY: "top",
          color: "bg-green-500",
          fontColor: "white",
          fontTone: 200,
        })
        .show();

      // Redirect user
      this.$router.push(`/equipment/${pageUrl}`);
    } catch (err) {
      console.error("Error occurred", err);
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

<style lang="scss" scoped>
</style>