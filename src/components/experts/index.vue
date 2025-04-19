<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Experts</v-toolbar-title>
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
                  </v-btn>
                  More Details
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
                          <h2>Expert Details</h2>
                        </v-col>
                        <v-col cols="12" md="4">
                          Surname: {{activeItem.sirName}}<br>
                          First Name: {{activeItem.firstName}}<br>
                          Age: {{activeItem.age}}<br>
                          Gender: {{activeItem.gender}}<br>
                          Country: {{activeItem.selectedCountry}}<br>
                        </v-col>

                        <v-col cols="12" md="4">
                          Zone: {{activeItem.selectedZone}}<br>
                          Location: {{activeItem.location}}<br>
                          Education: {{activeItem.education}}<br>
                          Profession: {{activeItem.profession}}<br>
                        </v-col>

                        <v-col cols="12" md="4">
                          Crops: {{activeItem.crops}}<br>
                          Preferred Place of work: {{activeItem.workPlace}}<br>
                          Postal Address: {{activeItem.postalAddress}}<br>
                          Email: {{activeItem.email}}<br>
                          Phone: {{activeItem.phone}}
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
      deleteItem: {},
      activeItem: {},
      records: [],
      headers: [
        { text: "Serial No", value: "serialNo" },
        { text: "Sir Name", value: "sirName" },
        { text: "First Name", value: "firstName" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Country", value: "selectedCountry" },
        { text: "Zone", value: "selectedZone" },
        { text: "Education", value: "education" },
        { text: "Profession", value: "profession" },
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
      const url = "/experts";
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