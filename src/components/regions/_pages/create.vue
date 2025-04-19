<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>New Zone - {{country.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text :to="`/country/regions/${country.url}`">
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
    country: {},
    docCreate: true,
  }),
  watch: {
    "$route.params.url": {
      handler: "getCountry",
      immediate: true,
    },
  },
  methods: {
    getCountry(val) {
      const self = this;
      this.$store
        .dispatch("get", `/countries/${val}`)
        .then((res) => {
          if (res.state) {
            self.country = res.record;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      data.country = this.country._id;
      //console.log(data, 'region data');
      const url = "/regions";
    const self = this;
      this.$store
        .dispatch("post", { url, data })
        .then((res) => {
          if (res.state) {
            const rUrl = `/country/regions/${this.country.url}`;
           self.$router.push(rUrl);
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