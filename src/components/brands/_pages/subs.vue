<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title
          ><span style="color: red">{{ selectedCategory.name }}</span> ->
          Brands</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/brands">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="6">
            <v-btn
              color="accent"
              small
              :to="`/new-brand/${selectedCategory.url}`"
            >
              <v-icon left dark>mdi-plus</v-icon>New Brand
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" xs="12" md="6">
            <v-data-table
              :items-per-page="1000"
              :headers="headers"
              :items="brands"
              :search="search"
              :mobile-breakpoint="0"
            >
              <!-- action template -->
              <!-- <template v-slot:item.name="{ item }">
                <v-btn color="editIcon" text :to="`/category/sub-categories/${item.url}`">
                  <v-btn color="primary" text>{{item.name}}</v-btn>
                </v-btn>
              </template>-->
              <!-- end -->

              <!-- action template -->
              <!-- <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" text :to="`/category/${item.url}`" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>-->
              <!-- end -->
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
  components: {},
  computed: {
    ...mapGetters(["user"]),
  },
  data: () => ({
    search: null,
    dataItem: {},
    selectedCategory: {},
    docCreate: false,
    brands: [],
    subcategories: [],
    headers: [
      { text: "Name", value: "name" },
      { text: "Sub Category", value: "subcategory.name" },
      { text: "Action", value: "action" },
    ],
  }),
  watch: {
    "$route.params.id": {
      handler: "getCategory",
      immediate: true,
    },
  },
  methods: {
    getCategory(val) {
      const self = this;
      this.$store
        .dispatch("get", `/categories/${val}`)
        .then((res) => {
          if (res.state) {
            self.selectedCategory = res.record;
            self.getData(res.record.url);
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
      const url = `/categories/edit/${data._id}`;
      const self = this;
      this.$store
        .dispatch("put", { url, data })
        .then((res) => {
          if (res.state) {
            self.$router.push("/categories");
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getData(categoryUrl) {
      const self = this;
      this.$store
        .dispatch("get", `/brands/select/${categoryUrl}`)
        .then((res) => {
          if (res.state) {
            self.brands = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {},
};
</script>