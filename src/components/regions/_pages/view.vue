<template>
    <v-container fluid>
      <v-card>
        <v-toolbar color="secondary" flat>
          <v-toolbar-title>Zone</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" small text to="/sub-categories">
            <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
          </v-btn> -->
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
      Editor,
    },
    computed: {
      ...mapGetters(["user"]),
    },
    data: () => ({
      dataItem: {},
      country: {},
      docCreate: false
    }),
    watch: {
      "$route.params.url": {
        handler: "getRegion",
        immediate: true,
      },
    },
    methods: {
      getRegion(val) {
        const self = this;
        this.$store
          .dispatch("get", `/regions/${val}`)
          .then((res) => {
            if (res.state) {
              self.dataItem = res.record;
              self.getCountry(res.record.country);
            } else {
              this.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });
      },
      getCountry(id) {
      const self = this;
      this.$store
        .dispatch("get", `/countries/by/id/${id}`)
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
        const url = `/regions/edit/${data._id}`;
        const self = this;
        this.$store
          .dispatch("put", { url, data })
          .then((res) => {
            if (res.state) {
              const redirectUrl = `/country/regions/${self.country.url}`;
              self.$router.push(redirectUrl);
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