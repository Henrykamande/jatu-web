<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Products</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-btn color="accent" text to="/new/product">
              <v-icon>mdi-plus</v-icon>Product
            </v-btn>
            <v-text-field v-model="search" label="Search"></v-text-field>
          </v-col>

          <!-- start of col -->
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="projectRequests"
              :search="search"
            >
              <!-- name template -->
              <template v-slot:item.name="{ item }">
                <v-btn
                  color="primary"
                  text
                  :to="`/product/details/${item.url}`"
                >
                  {{ item.name }}
                </v-btn>
              </template>
              <!-- end -->

              <template v-slot:item.action="{ item }">
                <v-btn color="red" text @click="openDialog(item)" icon
                  ><v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
          <!-- end of col -->
        </v-row>

        <!-- start of dialog -->
        <v-dialog v-model="costsDialog" max-width="750px">
          <v-card>
            <v-toolbar dense color="accent" dark>
              <v-toolbar-title>Costs Details</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click.native="costsDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container fluid>
                <v-row dense class="subtitle-2 text--primary">
                  <v-col cols="12">
                    Acres: {{ acres }}<br />
                    Total Cost/ 1 unit: {{ totalAcresCost.toLocaleString()
                    }}<br />
                    Partner Request: {{ totalPartnerCost.toLocaleString() }}
                  </v-col>

                  <v-col cols="12" sm="12" md="12">
                    <v-data-table
                      :items-per-page="2000"
                      :headers="costHeaders"
                      :items="costs"
                      :search="search"
                    >
                      <!-- name template -->
                      <template v-slot:item.acres="{ item }">
                        {{ acres }}
                      </template>
                      <!-- end -->

                      <!-- name template -->
                      <template v-slot:item.partnerCost="{ item }">
                        {{
                          (
                            parseInt(acres) * parseInt(item.acreCost)
                          ).toLocaleString()
                        }}
                      </template>
                      <!-- end -->
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- end of dialog -->
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
      projectRequests: [],
      headers: [
        { text: "Sir Name", value: "sirName" },
        { text: "Other Names", value: "otherNames" },
        { text: "Phone No", value: "phoneNo" },
        { text: "Country", value: "country" },
        { text: "Project", value: "project.title" },
        { text: "No of Units", value: "acres" },
        { text: "Action", value: "action" },
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
      const url = "/project/request";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          console.log(res, "requests res");
          if (res.state) {
            self.projectRequests = res.records;
            console.log(res.records)
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