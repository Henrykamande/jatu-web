<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat>
        <v-toolbar-title>{{dataItem.name}} - Zones</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/regions">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-btn color="accent" small :to="`/create/region/${dataItem.url}`"><v-icon left>mdi-plus</v-icon> Create Zone</v-btn>
          </v-col>
        </v-row>
       <v-row>
        <v-data-table
              :items-per-page="100"
              :headers="headers"
              :items="regions"
              :search="search"
              :mobile-breakpoint="0"
            >
             <!-- action template -->
             <template v-slot:item.name="{ item }">
                <v-btn color="accent" text :to="`/region/${item.url}`">
                  {{item.name}}
                </v-btn>
              </template>
              <!-- end -->
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="accent" text :to="`/region/${item.url}`" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
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
    ...mapGetters(["user"]),
  },
  data: () => ({
    search: "",
    dataItem: {},
    regions: [],
    docCreate: false,
    headers: [
      { text: "Name", value: "name" },
      { text: "Action", value: "action" },
    ],
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
            self.dataItem = res.record;
            self.getRegions(res.record._id);
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getRegions(id) {
      const self = this;
      this.$store
        .dispatch("get", `/regions/by/country/${id}`)
        .then((res) => {
          if (res.state) {
           self.regions = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      const url = `/countries/edit/${data._id}`;
      const self = this;
      this.$store
        .dispatch("put", { url, data })
        .then((res) => {
          if (res.state) {
            self.$router.push("/countries");
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