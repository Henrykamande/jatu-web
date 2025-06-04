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
          "
          role="alert"
        >
          <div class="text-sm">
            You have {{ cart.length }} item(s) in your Cart. You can checkout
            <nuxt-link to="/cart" class="ml-6 text-red-500"
              >Preview Cart</nuxt-link
            >
          </div>
        </div>
      </div>

      <!-- row 6 -->
      <div class="text-right mt-2 md:flex mb-3">
        <nuxt-link
          to="/checkout"
          class="bg-red-600 text-white py-1 px-2 rounded font-bold"
        >
          Instant Checkout
        </nuxt-link>

        <nuxt-link
          to="/login"
          class="ml-6 bg-blue-900 text-white py-1 px-2 rounded font-bold"
        >
          Login / Register
        </nuxt-link>
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
    };
  },
  methods: {
    async order() {
      const size = this.cart.length;
      const name = this.user.first_name;
      const phone = this.user.phone;
      const location = this.user.location;
      const email = this.user.email;
      const details = this.user.details;
      const total = this.total;
      const cart = [...this.cart];
      const userId = this.user.id;
      const order = {
        name,
        phone,
        location,
        email,
        details,
        size,
        total,
        userId,
      };

      order.products = cart.map((record) => {
        return record;
      });

      const data = { order: JSON.stringify(order) };

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