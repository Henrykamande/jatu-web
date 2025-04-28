<template>
  <div class="container mx-auto md:px-48 px-2 lg:min-h-screen">
    <h2 class="text-center font-bold  text-3xl text-green-600 mt-5">Welcome to Afro Farms</h2>
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
      
      if (
        this.dataItem.first_name == undefined ||
        this.dataItem.last_name == undefined ||
        this.dataItem.email == undefined ||
        this.dataItem.phone == undefined
      ) {
        toast()
          .danger("Oops!", "Please fill all the required fields!")
          .with({
            shape: "square",
            duration: 3000,
            speed: 1000,
            positionX: "end",
            positionY: "top",
            color: "bg-red-600",
            fontColor: "white",
            fontTone: 200
          })
          .show();
      } else {
        try {
          const url = `/api/users`;
          const details = this.dataItem;
          const self = this;

          this.loader = true;
          await http.post(url, details).then(res => {
            // console.log(res, "reg res");
            if (res.data.state) {
              const data = res.data;
              self.successMsg = true;
              self.loader = false;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              // redirect user
              // console.log(pageUrl, "page url");
              this.$router.push(`/equipment/${pageUrl}`);
              // end
            } else {
              self.emailError = true;
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>