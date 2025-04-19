<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Available Farms</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense class="text--primary subtitle-2">
          <v-col cols="12">
            <v-btn color="accent" text small @click="openDetailsDialog">
              <v-icon>mdi-plus</v-icon>New Farm Record
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-col>
          <!-- start of col -->
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="records"
              :search="search"
            >
              <!-- action template -->
              <template v-slot:item.reduce="{ item }">
                <v-btn color="accent" text @click="openReduceDialog(item)">
                  <v-icon left>mdi-minus</v-icon>Reduce Land
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.add="{ item }">
                <v-btn color="blue" text @click="openAddDialog(item)">
                  <v-icon>mdi-plus</v-icon>Add Land
                </v-btn>
              </template>
              <!-- end -->

              <!-- action template -->
              <template v-slot:item.view="{ item }">
                <v-btn icon color="accent" @click="openEditDialog(item)">
                  <v-icon left>mdi-eye</v-icon>
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
          </v-col>
          <!-- end of col -->
        </v-row>

        <v-dialog
          v-model="detailsDialog"
          hide-overlay
          fullscreen
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary" dense>
              <v-toolbar-title>Farm Registration</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click.native="detailsDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <editor :initial="dataItem" :docCreate="docCreate" @data="save"></editor>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>

        <!-- reduce dialog -->
        <v-dialog v-model="reduceDialog" max-width="750px">
          <v-card>
            <v-toolbar dark color="primary" dense>
              <v-toolbar-title>Reduce Land</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click.native="reduceDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row class="subtitle-2 text--primary">
                  <v-col cols="12" md="6">Country: {{ activeItem.country && activeItem.country.name }}</v-col>

                  <v-col cols="12" md="6">Zone: {{ activeItem.zone && activeItem.zone.name }}</v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Acres To Reduce"
                      outlined
                      dense
                      v-model="acresModified"
                      type="number"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-btn color="accent" :loader="loader" @click="reduceLand">
                      <v-icon left>mdi-content-save</v-icon>Reduce Land
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- end -->

        <!-- reduce dialog -->
        <v-dialog v-model="addDialog" max-width="750px">
          <v-card>
            <v-toolbar dark color="primary" dense>
              <v-toolbar-title>Add Land</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click.native="addDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-row class="subtitle-2 text--primary">
                  <v-col cols="12" md="6">Country: {{activeItem.country && activeItem.country.name}}</v-col>

                  <v-col cols="12" md="6">Zone: {{activeItem.zone && activeItem.zone.name}}</v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Acres To Add"
                      outlined
                      dense
                      v-model="acresModified"
                      type="number"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-btn color="accent" :loader="loader" @click="addLand">
                      <v-icon left>mdi-content-save</v-icon>Add Land
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- end -->
      </v-card-text>
    </v-card>
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import Editor from "./editor.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Editor
  },
  computed: {
    ...mapGetters(["serverUrl"])
  },
  data() {
    return {
      docCreate: false,
      reduceDialog: false,
      addDialog: false,
      search: null,
      dataItem: {},
      acresModified: null,
      loader: false,
      detailsDialog: false,
      deleteDialog: false,
      deleteItem: {},
      activeItem: {},
      records: [],
      countries: [],
      zones: [],
      farmOptions: [
        { name: "Partnership", value: "Partnership" },
        { name: "For Lease", value: "For Lease" },
        { name: "For Sale", value: "For Sale" }
      ],
      headers: [
        { text: "Serial No", value: "serialNo" },
        { text: "Country", value: "country.name" },
        { text: "Zone", value: "zone.name" },
        { text: "Acres", value: "acres" },
        { text: "Status", value: "status" },
        { text: "Reduce Land", value: "reduce" },
        { text: "Add Land", value: "add" },
        { text: "More Details", value: "view" }
      ]
    };
  },
  methods: {
    openReduceDialog(item) {
      this.activeItem = item;
      this.reduceDialog = true;
    },
    openAddDialog(item) {
      this.activeItem = item;
      this.addDialog = true;
    },
    getData() {
      const url = "/available/farms";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then(res => {
          if (res.state) {
            self.records = res.records;
            // console.log(this.records, "Farm Records")
          }
        })
        .catch(err => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    save(data) {
     // this.loader = true;
      const self = this;
      // create option
     
      if (this.docCreate == true) {
        const url = `/available/farms`;
        this.$store
          .dispatch("post", { url, data })
          .then(res => {
            if (res.state) {
              self.loader = false;
            //  location.reload();
            } else {
              this.$refs.snackbar.show(res.ResultDesc, "red");
            }
          })
          .catch(err => {
            self.$store.commit("btnLoader", false);
            this.$refs.snackbar.show(err, "red");
          });
      }
      // end

      // update option
      if (this.docCreate == false) {
        const url = `/available/farms/edit/${data._id}`;
        this.$store
          .dispatch("put", { url, data })
          .then(res => {
            if (res.state) {
              self.loader = false;
              location.reload();
            } else {
              this.$refs.snackbar.show(res.ResultDesc, "red");
            }
          })
          .catch(err => {
            self.$store.commit("btnLoader", false);
            this.$refs.snackbar.show(err, "red");
          });
      }
      // end
    },
    addLand() {
      const data = {
        acres: this.acresModified
      };
      this.loader = true;
      const self = this;
      const url = `/available/farms/add/land/${this.activeItem._id}`;
      this.$store
        .dispatch("put", { url, data })
        .then(res => {
          if (res.state) {
            self.loader = false;
            location.reload();
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch(err => {
          self.$store.commit("btnLoader", false);
          this.$refs.snackbar.show(err, "red");
        });
    },
    reduceLand() {
      const data = {
        acres: this.acresModified
      };
      const url = `/available/farms/reduce/land/available/${this.activeItem._id}`;
      this.loader = true;
      const self = this;
      this.$store
        .dispatch("put", { url, data })
        .then(res => {
          if (res.state) {
            self.loader = false;
            location.reload();
          } else {
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch(err => {
          self.$store.commit("btnLoader", false);
          this.$refs.snackbar.show(err, "red");
        });
    },
    getCountries() {
      const self = this;
      this.$store
        .dispatch("get", `/countries`)
        .then(res => {
          if (res.state) {
            self.countries = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getRegions(id) {
      const self = this;
      this.$store
        .dispatch("get", `/regions/by/country/${id}`)
        .then(res => {
          if (res.state) {
            self.zones = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    openDetailsDialog() {
      this.docCreate = true;
      this.dataItem = {};
      this.detailsDialog = true;
    },
    openEditDialog(data) {
      this.docCreate = false;
      this.dataItem = data;
      this.detailsDialog = true;
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
        .then(res => {
          if (res.state) {
            this.loader = false;
            location.reload();
          }
        })
        .catch(err => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    }
  },
  created() {
    //  this.$store.commit("btnLoader", false);
    this.getData();
    this.getCountries();
  }
};
</script>

<style lang="scss" scoped>
</style>