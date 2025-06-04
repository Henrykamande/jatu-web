<template>
  <div class="container mx-auto md:px-36 px-2">
    <div class="bg-white mt-3 p-3 font-bold text-2xl text-orange-500">
      <h1>{{ record.name }}</h1>
    </div>

    <!-- sec two -->
    <div class="grid md:grid-cols-3 grid-cols-1 gap-2 my-2 p-3 bg-white">
      <div>
        <img
          :src="`${imageUrl}/uploads/products/${record.cover_image}`"
          alt
          class="w-full h-80 object-fill"
        />
      </div>
      <div>
        <div>In Stock</div>
        <div class="mt-3">
          <input
            v-model="qty"
            min="1"
            placeholder="Qty"
            type="number"
            class="
              md:w-3/4
              w-full
              border-2 border-gray-500
              py-1
              px-3
              m-r-5
              md:justify-around
              rounded
              outline-none
              focus:border-gray-400
            "
          />
        </div>

        <div>
          <div class="font-bold text-red">
            Ksh. {{ record.currentPrice.toLocaleString() }}
          </div>
        </div>

        <div v-if="record.outOfStock == false" class="flex justify-between">
          <button
            @click="addToCart(record)"
            type="button"
            class="
              mt-2
              py-1
              px-3
              mr-3
              bg-orange-600
              hover:bg-orange-500
              rounded
              font-bold
              text-white
              focus:outline-none
            "
          >
            Add To Cart
          </button>

          <font-awesome-icon
            v-if="!inFavorite(record)"
            @click="changeFavStatus(record)"
            class="h-6 w-6 mt-3 cursor-pointer"
            style="color: #e11d48"
            :icon="['far', 'heart']"
          />

          <font-awesome-icon
            v-else
            @click="changeFavStatus(record)"
            class="h-6 w-6 mt-3 cursor-pointer"
            style="color: #e11d48"
            :icon="['fas', 'heart']"
          />

          <!-- <font-awesome-icon
            class="h-6 w-6 md:mr-20 mr-2 mt-3"
            style="color: green"
            :icon="['fab', 'whatsapp']"
          /> -->
        </div>

        <div
          v-if="record.outOfStock == true"
          class="text-red-800 font-bold py-2 flex justify-center"
        >
          Sold Out
        </div>

        <div class="mt-3">Call Us On: +254 752 940 909</div>
      </div>
      <div>
        <!-- <div class="bg-gray-200 p-2 mb-2">
          Alcohol Content: {{ record.alcohol }}%
        </div> -->

        <div class="bg-gray-200 p-2 mb-2">More Details:</div>
      </div>
    </div>

    <!-- sec three -->

    <div class="bg-white p-3">
      <div class="mb-2 font-bold border-b-2 border-gray-100">
        Product Description
      </div>
      <div v-html="record.content"></div>
    </div>

    <div class="bg-white p-3 mt-3 mb-3 grid md:grid-cols-12">
      <div class="col-span-12 font-bold">
        <span>Related Products</span>
      </div>
      <div class="col-span-12">
        <div class="grid md:grid-cols-4 grid-cols-2 gap-2 py-4">
          <div
            class="card p-2"
            v-for="product in relatedProducts"
            :key="product._id"
          >
            <product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
const { toast } = require("tailwind-toast");
import Product from "@/components/product.vue";
export default {
  computed: {
    ...mapGetters(["imageUrl", "favorites"]),
    ...mapGetters("product", ["cart"]),
  },
  components: {
    Product,
  },
  data() {
    return {
      productRecord: {},
      price: {},
      qty: 1,
    };
  },
  head() {
    const meta = this.record || {};
    return {
      title: `${meta.meta_title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: meta.meta_desc,
        },
        { hid: "og:title", name: "og:title", content: `${meta.meta_title}` },
        {
          hid: "og:description",
          name: "og:description",
          content: meta.meta_desc,
        },
        { hid: "og:type", name: "og:type", content: "website" },
      ],
    };
  },
  async asyncData({ params, error }) {
    const productUrl = params.url;
    const url = `/api/products/${productUrl}`;

    try {
      const { data } = await http.get(url);
      const { record, relatedProducts } = data;
      return { record, relatedProducts };
    } catch (err) {
      return { record: {}, relatedProducts: [] };
    }
  },
  methods: {
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
    addToCart(product) {
      if (this.inCart(product._id)) {
        toast()
          .danger("Oops!", "Already exists!")
          .with({
            shape: "square",
            duration: 3000,
            speed: 1000,
            positionX: "end",
            positionY: "bottom",
            color: "bg-red-600",
            fontColor: "white",
            fontTone: 200,
          })
          .show();
      } else {
        let price = product.currentPrice;

        let data = {
          _id: product._id,
          product: product._id,
          name: product.name,
          quantity: this.qty,
          unit_price: price,
          cover_image: product.cover_image,
        };
        this.$store.commit("product/addToCart", data);
        // toast()
        //   .success("Success!", "Added to cart.")
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
  created() {
    this.price = this.record.prices[0];
  },
};
</script>

<style lang="scss" scoped>
</style>