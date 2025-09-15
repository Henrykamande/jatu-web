<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>Sub Categories</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
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
          <v-col cols="12" sm="12" md="6">
            <!-- start of table -->
            <v-data-table
              :items-per-page="pageItems"
              :headers="headers"
              :items="categories"
              :search="search"
              :mobile-breakpoint="zeroValue"
            >
              <!-- action template -->
              <template v-slot:item.name="{ item }">
                <v-btn color="editIcon" text :to="`/category/sub-categories/${item.url}`">
                  <v-btn color="primary" text>{{item.name}}</v-btn>
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" text :to="`/category/${item.url}`" icon>
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
      { text: "Category Name", value: "name" }
    ],
    categories: [],
    excelFile: null,
  }),
  methods: {
    getCategories() {
      const self = this;
      this.$store
        .dispatch("get", `/categories`)
        .then((res) => {
          if (res.state) {
            self.categories = res.records;
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
    this.getCategories();
  },
};
</script>