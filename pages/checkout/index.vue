<template>
  <div class="container mx-auto md:px-48 px-2 lg:min-h-screen">
    <div class="bg-white mt-6 p-3">
      <div v-if="cart.length > 0">
        <div
          class="
            bg-blue-100
            mt-6
            border-t border-b border-blue-500
            text-blue-700
            px-4
            py-3
            md:flex
            justify-between
          "
          role="alert"
        >
          <div class="text-sm">
            You have {{ cart.length }} item(s) in your Cart. You can checkout
            <nuxt-link to="/cart" class="ml-6 text-red-500"
              >Preview Cart</nuxt-link
            >
          </div>

          <div>
            <nuxt-link
              to="/login"
              class="
                md:ml-6 md:mt-0
                mt-2
                bg-blue-900
                text-white
                py-1
                px-2
                rounded
                font-bold
              "
            >
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- row 1 -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">First Name *</label>
          <input
            v-model="loggedUser.first_name"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Last Name *</label>
          <input
            v-model="loggedUser.last_name"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>
      </div>
      <!-- end -->

      <!-- row two -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">Email</label>
          <input
            v-model="loggedUser.email"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">Phone Number *</label>
          <input
            v-model="loggedUser.phone"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>
      </div>
      <!-- end -->

      <!-- row three -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-2 font-bold">Location *</label>
          <input
            v-model="loggedUser.location"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>

        <div>
          <label class="block mb-2 font-bold">House No</label>
          <input
            v-model="loggedUser.house"
            type="text"
            class="
              border-2 border-gray-400
              py-1
              px-3
              rounded
              outline-none
              focus:border-purple-500
              w-full
            "
          />
        </div>
      </div>
      <!-- end -->

      <!-- row 4 -->
      <div class="grid grid-cols-2 gap-4 mt-3">
        <div class="col-span-2">
          <label class="block mb-2 font-bold">Instructions</label>
          <textarea
            v-model="loggedUser.details"
            class="
              border-2 border-gray-400
              focus:border-blue-400
              rounded
              p-2
              m-1
              w-full
            "
            name="details"
          ></textarea>
        </div>
      </div>
      <!-- end -->

      <!-- row 5-->
      <div class="block">
        <span class="text-gray-700">Mode of Payment</span>
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                v-model="paymentMode"
                type="radio"
                class="form-radio"
                name="paymentMode"
                value="Mpesa on Delivery"
              />
              <span class="ml-2">MPESA on Delivery</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                v-model="paymentMode"
                type="radio"
                class="form-radio"
                name="paymentMode"
                value="3"
              />
              <span class="ml-2">Swipe Card on Delivery</span>
            </label>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- row 6 -->
      <div class="text-right">
        <button
          @click="order"
          class="bg-red-600 text-white py-1 px-2 rounded font-bold"
        >
          Place Your Order
        </button>
      </div>
      <!-- end -->

      <!-- error message -->
      <div v-show="formError" role="alert" class="mt-2">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Please fill all the required fields
        </div>
        <div
          class="
            border border-t-0 border-red-400
            rounded-b
            bg-red-100
            px-4
            py-3
            text-red-700
          "
        >
          <p>First Name, Last Name, Phone and Location are mandatory</p>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "~/common/index.js";
export default {
  computed: {
    ...mapGetters(["imageUrl", "user"]),
    ...mapGetters("product", ["cart"]),
    total() {
      const prices = this.cart.map((item) => {
        return item.unit_price * item.quantity;
      });
      if (prices.length >= 1) {
        return prices.reduce((inc, val) => {
          return inc + val;
        });
      }
      return 0;
    },
  },
  data() {
    return {
      dataItem: {},
      loggedUser: {},
      paymentMode: null,
      formError: false,
    };
  },
  methods: {
    async order() {
      const size = this.cart.length;
      const name = this.loggedUser.first_name;
      const phone = this.loggedUser.phone;
      const location = this.loggedUser.location;
      const email = this.loggedUser.email;
      const details = this.loggedUser.details;
      const paymentMode = this.paymentMode;
      const total = this.total;
      const cart = [...this.cart];
      const userId = this.loggedUser._id;
      const order = {
        name,
        phone,
        location,
        email,
        details,
        size,
        total,
        userId,
        paymentMode,
      };

      order.products = cart.map((record) => {
        return record;
      });

      const data = { order: JSON.stringify(order) };

      if (
        this.loggedUser.first_name == undefined ||
        this.loggedUser.phone == undefined ||
        this.loggedUser.location == undefined
      ) {
        this.formError = true;
      } else {
        try {
          const url = `/api/order`;
          const self = this;
          //this.loader = true;
          await http.post(url, data).then((res) => {
            console.log(res, "res");
            if (res.data.state) {
              this.$store.commit("product/resetCart");
              this.$router.push("/success");
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    },
  },
  created() {
    if (this.user) {
      this.loggedUser = { ...this.loggedUser, ...this.user };
    }
  },
};
</script>

<style lang="scss" scoped>
</style>