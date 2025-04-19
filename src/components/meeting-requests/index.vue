<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Meeting Requests</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <!-- start of col -->
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="meetingRequests"
              :search="search"
            >
            
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
    totalAcresCost() {
      let total = 0;
      if (typeof this.costs != "undefined" && this.costs.length > 0) {
        return this.costs
          .map((item) => {
            const amount = item.acreCost;
            total = +amount;
            return total;
          })
          .reduce((val, a) => {
            return val + a;
          });
      } else {
        return total;
      }
    },
    totalPartnerCost() {
      let total = 0;
      let farmAcres = 1;
      farmAcres = this.acres;
      if (typeof this.costs != "undefined" && this.costs.length > 0) {
        return this.costs
          .map((item) => {
            const amount = item.acreCost * farmAcres;
            total = +amount;
            return total;
          })
          .reduce((val, a) => {
            return val + a;
          });
      } else {
        return total;
      }
    },
  },
  data() {
    return {
      search: null,
      costsDialog: false,
      costs: [],
      acres: null,
      loader: false,
      deleteItem: {},
      meetingRequests: [],
      headers: [
        { text: "Country", value: "meetingCountry" },
        { text: "participant", value: "participant" },
        { text: "Date", value: "meetingDate" },
        { text: "Time", value: "meetingTime" },
        { text: "Name", value: "meetingFullName" },
        { text: "Phone No", value: "meetingPhone" },
        { text: "Email", value: "meetingEmail" },
        { text: "Agenda", value: "meetingAgenda" },
      ],
      costHeaders: [
        { text: "Name", value: "name" },
        { text: "Acres/Cattle", value: "acres" },
        { text: "Cost Per Acre/ Cattle", value: "acreCost" },
        { text: "Partner Cost", value: "partnerCost" },
      ],
    };
  },
  methods: {
    getData() {
      const url = "/meetings/request";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.meetingRequests = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    openDialog(item) {
      this.costs = item.costs;
      this.acres = item.acres;
      this.costsDialog = true;
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
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>