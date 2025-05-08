<template>
  <div class="container mx-auto md:px-96 px-2 lg:min-h-screen">
    <h2 class="text-center text-wrap font-bold text-3xl text-green-600">Welcome to Jubilant Afro Farms</h2>
    <div class="bg-white mt-6 px-3 pb-3">
      <div class="bg-gray-200 p-2">Login</div>
      <!-- row 1 -->
      <div class="grid gap-4">
        <div>
          <label class="block mb-2 font-bold">Email Address</label>
          <input
            v-model="dataItem.email"
            type="text"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Password</label>
          <input
            v-model="dataItem.password"
            type="password"
            class="border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full"
          />
        </div>
      </div>
      <!-- end -->

      <!-- row 6 -->
      <div>
        <button
          @click="login"
          class="bg-orange-600 text-white py-1 px-2 mt-3 rounded font-bold"
        >Login</button>
        <div class="flex py-2">
          <span>Don't have an account?</span>
          <nuxt-link to="/register" class="text-blue ml-2">
            <button class="text-green-700">Register</button>
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
      dataItem: {}
    };
  },
  methods: {
    async login() {
      const details = this.dataItem;
      if (
        this.dataItem.email == undefined ||
        this.dataItem.password == undefined
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
          const url = `/api/users/login`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await http.post(url, details).then(res => {
            console.log(res, "reg res");
            if (res.data.state) {
              const data = res.data;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              // check cart and redirect
              // redirect user
              ;
              if (this.cart.length > 0) {
                setTimeout(() => {
                  this.$router.push("/");
                }, 200);
                return true;
              } else {
                setTimeout(() => {
                  this.$router.push("/");
                }, 200);
                return true;
              }
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
    },
  }
};
</script>

<style lang="scss" scoped>
</style>