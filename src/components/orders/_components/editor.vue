<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-text-field
          label="Title"
          type="text"
          autocomplete="off"
          outlined
          dense
          v-model="record.title"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-text-field
          label="Price"
          type="text"
          autocomplete="off"
          outlined
          dense
          v-model="record.price"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn color="accent" text @click="dialog = true">
          <v-icon left>mdi-plus</v-icon>Package Benefit
        </v-btn>
      </v-col>

      <v-col cols="6">
        <v-simple-table dense v-if="action == 'create'">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Item</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in benefits" :key="index">
                <td>{{ item }}</td>
                <td>
                  <v-btn icon @click="deleteItem(index)">
                    <v-icon color="red">mdi-close</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-simple-table dense v-else>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in record.benefits" :key="index">
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col cols="12">
        <html-editor ref="footer_content"></html-editor>
      </v-col>
    </v-row>

    <!-- create images section -->
    <v-row  style="margin-top: 50px">
      <v-col cols="12">
        <label>Cover Image</label>
        <file-upload @image="setCoverImage"></file-upload>
      </v-col>

      <v-col cols="12">
        <img
          v-if="coverImageUrl"
          :src="coverImageUrl"
          style="height: 350px; padding: 20px"
        />
      </v-col>
    </v-row>

    <!-- update images section -->
    <v-row v-show="action == 'view'">
      <v-col cols="6">
        <v-img :src="`${serverUrl}/uploads/packages/${record.coverImage}`" style="height: 350px; margin-top: 50px"></v-img>
      </v-col>
    </v-row>
    <!-- end of update images section -->

    <v-row>
      <v-col cols="12">
        <v-btn color="accent" v-show="action == 'create'" @click="sendData" :loading="loader">
          <v-icon left>mdi-content-save</v-icon>Save
        </v-btn>

        <v-btn color="accent" v-show="action == 'view'" @click="sendData" :loading="loader">
          <v-icon left>mdi-content-save</v-icon> Update
        </v-btn>
      </v-col>
    </v-row>

    <!-- brand quick add dialog -->
    <v-dialog v-model="dialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Package Benefit</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Benefit" outlined dense v-model="benefit"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="accent" @click="addBenefit">
                  <v-icon left>mdi-plus</v-icon>Add
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of modal-->

    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import FileUpload from "@/components/global/file-uploader.vue";
import HtmlEditor from "@/components/global/html-editor.vue";
export default {
  computed: {
    ...mapGetters(["serverUrl"]),
  },
  components: {
    FileUpload,
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
      sizes: [{ name: "1 Acre" }, { name: "2 Acres" }],
      dialog: false,
      record: {},
      pageStatus: "",
      loader: false,
      coverImage: null,
      images: [],
      imagesUrls: [],
      coverImageUrl: null,
      benefit: null,
      benefits: [],
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
          this.record.details &&
          this.record.details !== "" &&
          this.$refs.footer_content
        ) {
          this.$refs.footer_content.setContent(this.record.details);
        }
      }, 100);
    },
    deleteItem(pos) {
      this.benefits.splice(pos, 1);
    },
    addBenefit() {
      const initArray = [];
      initArray.push(this.benefit);
      this.benefits = [...this.benefits, ...initArray];
      this.dialog = false;
      this.benefit = null;
    },
    setAction(val) {
      this.pageStatus = val;
    },
    setInitial(val) {
      this.record = { ...val };
      this.initializeContent();
    },
    sendData() {
      const productContent = this.$refs.footer_content.getContent();

      const formData = new FormData();
      const url = this.record.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .trim()
        .split(" ")
        .join("-");
      this.record.url = url;

      formData.append("coverImage", this.coverImage);
      formData.append("details", productContent);
      formData.append("tourPackage", JSON.stringify(this.record));
      formData.append("actionStatus", "create");
      const tourBenefits = this.benefits;
      tourBenefits.forEach((benefit) => {
        const m_benefit = benefit;
        formData.append("benefits", m_benefit);
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
  },
  created() {
    //  const m = this.meta
    // this.meta = { ...m, ...this.initial }
    
  },
};
</script>

<style lang="scss" scoped>
</style>