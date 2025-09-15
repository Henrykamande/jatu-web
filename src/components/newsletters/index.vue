<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Newsletter Subscriptions</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <!-- start of col -->
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="newsletters"
              :search="search"
            >
            
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
      costsDialog: false,
      costs: [],
      acres: null,
      loader: false,
      deleteItem: {},
      newsletters: [],
      headers: [
        { text: "Email", value: "newsletterEmail" },
      ]
    };
  },
  methods: {
    getData() {
      const url = "/newsletter";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.newsletters = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    }
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>