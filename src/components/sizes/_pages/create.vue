<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>New Size</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/sizes">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <!-- editor -->
        <editor :docCreate="docCreate" :initial="dataItem" @data="save"></editor>
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
    Editor
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data: () => ({
    dataItem: {},
    docCreate: true,
  }),
  methods: {
    save(data) {
      const url = "/sizes";
      const self = this;
      this.$store
        .dispatch("post", { url, data })
        .then((res) => {
          if (res.state) {
            self.$router.push("/sizes");
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch((err) => {
          self.$store.commit("btnLoader", false);
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
};
</script>