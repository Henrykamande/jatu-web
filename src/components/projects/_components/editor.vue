<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          label="Title"
          name="serviceName"
          outlined
          dense
          v-model="record.title"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="12">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.countries"
          :items="countries"
          label="Countries Grown"
          item-text="name"
          item-value="_id"
          chips
          small-chips
          multiple
        ></v-autocomplete>
      </v-col>

      <v-col cols="12" md="6">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.relatedProjects"
          :items="projects"
          label="Related Projects"
          item-text="title"
          item-value="_id"
          chips
          small-chips
          multiple
        ></v-autocomplete>
      </v-col>  
       <v-col cols="12" md="6">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.projectCategory"
          :items="projectCategories"
          label="Project Category"
          item-text="name"
          item-value="url"
          chips
          small-chips
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-textarea
          outlined
          v-model="record.introText"
          label="Introduction Text"
          value
          rows="3"
        ></v-textarea>
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="H1"
          outlined
          dense
          v-model="record.h1"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="H2"
          outlined
          dense
          v-model="record.h2"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          label="Meta Title"
          outlined
          dense
          v-model="record.metaTitle"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          outlined
          v-model="record.metaDescription"
          label="Meta Description"
          value
        ></v-textarea>
      </v-col>

      <v-col cols="12" xs="12" md="6">
        <v-radio-group
          dense
          label="Cattle Project"
          v-model="record.CattleProject"
          row
        >
          <v-radio label="Yes" value="Y"></v-radio>
          <v-radio label="No" value="N"></v-radio>
        </v-radio-group>
      </v-col>

      <v-col cols="12">
        <html-editor ref="footer_content"></html-editor>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" style="margin-top: 60px">
        <h3>Farming Procedure Section 1</h3>
        <html-editor ref="sec_one"></html-editor>
      </v-col>

      <v-col cols="6" style="margin-top: 60px">
        <h3>Farming Procedure Section 2</h3>
        <html-editor ref="sec_two"></html-editor>
      </v-col>
    </v-row>

    <v-row style="margin-top: 60px">
      <v-col cols="12" style="margin-top: 60px">
        <h3>Insurance Cover data</h3>
        <html-editor ref="insurance"></html-editor>
      </v-col>
    </v-row>

    <!-- create images section -->
    <v-row style="margin-top: 90px">
      <v-col cols="12">
        <label>Cover Image</label>
        <file-upload @image="setCoverImage"></file-upload>
      </v-col>

      <v-col cols="6">
        <img
          v-if="coverImageUrl"
          :src="coverImageUrl"
          style="width: 350px; height: 350px; padding: 20px"
        />
      </v-col>
    </v-row>

    <v-row>
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
          style="width: 350px; height: 250; padding: 20px"
        />
        <v-btn icon @click="removeOtherImage(key)">
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- end of create images section -->

    <!-- update images section -->
    <v-row v-show="pageStatus == 'view'" style="margin-top: 50px">
      <v-col cols="4">
        <v-img
          :src="`${serverUrl}/uploads/projects/${record.coverImage}`"
          height="200px"
        ></v-img>
      </v-col>
    </v-row>

    <v-row v-show="pageStatus == 'view'">
      <v-col
        cols="4"
        v-for="(image, index) of record.otherImages"
        v-bind:key="index"
      >
        <v-img
          :src="`${serverUrl}/uploads/projects/${image}`"
          height="200px"
        ></v-img>
      </v-col>
    </v-row>
    <!-- end of update images section -->

    <v-row>
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
          <v-icon left>mdi-content-save</v-icon> Update
        </v-btn>
      </v-col>
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
      sizes: [{ name: "1 Acre" }, { name: "2 Acres" }],
      record: {},
      projects: [],
      departments: [],
      projectCountries: [],
      projectCategories: [],
      categories: [],
      countries: [],
      pageStatus: "",
      loader: false,
      coverImage: null,
      images: [],
      imagesUrls: [],
      coverImageUrl: null,
      menuPositions: [
        { name: "On Menu", value: "M" },
        { name: "On Page", value: "P" },
      ],
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

        // sec one 
        if (
          this.record.sec_one &&
          this.record.sec_one !== "" &&
          this.$refs.sec_one
        ) {
          this.$refs.sec_one.setContent(this.record.sec_one);
        }
        // sec two

        if (
          this.record.sec_two &&
          this.record.sec_two !== "" &&
          this.$refs.sec_two
        ) {
          this.$refs.sec_two.setContent(this.record.sec_two);
        }
        // 
        
        // insurance
        if (
          this.record.insurance &&
          this.record.insurance !== "" &&
          this.$refs.insurance
        ) {
          this.$refs.insurance.setContent(this.record.insurance);
        }
      }, 100);
    },
    setAction(val) {
      this.pageStatus = val;
    },
    setInitial(val) {
      this.record = { ...val };
      this.initializeContent();
    },
    getCategories() {
      const url = `/categories`;
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.categories = res.records;
          } else {
            // self.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getProjectCategories() {
      const url = `/project-categories`;
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.projectCategories = res.records;
          } else {
            // self.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    sendData() {
      const productContent = this.$refs.footer_content.getContent();
      const seconeContent = this.$refs.sec_one.getContent();
      const sectwoContent = this.$refs.sec_two.getContent();
      const insuranceContent = this.$refs.insurance.getContent();

      const formData = new FormData();
      const url = this.record.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .trim()
        .split(" ")
        .join("-");
      this.record.url = url;

      formData.append("coverImage", this.coverImage);
      formData.append("content", productContent);
      formData.append("sec_one", seconeContent);
      formData.append("sec_two", sectwoContent);
      formData.append("insurance", insuranceContent);
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
    getProjects() {
      const url = "/projects";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.projects = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {
    this.getCountries();
    this.getProjects();
    this.getProjectCategories()
  },
};
</script>

<style lang="scss" scoped>
</style>