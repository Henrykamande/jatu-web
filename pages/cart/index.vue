<template>
  <div class="container mx-auto md:px-36 px-2 min-h-screen items-center">
    <!-- check if the cart is empty -->
    <div v-if="cart.length <= 0">
      <div
        class="
          bg-red-100
          mt-6
          border-t border-b border-blue-500
          text-blue-700
          px-4
          py-3
        "
        role="alert"
      >
        <p class="font-bold">Empty Cart!</p>
        <p class="text-sm">Your cart is empty, welcome to shop with us.</p>
      </div>

      <nuxt-link to="/">
        <button class="bg-black px-2 py-1 text-white rounded mt-2">
          Shop Now
        </button>
      </nuxt-link>
    </div>

    <!-- if not -->
    <div v-else class="bg-white mt-6 p-3">
      <!-- item div -->
      <div
        class="
          grid
          md:grid-cols-2
          items-center
          md:text-lg
          border-b border-gray-200
        "
        v-for="product in cart"
        :key="product._id"
      >
        <!-- section one -->
        <div class="grid grid-cols-12 md:items-center">
          <div class="col-span-4">
            <img
              :src="`https://backend.jubilantafrofarms.com/uploads/products/${product.cover_image}`"
              alt
              class="object-contain h-24"
            />
          </div>
          <div class="col-span-8">{{ product.name }}</div>
        </div>
        <!-- section two -->
        <div class="grid md:grid-cols-12">
          <div class="md:col-span-8">
            <span class="input-number-decrement" @click="decrement(product._id)"
              >–</span
            >
            <input
              class="input-number"
              @input="updateQuantity($event, product._id)"
              type="text"
              :value="product.quantity"
              min="0"
              max="10000"
            />
            <span class="input-number-increment" @click="increment(product._id)"
              >+</span
            >
            <span>&nbsp; X {{ product.unit_price }} =</span>
            <span class="total">{{
              (product.quantity * product.unit_price).toLocaleString()
            }}</span>
          </div>
          <div class="md:col-span-4 text-right md:text-left">
            <button @click="romoveCart(product._id)">
              <font-awesome-icon
                class="h-6 w-6"
                style="color: red"
                :icon="['fas', 'times']"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="mt-2 bg-gray-500 text-white">
        <div
          class="text-right py-2 pr-8 text-lg font-bold border-b-2 border-white"
        >
          Total: {{ total.toLocaleString() }}
        </div>
      </div>
      <div class="text-right">
        <nuxt-link to="/shop">
          <button class="bg-black px-2 py-1 text-white rounded">
            Continue Shopping
          </button>
        </nuxt-link>
        <nuxt-link to="/checkout" v-if="isAuthenticated">
          <button class="bg-orange-600 px-2 py-1 text-white rounded">
            Checkout Order
          </button>
        </nuxt-link>

        <nuxt-link v-else to="/order">
          <button class="bg-orange-600 px-2 py-1 text-white rounded">
            Checkout Order
          </button>
        </nuxt-link>
      </div>
      <!-- item div -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["imageUrl", "isAuthenticated"]),
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
  methods: {
    decrement(id) {
      const item = this.cart.find((record) => {
        return record._id === id;
      });
      const qty = item.quantity > 1 ? item.quantity - 1 : 1;
      this.setQuantity(id, qty);
    },
    increment(id) {
      const item = this.cart.find((record) => {
        return record._id === id;
      });
      const qty = item.quantity + 1;
      this.setQuantity(id, qty);
    },
    setQuantity(id, quantity) {
      const data = { id, quantity };
      this.$store.commit("product/cartQuantity", data);
    },
    updateQuantity(evt, id) {
      const quantity = evt.target.value;
      this.setQuantity(id, quantity);
    },
    romoveCart(id) {
      this.$store.commit("product/removeFromCart", id);
    },
  },
};
</script>

<style scoped>
.cart_image {
  height: 98px;
}

.total {
  font-weight: 600;
}
/*  increment button */
.input-number {
  width: 55px;
  padding: 0 8px;
  vertical-align: top;
  text-align: center;
  outline: none;
}

.input-number,
.input-number-decrement,
.input-number-increment {
  border: 1px solid #ccc;
  height: 40px;
  user-select: none;
}

.input-number-decrement,
.input-number-increment {
  display: inline-block;
  width: 30px;
  line-height: 38px;
  background: #f1f1f1;
  color: #444;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.input-number-decrement:active,
.input-number-increment:active {
  background: #ddd;
}

.input-number-decrement {
  border-right: none;
  border-radius: 4px 0 0 4px;
}

.input-number-increment {
  border-left: none;
  border-radius: 0 4px 4px 0;
}

.remove {
  display: inline-block;
  padding: 6px;
  padding-right: 12px;
  padding-left: 12px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  background-color: red;
  transition: all 0.5s;
}
.remove:hover {
  background-color: red;
  box-shadow: 3px 3px 3px #e0e0e0;
}
</style>