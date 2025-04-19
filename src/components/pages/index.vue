<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>Pages</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="6">
            <v-btn color="accent" small to="/new-page">
              <v-icon left dark>mdi-plus</v-icon>New Page
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
              :items="pages"
              :search="search"
              :mobile-breakpoint="zeroValue"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" text :to="`/page/${item._id}`" icon>
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
    loader: false,
    zeroValue: 0,
    pageItems: 100,
    headers: [
      { text: "Name", value: "name" },
      { text: "Url", value: "url" },
      { text: "Action", value: "action" },
    ],
    pages: [],
    excelFile: null,
  }),
  methods: {
    getPages() {
      const self = this;
      this.$store
        .dispatch("get", `/pages`)
        .then((res) => {
          if (res.state) {
            self.pages = res.records;
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
    this.getPages();
  },
};
</script>