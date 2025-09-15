<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat>
        <v-toolbar-title>Page Details</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/pages">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <!-- editor -->
        <editor
          :docCreate="docCreate"
          :initial="dataItem"
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
    docCreate: false,
  }),
  watch: {
    "$route.params.id": {
      handler: "getCategory",
      immediate: true,
    },
  },
  methods: {
    getCategory(val) {
      console.log(val, "page url");
      const self = this;
      this.$store
        .dispatch("get", `/pages/${val}`)
        .then((res) => {
          console.log(res, "page response");
          if (res.state) {
            self.dataItem = res.record;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      const url = `/pages/edit/${data._id}`;
      const self = this;
      this.$store
        .dispatch("put", { url, data })
        .then((res) => {
          if (res.state) {
            self.$router.push("/pages");
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
};
</script>