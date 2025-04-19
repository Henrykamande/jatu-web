<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Projects Cost Definition</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field label="Search" v-model="search" outlined dense></v-text-field>
          </v-col>
          
          <!-- start of col -->
          <v-col cols="8">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="projects"
              :search="search"
            >
              <!-- name template -->
              <template v-slot:item.title="{ item }">
                <v-btn
                  color="primary"
                  text
                  :to="`/price/definition/${item._id}`"
                >
                  {{ item.title }}
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn
                  color="accent"
                  text
                  :to="`/price/definition/${item._id}`"
                  ><v-icon left color="accent">mdi-plus</v-icon> Cost 
                  Items
                </v-btn>
              </template>
              <!-- end -->
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
      deleteDialog: false,
      deleteItem: {},
      projects: [],
      headers: [
        { text: "Project", value: "title" },
        { text: "Action", value: "action" },
      ],
    };
  },
  methods: {
    getData() {
      const url = "/projects";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.projects = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    deleteProduct() {
      const url = `/products/${this.deleteItem._id}`;
      this.loader = true;
      this.$store
        .dispatch("remove", url)
        .then((res) => {
          if (res.state) {
            this.loader = false;
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
  },
  created() {
    this.$store.commit("btnLoader", false);
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>