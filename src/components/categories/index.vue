<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>Categories</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="6">
            <v-btn color="accent" small to="/new-category">
              <v-icon left dark>mdi-plus</v-icon>New Category
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
              :items="categories"
              :search="search"
              :mobile-breakpoint="zeroValue"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" text :to="`/category/${item.url}`" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.delete="{ item }">
                <v-btn color="red" text icon @click="openDeleteDialog(item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
            <!-- end -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- start of dialog -->
    <v-dialog v-model="deleteDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Delete Product</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="deleteDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                <span>
                  Are you sure you want to delete the following category ?</span
                >
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <span style="color: red"> {{ deleteItem.name }}</span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <span style="color: red">url: {{ deleteItem.url }}</span>
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="red"
                  dark
                  :loading="loader"
                  @click="deleteCategory"
                  >Yes</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    deleteDialog: false,
    deleteItem: {},
    customersDialog: false,
    loader: false,
    zeroValue: 0,
    pageItems: 100,
    headers: [
      { text: "Name", value: "name" },
      { text: "Action", value: "action" },
      { text: "Delete", value: "delete" },
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
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    deleteCategory() {
      const self = this;
      this.loader = true;
      this.$store
        .dispatch("remove", `/categories/delete/${this.deleteItem.url}`)
        .then((res) => {
          if (res.state) {
            self.loader = false;
            location.reload();
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