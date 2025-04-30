<template>
  <div class="container mx-auto md:px-48 px-2 lg:min-h-screen">
    <h2 class="text-center font-bold text-3xl text-green-600 ">Welcome to Jubilantafrofarms</h2>
    <div class="bg-white mt-6 p-3">
      <div class="bg-gray-200 p-2">Create An Account</div>
      <!-- row 1 -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">First Name *</label>
          <input
            v-model="dataItem.first_name"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Last Name *</label>
          <input
            v-model="dataItem.last_name"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row two -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">Email *</label>
          <input
            v-model="dataItem.email"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Phone Number *</label>
          <input
            v-model="dataItem.phone"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row three -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">Location *</label>
          <input
            v-model="dataItem.location"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">House No</label>
          <input
            v-model="dataItem.house"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row four -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">Password *</label>
          <input
            v-model="dataItem.password"
            type="password"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Confirm Password *</label>
          <input
            v-model="dataItem.confirm_password"
            type="password"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
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
          <span>Already have an account?</span>
          <nuxt-link to="/login" class="text-blue ml-2">
            <button class="text-green-700">Login</button>
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
    ...mapGetters("product", ["cart"])
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
            console.log(res, "reg res");
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
              
                this.$router.push("/");
              
              //   if (this.cart.length > 0) {
              //     setTimeout(() => {
              //       this.$router.push("/");
              //     }, 200);
              //     return true;
              //   } else {
              //     setTimeout(() => {
              //       this.$router.push("/");
              //     }, 200);
              //     return true;
              //   }
              //   // end of redirection
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