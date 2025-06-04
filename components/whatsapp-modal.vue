<template>
  <transition name="modal">
    <div v-if="isVisible" class="m-2 w-2/3">
      <div class="fixed inset-0 z-50 flex justify-center items-center">
        <div class="flex flex-col max-w-6xl rounded-lg shadow-lg bg-white">
          <!-- header -->
          <div class="p-3 border-b border-gray-500">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-bold text-xl text-green-800">
                  Order Via Whatsapp
                </h3>
              </div>

              <button
                class="text-2xl font-semibold h-6 w-6"
                @click="closeModal"
              >
                <div class="text-xl font-semibold h-6 w-6">
                  <span class="text-red-500">X</span>
                </div>
              </button>
            </div>
          </div>
          <!-- body -->
          <div class="p-6">
            <div class="font-bold">{{ singleProduct.name }}</div>
            <div class="grid md:grid-cols-12">
              <div class="col-span-4 mr-2">
                <img
                  :src="`${imageUrl}/uploads/products/${singleProduct.cover_image}`"
                  alt
                  class="w-full object-cover h-40"
                />
              </div>
              <div class="col-span-8">
                <!-- qty input -->
                <div class="mt-3">
                  <input
                    v-model="qty"
                    min="1"
                    placeholder="Qty"
                    type="number"
                    class="
                      border-2 border-gray-500
                      py-1
                      w-full
                      px-3
                      md:justify-around
                      rounded
                      outline-none
                      focus:border-gray-400
                    "
                  />
                </div>

                <!-- price select box -->
                <div class="mb-3">
                  <div class="font-bold text-red">
                    {{ singleProduct.currentPrice.toLocaleString() }}
                  </div>

                  <div class="float-right font-bold italic">
                    Total: Kshs. {{ totalAmount.toLocaleString() }}
                  </div>
                </div>
                <!-- end -->
              </div>
            </div>

            <!-- location -->
            <div>
              <input
                v-model="location"
                placeholder="Delivery Location"
                class="
                  w-full
                  mt-2
                  border-2 border-gray-500
                  py-1
                  px-3
                  md:justify-around
                  rounded
                  outline-none
                  focus:border-gray-400
                "
              />
            </div>
            <!-- end -->

            <!-- order button -->
            <div class="float-right">
              <button
                @click="placeOrder()"
                type="button"
                class="
                  mt-2
                  py-1
                  px-3
                  bg-green-600
                  hover:bg-orange-500
                  rounded
                  font-bold
                  text-white
                  focus:outline-none
                "
              >
                Place Order
              </button>
            </div>
            <!-- end of order button -->
          </div>
          <!-- end of body -->
        </div>
      </div>
      <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
const { toast } = require("tailwind-toast");
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    singleProduct: {
      type: Object,
      default: {},
    },
  },
  computed: {
    ...mapGetters(["imageUrl"]),
    ...mapGetters("product", ["cart"]),
    totalAmount() {
      const qty = this.qty;
      const price = this.singleProduct.currentPrice;
      const total = qty * price;
      return total;
    },
  },
  data() {
    return {
      price: {},
      qty: 1,
    };
  },
  methods: {
    closeModal() {
      this.$emit("cancel");
    },
    inCart(productId) {
      const added =
        this.cart.find((item) => {
          return item._id === productId;
        }) || null;
      if (added) {
        return true;
      }
      return false;
    },
    placeOrder() {
      if (this.location == null) {
        toast()
          .danger("Oops!", "Please fill in delivery location!")
          .with({
            shape: "square",
            duration: 4000,
            speed: 1000,
            positionX: "end",
            positionY: "bottom",
            color: "bg-red-600",
            fontColor: "white",
            fontTone: 200,
          })
          .show();
      } else {
        const orderText = `I want to order ${this.qty} - ${
          this.singleProduct.name
        } @ ${this.singleProduct.currentPrice.toLocaleString()}. Total: ${
          this.totalAmount
        }. Delivery Location: ${this.location} `;
        const url = `https://wa.me/+254748193219?text=${orderText}`;
        let win = window.open(url, "_blank");
        win.focus();
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.modal-leave-active,
.modal-enter-active {
  transition: opacity 0.5s ease-in;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
