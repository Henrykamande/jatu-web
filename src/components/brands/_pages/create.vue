<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title
          ><span style="color: red">{{ selectedCategory.name }}</span> -> New
          Brand</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          small
          text
          :to="`/category/brands/${selectedCategory.url}`"
        >
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <!-- editor -->
        <editor
          :docCreate="docCreate"
          :initial="dataItem"
          :subcategories="subcategories"
          @data="save"
        ></editor>
        <!-- end -->
      </v-card-text>
    </v-card>

    <!-- snackbar -->
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import Editor from "../_components/editor.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Editor,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data: () => ({
    dataItem: {},
    selectedCategory: {},
    subcategories: [],
    docCreate: true,
  }),
  watch: {
    "$route.params.url": {
      handler: "getCategory",
      immediate: true,
    },
  },
  methods: {
    getCategory(val) {
      const self = this;
      this.$store
        .dispatch("get", `/categories/${val}`)
        .then((res) => {
          if (res.state) {
            self.selectedCategory = res.record;
            self.getSubCategories(res.record.url);
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      data.category = this.selectedCategory._id;
      data.categoryUrl = this.selectedCategory.url;
      const url = "/brands";
      const self = this;
      this.$store
        .dispatch("post", { url, data })
        .then((res) => {
          if (res.state) {
            self.$router.push(`/category/brands/${this.selectedCategory.url}`);
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getSubCategories(url) {
      const self = this;
      this.$store
        .dispatch("get", `/subcategories/select/${url}`)
        .then((res) => {
          if (res.state) {
            self.subcategories = res.records;
            console.log(res.records, "cats");
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {},
};
</script>