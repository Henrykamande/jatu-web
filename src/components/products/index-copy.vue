<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Products</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-btn color="accent" text to="/new/product">
              <v-icon>mdi-plus</v-icon>Product
            </v-btn>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-col>
          <!-- start of col -->
          <v-col cols="3" v-for="product in products" v-bind:key="product._id">
            <v-card class="mx-auto" >
              <v-img
              :to="`/product/details/${product.url}`"
                :src="`${serverUrl}/uploads/products/${product.cover_image}`"
              ></v-img>

              <v-card-title style="font-size: 12px; font-weight: bold">{{product.name}}</v-card-title>

              <v-card-subtitle>{{product.size}}</v-card-subtitle>

              <v-card-actions>
                <v-btn icon color="primary" text :to="`/product/details/${product.url}`">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon color="accent" text :to="`/product/details/${product.url}`" right>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- end of col -->
        </v-row>
      </v-card-text>
    </v-card>
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["serverUrl"]),
  },
  data() {
    return {
      search: null,
      products: [],
    };
  },
  methods: {
    getData() {
      const url = "/products";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.products = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>