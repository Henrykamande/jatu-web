<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Registered Farms</v-toolbar-title>
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
                <v-btn color="accent" text @click="openDetailsDialog(item)">
                  <v-icon left>mdi-eye</v-icon>More Details
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
                        <h2>Farm Owner Details</h2>
                      </v-col>
                      <v-col cols="12" md="8">
                        Surname: {{activeItem.owner && activeItem.owner.sirName}}
                        <br />
                        First Name: {{activeItem.owner && activeItem.owner.firstName}}
                        <br />
                        Age: {{activeItem.owner && activeItem.owner.age}}
                        <br />
                        Gender: {{activeItem.owner && activeItem.owner.gender}}
                      </v-col>

                      <v-col cols="12" md="4">
                        Country: {{activeItem.owner && activeItem.owner.selectedCountry}}
                        <br />
                        Zone: {{activeItem.owner && activeItem.owner.selectedZone}}
                        <br />
                        Location: {{activeItem.owner && activeItem.owner.location}}
                        <br />
                        Sub location: {{activeItem.owner && activeItem.owner.subLocation}}
                      </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row class="mt-4">
                      <v-col cols="12">
                        <h2>Farm Details</h2>
                      </v-col>
                      <v-col cols="12" md="4">
                        Farm Size: {{activeItem.farmSize}}
                        <br />
                        Zone: {{activeItem.selectedZone}}
                        <br />
                        Location: {{activeItem.location}}
                        <br />
                        Sub Location: {{activeItem.subLocation}}
                        <br />
                        Contract Type: {{activeItem.contract}}
                        <br />
                        Tenure: {{activeItem.tenure}}
                        <br />
                      </v-col>

                      <v-col cols="12" md="4">
                        Ownership: {{activeItem.ownership}}
                        <br />
                        Crops Grown: {{activeItem.crops}}
                        <br />
                        Water for irrigation: {{activeItem.irrigation}}
                        <br />
                        Water for domestic use: {{activeItem.domesticWater}}
                        <br />
                      </v-col>

                      <v-col cols="12" md="4">
                        Electricity Available: {{activeItem.electricity}}
                        <br />
                        Season Start: {{activeItem.seasonStart}}
                        <br />
                        Season End: {{activeItem.seasonEnd}}
                        <br />
                        Distance: {{activeItem.distance}}
                        <br />
                        Short Video: {{activeItem.video}}
                        <br />
                      </v-col>
                    </v-row>
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
    ...mapGetters(["serverUrl"])
  },
  data() {
    return {
      search: null,
      loader: false,
      detailsDialog: false,
      deleteDialog: false,
      deleteItem: {},
      activeItem: {},
      records: [],
      headers: [
        { text: "Serial No.", value: "owner.serialNo" },
        { text: "Sir Name", value: "owner.sirName" },
        { text: "First Name", value: "owner.firstName" },
        { text: "Country", value: "selectedCountry" },
        { text: "Zone", value: "selectedZone" },
        { text: "Farm Size", value: "farmSize" },
        { text: "Location", value: "location" },
        { text: "Sub Location", value: "subLocation" },
        { text: "Sub Location", value: "subLocation" },
        { text: "Action", value: "action" }
      ]
    };
  },
  methods: {
    getData() {
      const url = "/farms/register";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then(res => {
          console.log(res, "res");
          if (res.state) {
            self.records = res.records;
          }
        })
        .catch(err => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    openDetailsDialog(item) {
      this.activeItem = item;
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
  }
};
</script>

<style lang="scss" scoped>
</style>