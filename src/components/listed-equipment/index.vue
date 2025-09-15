<template>
    <v-container fluid>
      <v-card>
        <v-toolbar color="toolbarColor" dense dark>
          <v-toolbar-title>Listed Equipments</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row dense>
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
                 <template v-slot:item.action="{ item }">
                  <v-btn
                    color="accent"
                    text
                    @click="openDetailsDialog(item)"
                    ><v-icon left>mdi-eye</v-icon> More Details
                  </v-btn>
                </template>
                <!-- end -->
              </v-data-table>
            </v-col>
            <!-- end of col -->
          </v-row>
  
  
          <v-dialog
            v-model="detailsDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
              <v-toolbar dark color="primary" dense>
                <v-toolbar-title>
                  <v-btn icon dark @click.native="detailsDialog = false">
                    <v-icon dark>mdi-keyboard-backspace</v-icon>
                  </v-btn>More Details
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click.native="detailsDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
            </v-card>
          </v-dialog>
  
  
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
        loader: false,
        deleteDialog: false,
        detailsDialog: false,
        activeItem: {},
        deleteItem: {},
        records: [],
        headers: [
          { text: "Machine Type", value: "machineType" },
          { text: "Make / Manufacture", value: "make" },
          { text: "Model", value: "model" },
          { text: "Capacity", value: "capacity" },
          { text: "Drive Type", value: "driveType" },
          { text: "Main Use", value: "mainUse" },
          { text: "Coutry of location", value: "country" },
        ],
      };
    },
    methods: {
      openDetailsDialog(item) {
        this.activeItem = item;
        this.detailsDialog = true;
      },
      getData() {
        const url = "/list-equipment";
        const self = this;
        this.$store
          .dispatch("expressGet", url)
          .then((res) => {
            if (res.state) {
              self.records = res.records;
              console.log(self.records, "equipment records")
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
        const url = `/list-equipment/${this.deleteItem._id}`;
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
    //  this.$store.commit("btnLoader", false);
      this.getData();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>