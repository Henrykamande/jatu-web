<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <v-switch
          v-model="record.offer"
          color="red"
          label="On Offer"
          @change="changeOffer"
        ></v-switch>
      </v-col>
      <v-col cols="12" md="4">
        <v-switch
          v-model="record.trending"
          color="indigo"
          label="Trending"
          @change="changeTrending"
        ></v-switch>
      </v-col>
      <v-col cols="12" md="4">
        <v-switch
          v-model="record.clearance"
          color="orange"
          label="Clearance"
          @change="changeClearance"
        ></v-switch>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Description"
          type="text"
          autocomplete="off"
          dense
          v-model="record.name"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          label="Alt Tag"
          type="text"
          autocomplete="off"
          dense
          v-model="record.alt_tag"
        ></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-autocomplete
          autocomplete="off"
          dense
          v-model="record.category_url"
          :items="categories"
          label="Category"
          item-text="name"
          item-value="url"
          @change="autofillRecords(record.category_url)"
        ></v-autocomplete>
      </v-col>

      <v-col cols="3">
        <v-autocomplete
          autocomplete="off"
          dense
          v-model="record.subcategory_url"
          :items="subcategories"
          label="Sub Category"
          item-text="name"
          item-value="url"
          @change="filterBrands(record.subcategory_url)"
        ></v-autocomplete>
      </v-col>

      <v-col cols="3">
        <v-autocomplete
          autocomplete="off"
          dense
          v-model="record.brand_url"
          :items="brands"
          label="Brand"
          item-text="name"
          item-value="url"
        ></v-autocomplete>
      </v-col>

      <v-col cols="3">
        <v-autocomplete
          autocomplete="off"
          dense
          v-model="record.country"
          :items="countries"
          label="Country Of Origin"
          item-text="name"
          item-value="url"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          label="Alcohol Percentage"
          type="text"
          autocomplete="off"
          dense
          v-model="record.alcohol"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-btn text color="accent" @click.native="dialog = true">
          <v-icon left>mdi-plus</v-icon>Pricing
        </v-btn>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Volume</th>
                <th class="text-left">Price</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in prices" :key="index">
                <td>{{ item.volume }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <v-btn icon @click="deleteItem(index)">
                    <v-icon color="red">mdi-close</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <!-- create images section -->
    <v-row>
      <v-col cols="12">
        <label>Cover Image</label>
        <file-upload @image="setCoverImage"></file-upload>
      </v-col>
      <v-col cols="4" v-show="pageStatus == 'view'">
        <v-img
          :src="`${serverUrl}/uploads/products/${record.cover_image}`"
        ></v-img>
      </v-col>

      <v-col cols="4">
        <img
          v-if="coverImageUrl"
          :src="coverImageUrl"
          style="width: 350px; height: 350px; padding: 20px"
        />
      </v-col>
    </v-row>

    <v-row v-show="pageStatus == 'create'">
      <v-col cols="12">
        <label>Other Images</label>
        <multi-upload
          @collection="setImages"
          @urls="setImagesUrls"
        ></multi-upload>
      </v-col>

      <v-col cols="3" v-for="(url, key) in imagesUrls" v-bind:key="key">
        <img
          v-if="url"
          :src="url"
          style="width: 350px; height: 250 padding: 20px"
        />
        <v-btn icon @click="removeOtherImage(key)">
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- end of create images section -->

    <v-row v-show="pageStatus == 'view'">
      <v-col
        cols="4"
        v-for="(image, index) of record.otherImages"
        v-bind:key="index"
      >
        <v-img :src="`${serverUrl}/uploads/products/${image}`"></v-img>
      </v-col>
    </v-row>
    <!-- end of update images section -->

    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          label="Meta Title"
          type="text"
          autocomplete="off"
          dense
          v-model="record.meta_title"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="12">
        <v-textarea
          label="Meta Description"
          type="text"
          autocomplete="off"
          dense
          v-model="record.meta_desc"
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <html-editor ref="footer_content"></html-editor>
      </v-col>
    </v-row>

    <v-row style="margin-top: 70px">
      <v-col cols="12">
        <v-btn
          color="accent"
          v-show="action == 'create'"
          @click="sendData"
          :loading="loader"
        >
          <v-icon left>mdi-content-save</v-icon>Save
        </v-btn>

        <v-btn
          color="accent"
          v-show="action == 'view'"
          @click="sendData"
          :loading="loader"
        >
          <v-icon left>mdi-content-save</v-icon>Update
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-dialog v-model="dialog" max-width="650px">
        <v-card>
          <v-toolbar dense color="accent" dark>
            <v-toolbar-title>Create Pricing</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-container fluid>
              <v-row dense class="subtitle-2 text--primary">
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    label="Volume"
                    outlined
                    dense
                    v-model="volume"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    label="Price"
                    outlined
                    dense
                    v-model="price"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-btn color="primary" @click="addPricing">Add</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import FileUpload from "@/components/global/file-uploader.vue";
import HtmlEditor from "@/components/global/html-editor.vue";
import MultiUpload from "@/components/global/multiple-file-uploader.vue";
export default {
  computed: {
    ...mapGetters(["serverUrl"]),
  },
  components: {
    FileUpload,
    MultiUpload,
    HtmlEditor,
  },
  props: {
    action: {
      type: String,
    },
    initial: {
      type: Object,
    },
  },
  data() {
    return {
      priceItem: {},
      volume: null,
      price: null,
      prices: [],
      dialog: false,
      offer: false,
      trending: false,
      clearance: false,
      sizes: [],
      record: {},
      pageStatus: "",
      loader: false,
      coverImage: null,
      images: [],
      imagesUrls: [],
      coverImageUrl: null,
      categories: [],
      countries: [],
      subcategories: [],
      brands: [],
    };
  },
  watch: {
    action: {
      handler: "setAction",
      immediate: true,
    },
    initial: {
      handler: "setInitial",
      immediate: true,
    },
  },
  methods: {
    initializeContent() {
      setTimeout(() => {
        if (
          this.record.content &&
          this.record.content !== "" &&
          this.$refs.footer_content
        ) {
          this.$refs.footer_content.setContent(this.record.content);
        }
      }, 100);
    },
    setAction(val) {
      this.pageStatus = val;
    },
    setInitial(val) {
      this.record = { ...val };
      this.initializeContent();
      if (this.action == "view") {
        this.autofillRecords(val.category_url);
        this.prices = val.prices;
      }
    },
    deleteItem(pos) {
      this.prices.splice(pos, 1);
    },
    addPricing() {
      let details = {
        volume: this.volume,
        price: this.price,
      };
      const initArray = [];
      initArray.push(details);
      this.prices = [...this.prices, ...initArray];
      this.dialog = false;
      this.volume = null;
      this.price = null;
    },
    changeOffer(val) {
      if (this.action == "view") {
        let data = { offer: val };
        const url = `/products/update/section/${this.record._id}`;
        const self = this;
        this.$store
          .dispatch("expressPut", { url, data })
          .then((res) => {
            if (res.state) {
              location.reload();
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    },
    changeTrending(val) {
      if (this.action == "view") {
        let data = { trending: val };
        const url = `/products/update/section/${this.record._id}`;
        const self = this;
        this.$store
          .dispatch("expressPut", { url, data })
          .then((res) => {
            if (res.state) {
              location.reload();
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    },
    changeClearance(val) {
      if (this.action == "view") {
        let data = { clearance: val };
        const url = `/products/update/section/${this.record._id}`;
        const self = this;
        this.$store
          .dispatch("expressPut", { url, data })
          .then((res) => {
            if (res.state) {
              location.reload();
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    },
    sendData() {
      const productContent = this.$refs.footer_content.getContent();
      const formData = new FormData();
      const url = this.record.name
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .trim()
        .split(" ")
        .join("-");

      this.record.url = url;
      this.record.prices = this.prices;
      formData.append("giftpack", true);
      formData.append("coverImage", this.coverImage);
      formData.append("content", productContent);
      formData.append("introText", this.introText);
      formData.append("product", JSON.stringify(this.record));
      formData.append("actionStatus", "view");
      //other images
      const files = this.images;
      files.forEach((file) => {
        const m_file = file;
        formData.append("otherImages", m_file);
      });
      this.loader = true;
      this.$emit("data", formData);
    },
    setCoverImage({ image, imageUrl }) {
      this.coverImage = image;
      this.coverImageUrl = imageUrl;
    },
    setImages(files) {
      this.images = files;
    },
    setImagesUrls(urls) {
      this.imagesUrls = urls;
    },
    removeOtherImage(key) {
      this.imagesUrls.splice(key, 1);
      this.images.splice(key, 1);
    },
    getSizes() {
      const self = this;
      this.$store
        .dispatch("get", `/sizes`)
        .then((res) => {
          if (res.state) {
            self.sizes = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getCategories() {
      const self = this;
      this.$store
        .dispatch("get", `/categories`)
        .then((res) => {
          if (res.state) {
            self.categories = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    autofillRecords(url) {
      const self = this;
      this.$store
        .dispatch("get", `/categories/autofill/data/${url}`)
        .then((res) => {
          if (res.state) {
            self.subcategories = res.subcategories;
            self.brands = res.brands;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    filterBrands(url) {
      const self = this;
      this.$store
        .dispatch("get", `/categories/autofill/filter/brands/${url}`)
        .then((res) => {
          if (res.state) {
            self.brands = res.brands;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getCountries() {
      const self = this;
      this.$store
        .dispatch("get", `/countries`)
        .then((res) => {
          if (res.state) {
            self.countries = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {
    Promise.all([this.getCategories(), this.getSizes(), this.getCountries()]);
  },
};
</script>

<style lang="scss" scoped>
</style>