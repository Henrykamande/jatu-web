<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>Countries</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="6">
            <v-btn color="accent" small to="/new-country">
              <v-icon left dark>mdi-plus</v-icon>New Country
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" md="12">
            <!-- start of table -->
            <v-data-table
              :items-per-page="pageItems"
              :headers="headers"
              :items="countries"
              :search="search"
              :mobile-breakpoint="zeroValue"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" text :to="`/country/${item.url}`" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
            <!-- end -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    customersDialog: false,
    loader: false,
    zeroValue: 0,
    pageItems: 100,
    headers: [
      { text: "Name", value: "name" },
      { text: "Code", value: "code" },
      { text: "Conversion Rate", value: "cnvRate" },
      { text: "Action", value: "action" },
    ],
    countries: [],
    excelFile: null,
  }),
  methods: {
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
  },
  created() {
    this.getCountries();
  },
};
</script>