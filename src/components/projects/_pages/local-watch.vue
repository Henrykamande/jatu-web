<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>
          <span style="color: red">{{dataItem.title}}</span> - Local Market Watch
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/projects">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field class="mt-2 mb-2" label="Search" v-model="search" outlined dense></v-text-field>
            <v-data-table
              :items-per-page="100"
              :headers="headers"
              :items="countries"
              :search="search"
              :mobile-breakpoint="0"
            >
              <template v-slot:item.action="{ item }">
                <v-btn small color="blue" text :to="`/local/watch/${dataItem.url}/${item.url}`">
                  <v-icon left>mdi-cog-outline</v-icon>Manage Local Watch
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- snackbar -->
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>
  
  <script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    search: "",
    dataItem: {},
    countries: [],
    regions: [],
    docCreate: false,
    headers: [
      { text: "Name", value: "name" },
      { text: "Action", value: "action" }
    ]
  }),
  watch: {
    "$route.params.url": {
      handler: "getCountry",
      immediate: true
    }
  },
  methods: {
    getCountry(val) {
      const self = this;
      this.$store
        .dispatch("get", `/projects/${val}`)
        .then(res => {
          if (res.state) {
            self.dataItem = res.record;
            self.countries = res.projectCountries;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      const url = `/countries/edit/${data._id}`;
      const self = this;
      this.$store
        .dispatch("put", { url, data })
        .then(res => {
          if (res.state) {
            self.$router.push("/countries");
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    }
  }
};
</script>