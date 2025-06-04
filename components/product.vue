<template>
  <div v-if="product">
    <nuxt-link :to="`/product/${product.url}`">
      <!-- <img
        :src="`${imageUrl}/uploads/products/${product.cover_image}`"
        alt
        class="w-full object-fill product_image"
      /> -->
      <img
        :src="`${imageUrl}/uploads/products/${product.cover_image}`"
        alt
        class="w-full object-fill product_image"
      />
      <div>
        <span class="font-lg">{{ product.name }}</span>
        <br />
        <span class="text-bold"
          >Ksh. {{ product.currentPrice.toLocaleString() }} </span
        ><br />
        <span class="text-sm text-orange-600 line-through"
          >Ksh. {{ product.previousPrice.toLocaleString() }}
        </span>
      </div>

      <!-- volume -->
      <div class="text-sm">
        <div v-for="(price, index) in product.prices" :key="index">
          {{ price.name }} @ {{ price.price }}
        </div>
      </div>
      <!-- end of volume -->
    </nuxt-link>

    <div
      v-if="product.outOfStock == true"
      class="text-red-800 font-bold py-2 flex justify-center"
    >
      Sold Out
    </div>

    <div v-else class="flex justify-between px-4 object-none object-bottom">
      <svg
        @click="openModal"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 font-bold cursor-pointer object-none object-bottom"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="{2}"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <font-awesome-icon
        @click="openWhatsappModal"
        class="h-6 w-6 cursor-pointer"
        style="color: green"
        :icon="['fab', 'whatsapp']"
      />
      <font-awesome-icon
        v-if="!inFavorite(product)"
        @click="changeFavStatus(product)"
        class="h-6 w-6 cursor-pointer"
        style="color: #e11d48"
        :icon="['far', 'heart']"
      />

      <font-awesome-icon
        v-else
        @click="changeFavStatus(product)"
        class="h-6 w-6 cursor-pointer"
        style="color: #e11d48"
        :icon="['fas', 'heart']"
      />

      <!-- <fa class="h-6 w-6" style="color: green" :icon="['fab','close']" /> -->
    </div>

    <!-- modal -->
    <modal
      :isVisible="isVisible"
      @cancel="closeDialog"
      :singleProduct="product"
    ></modal>
    <!-- end of modal -->

    <!-- modal -->
    <whatsapp-modal
      :isVisible="isWtVisible"
      @cancel="closeWtDialog"
      :singleProduct="product"
    ></whatsapp-modal>
    <!-- end of modal -->
  </div>
</template>

<script>
import Modal from "@/components/modal.vue";
import WhatsappModal from "@/components/whatsapp-modal.vue";
import { mapGetters } from "vuex";
const { toast } = require("tailwind-toast");
export default {
  components: {
    Modal,
    WhatsappModal,
  },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["imageUrl", "favorites"]),
    ...mapGetters("product", ["cart", "wishlist"]),
  },
  data() {
    return {
      isVisible: false,
      isWtVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    openWhatsappModal() {
      this.isWtVisible = true;
    },
    closeDialog() {
      this.isVisible = false;
    },
    closeWtDialog() {
      this.isWtVisible = false;
    },
    changeFavStatus(product) {
      if (this.inFavorite(product)) {
        this.$store.commit("removeFavoriteItem", product);
        // toast()
        //   .success("Success!", "Removed from favorites.")
        //   .with({
        //     shape: "square",
        //     duration: 3000,
        //     speed: 1000,
        //     positionX: "end",
        //     positionY: "bottom",
        //     color: "bg-red-500",
        //     fontColor: "black",
        //     fontTone: 200,
        //   })
        //   .show();
      } else {
        this.$store.commit("addFavoriteItem", product);
        // toast()
        //   .success("Success!", "Added to favorites")
        //   .with({
        //     shape: "square",
        //     duration: 3000,
        //     speed: 1000,
        //     positionX: "end",
        //     positionY: "bottom",
        //     color: "bg-green-500",
        //     fontColor: "black",
        //     fontTone: 200,
        //   })
        //   .show();
      }
    },
    inFavorite(item) {
      return this.favorites.indexOf(item) !== -1 ? true : false;
    },
  },
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .product_image {
    height: 141px;
    max-height: 159px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .product_image {
    height: 141px;
    max-height: 159px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .product_image {
    height: 208px;
    max-height: 235px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .product_image {
    height: 208px;
    max-height: 235px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .product_image {
    height: 208px;
    max-height: 265px;
  }
}
</style>