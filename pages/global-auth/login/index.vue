<template>
  <div class="px-2 lg:min-h-screen my-6">
    <h2 class="text-center text-wrap font-bold text-3xl text-green-600">Welcome to Jubilant Afro Farms</h2>

    <!-- Width > 640px --- DESKTOP -->
    <div class="bg-white p-6 md:block sm:hidden w-3/5 hidden border border-green-300 mx-auto rounded shadow-lg">
      <!-- Container for the form fields -->
      <div class="flex flex-col gap-6 py-8">
        <!-- Email input -->
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <label class="font-semibold md:w-24 text-green-600">Email:</label>
          <input v-model="dataItem.email" type="email"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <!-- Password input -->
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <label class="font-semibold md:w-24 text-green-600">Password:</label>
          <input v-model="dataItem.password" type="password"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <!-- Action buttons -->
        <div class="flex flex-col w-full justify-center items-center gap-4 mt-6">
          <button @click="login"
            class="bg-orange-500 w-24 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition">
            Login
          </button>
          <p class="font-semibold text-center text-orange-500">OR</p>
          <nuxt-link to="/global-auth/register"
            class="text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition">
            Create an Account
          </nuxt-link>
        </div>
      </div>
    </div>


    <!-- MOBILE LOGIN MENU -->
    <div class="bg-white mt-6 p-6 md:hidden sm:block block border border-green-300 rounded shadow-md">
      <!-- Form container -->
      <div class="flex flex-col gap-6 py-10">
        <!-- Email input -->
        <div class="flex flex-col gap-3">
          <label class="font-semibold text-green-600">Email:</label>
          <input v-model="dataItem.email" type="email"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <!-- Password input -->
        <div class="flex flex-col gap-3">
          <label class="font-semibold text-green-600">Password:</label>
          <input v-model="dataItem.password" type="password"
            class="border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600" />
        </div>

        <!-- Action buttons -->
        <div class="flex flex-col w-full justify-center items-center gap-4 mt-6">
          <button @click="login"
            class="bg-orange-500 w-24 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition">
            Login
          </button>
          <p class="font-semibold text-center text-orange-500">OR</p>
          <nuxt-link to="/global-auth/register"
            class="text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition">
            Create an Account
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
          .danger("⚠️ Attention!", "Please fill all the required fields")
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
      } else {
        try {
          const url = `/api/users/login`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await http.post(url, details).then(res => {

            if (!res.data.state) {
              // Show error toast based on the API response message
              toast()
                .danger("⚠️ Attention!", res.data.msg)
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

            if (res.data.state) {
              const data = res.data;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));

              toast()
                .success("🎉 Welcome back!", "Jubilant Afro Farms")
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

              // redirect user to the page they were trying to 
              this.$router.push("/");
              // if (this.cart.length > 0) {
              //     setTimeout(() => {
              //         
              //     }, 200);
              //     return true;
              // } else {
              //     setTimeout(() => {
              //         this.$router.push("/");
              //     }, 200);
              //     return true;
              // }

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
  },
};
</script>

<style lang="scss" scoped></style>