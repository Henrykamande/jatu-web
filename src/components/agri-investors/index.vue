<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Agri Investors</v-toolbar-title>
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
                        <h2>Investor Details</h2>
                      </v-col>
                      <v-col cols="12" md="8">
                        Surname: {{activeItem.investor && activeItem.investor.sirName}}
                        <br />
                        First Name: {{activeItem.investor && activeItem.investor.firstName}}
                        <br />
                        Age: {{activeItem.investor && activeItem.investor.age}}
                        <br />
                        Gender: {{activeItem.investor && activeItem.investor.gender}}<br>
                        Phone: {{activeItem.investor && activeItem.investor.phone}}<br>
                      </v-col>

                      <v-col cols="12" md="4">
                        Email: {{activeItem.investor && activeItem.investor.email}}<br>
                        Country: {{activeItem.investor && activeItem.investor.selectedCountry}}
                        <br />
                        Zone: {{activeItem.investor && activeItem.investor.selectedZone}}
                        <br />
                        Location: {{activeItem.investor && activeItem.investor.location}}
                        <br />
                        Sub location: {{activeItem.investor && activeItem.investor.subLocation}}
                      </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row class="mt-4">
                      <v-col cols="12">
                        <h2>Requested Farm Details</h2>
                      </v-col>
                      <v-col cols="12" md="4">
                        Farm Size: {{activeItem.farmSize}}
                        <br />
                        Zone: {{activeItem.selectedZone}}
                        <br />
                        Contract Type: {{activeItem.contract}}
                        <br />
                      </v-col>

                      <v-col cols="12" md="4">
                        Tenure: {{activeItem.tenure}}<br>
                        Water for irrigation: {{activeItem.irrigation}}
                        <br />
                        Water for domestic use: {{activeItem.domesticWater}}
                        <br />
                      </v-col>

                      <v-col cols="12" md="4">
                        Electricity Available: {{activeItem.electricity}}
                        <br />
                        Preferred Project: {{activeItem.selectedProject}}
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
        { text: "Serial No", value: "investor.serialNo" },
        { text: "Sir Name", value: "investor.sirName" },
        { text: "First Name", value: "investor.firstName" },
        { text: "Country", value: "selectedCountry" },
        { text: "Zone", value: "selectedZone" },
        { text: "Req. Farm Size", value: "farmSize" },
        { text: "Location", value: "investor.location" },
        { text: "Sub Location", value: "investor.subLocation" },
        { text: "Contract Type", value: "contract" },
        { text: "Action", value: "action" },
      ],
    };
  },
  methods: {
    openDetailsDialog(item) {
      this.activeItem = item;
      this.detailsDialog = true;
    },
    getData() {
      const url = "/requested/farms";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          console.log(res, 'res');
          if (res.state) {
            self.records = res.records;
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
  //  this.$store.commit("btnLoader", false);
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>