<template>
    <v-container fluid>
      <v-card>
        <v-toolbar color="toolbarColor" dense dark>
          <v-toolbar-title>Farm applications</v-toolbar-title>
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
  
              <v-card-text>
                <v-container>
                  <v-row justify="center" class="subtitle-2 text--primary">
                    <!-- generate excel -->
  
                    <v-col cols="10" v-if="activeItem">
                      <v-row class="mb-4">
                        <v-col cols="12">
                          <h2>User Contacts</h2>
                        </v-col>
                        <v-col cols="12" md="8">
                          User Names: {{ activeItem.name &&  activeItem.name }}
                          <br />
                          
                        </v-col>
                      </v-row>
  
                      <v-divider></v-divider>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
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
          { text: "User Name", value: "name" },
          { text: "Phone number", value: "phoneNumber" },
          { text: "User Email", value: "contactEmail" },
          { text: "Acres", value: "acres" },
          { text: "Farm", value: "farm.serialNo" },
        ],
      };
    },
    methods: {
      openDetailsDialog(item) {
        this.activeItem = item;
        this.detailsDialog = true;
      },
      getData() {
        const url = "/farmlands-application";
        const self = this;
        this.$store
          .dispatch("expressGet", url)
          .then((res) => {
            if (res.state) {
              self.records = res.records;
              console.log(self.records, "farm applications records")
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
        const url = `/farm-applications/${this.deleteItem._id}`;
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