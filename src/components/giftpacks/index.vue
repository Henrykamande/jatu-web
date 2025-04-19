<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Gift Packs</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-btn color="accent" text to="/new/gift">
              <v-icon>mdi-plus</v-icon> New Gift
            </v-btn>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-col>

          <!-- start of listing -->
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="products"
              :search="search"
            >
              <!-- action template -->
              <template v-slot:item.image="{ item }">
                <v-img
                  style="width: 70px; height: 70px"
                  :to="`/product/details/${item.url}`"
                  :src="`${serverUrl}/uploads/products/${item.cover_image}`"
                ></v-img>
              </template>
              <!-- end -->

              <!-- name template -->
              <template v-slot:item.name="{ item }">
                <v-btn color="primary" text :to="`/gift/details/${item.url}`">
                  {{ item.name }}
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn
                  color="editIcon"
                  text
                  :to="`/gift/details/${item.url}`"
                  icon
                  ><v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
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
      headers: [
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Category", value: "category_url" },
        { text: "Sub Category", value: "subcategory_url" },
        { text: "Brand", value: "brand_url" },
        { text: "Alcohol %", value: "alcohol" },
        { text: "Action", value: "action" },
      ],
    };
  },
  methods: {
    getData() {
      const url = "/products/get/giftpacks";
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