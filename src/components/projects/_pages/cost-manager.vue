<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>
          <span style="color: red">
            {{project.title}} - {{country.name}}
            <span
              style="color: blue"
              class="mr-4"
            >Costs Definition</span>
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary" small text to="/projects">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12" class="mt-2">
            <v-text-field class="mt-2 mb-2" label="Search" v-model="search" outlined dense></v-text-field>
            <v-data-table
              :items-per-page="100"
              :headers="headers"
              :items="regions"
              :search="search"
              :mobile-breakpoint="0"
            >
              <template v-slot:item.action="{ item }">
                <v-btn color="blue" text @click="viewZoneDialog(item)">
                  <v-icon left>mdi-cog-outline</v-icon>Manage Costs
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- start of zone dialog -->
    <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="zoneDialog">
      <v-card>
        <v-toolbar dense color="toolbarColor" dark>
          <v-toolbar-title>{{project.title}} - Costs Definition</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="zoneDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row id="docForm" justify="center">
              <v-col cols="7">
                <h2>Zone: {{zoneItem.name}}</h2>
              </v-col>
              <v-col cols="7">

                <v-data-table
                  :items-per-page="100"
                  :headers="costHeaders"
                  :items="costs"
                  :mobile-breakpoint="0"
                >
                  <template v-slot:item.action="{ item }">
                    <v-btn color="accent" text small :loading="loader" @click="rangesModal(item)">
                      <v-icon left>mdi-cog-outline</v-icon>Manage Price Ranges
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- start of zone dialog -->
    <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="rangeDialog">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Costs Definition</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="rangeDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row id="docForm" justify="center">
              <v-col cols="3">
                <h2>{{project.title}}</h2>
              </v-col>
              <v-col cols="3">
                <h2>Zone: {{zoneItem.name}}</h2>
              </v-col>
              <v-col cols="3">
                <h2 style="color: red">{{costItem.name}}</h2>
              </v-col>

              <v-col cols="9">
               <v-btn color="primary" small @click="openPriceModal"><v-icon left>mdi-plus</v-icon> New Price Range</v-btn>
              </v-col>
          
              <v-col cols="9">
                <v-data-table
                  :items-per-page="100"
                  :headers="rangeHeaders"
                  :items="priceRanges"
                  :mobile-breakpoint="0"
                >
                  <template v-slot:item.edit="{ item }">
                    <v-btn icon color="accent" small :loading="loader" @click="editRangeModal(item)">
                      <v-icon left>mdi-pencil</v-icon> 
                    </v-btn>
                  </template>

                  <template v-slot:item.delete="{ item }">
                    <v-btn icon color="red"  small :loading="loader" @click="openDeleteDialog(item)">
                      <v-icon left>mdi-delete</v-icon> 
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>

              <!-- <v-col v-if="costView == false" cols="7" class="float-right">
                <v-btn color="accent" small class="float-right" :loading="loader" @click="createDefinition">Create Definition</v-btn>
              </v-col>-->
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- start of delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Delete Record</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="deleteDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                <span>
                  Are you sure you want to delete the following record
                  ?
                </span>
              </v-col>

              <v-col cols="12" sm="12" md="4">
                {{deleteItem.min}}
              </v-col>

              <v-col cols="12" sm="12" md="4">
                {{deleteItem.max}}
              </v-col>

              <v-col cols="12" sm="12" md="4">
                {{deleteItem.acreCost}}
              </v-col>

              <v-col cols="12">
                <v-btn color="red" dark :loading="loader" @click="deleteRangeItem">Yes</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- start of  dialog -->
    <v-dialog v-model="editDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Edit Cost</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="editDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                Zone:
                <span style="color: red">{{editItem.zone && editItem.zone.name }}</span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                Item:
                <span>{{editItem.costitem && editItem.costitem.name }}</span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Cost" outlined dense v-model="editItem.acreCost"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" dark :loading="loader" @click="updateCost">Update</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->


    <!-- start of price dialog -->
    <v-dialog v-model="priceDialog" max-width="750px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>New Price Range Definition</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="priceDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="4">
                <v-text-field label="Min" outlined dense v-model="rangeItem.min"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-text-field label="Max" outlined dense v-model="rangeItem.max"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-text-field label="Price" outlined dense v-model="rangeItem.acreCost"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn v-if="rangeCreate == true" color="primary" dark :loading="loader" @click="createCost">Create Cost</v-btn>
                <v-btn v-else color="primary" dark :loading="loader" @click="updateCost">Update Cost</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- snackbar -->
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>
  
  <script>
// import Editor from "../_components/zone-editor";
import { mapGetters } from "vuex";
export default {
  components: {
    //  Editor
  },
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    search: "",
    loader: false,
    rangeDialog: false,
    rangeDeletionDialog: false,
    priceRanges: [],
    deleteItem: {},
    editItem: {},
    priceDialog: false,
    deleteDialog: false,
    editDialog: false,
    zoneDialog: false,
    trueValue: true,
    zoneCosts: [],
    marketWatches: [],
    costs: [],
    rangeItem: {},
    costItem: {},
    dataItem: {},
    zoneItem: {},
    country: {},
    project: {},
    countries: [],
    regionsData: [],
    regions: [],
    docCreate: true,
    costView: false,
    rangeCreate: true,
    headers: [
      { text: "Zone", value: "name" },
      { text: "Action", value: "action" }
    ],
    costHeaders: [
      { text: "Item", value: "name" },
      { text: "Action", value: "action" },
      { text: "Prices", value: "prices" }
    ],
    rangeHeaders: [
      { text: "Min", value: "min" },
      { text: "Max", value: "max" },
      { text: "Price", value: "acreCost" },
      { text: "Edit", value: "edit" },
      { text: "Delete", value: "delete" }
    ],
    zoneHeaders: [
      { text: "Item", value: "costitem.name" },
      { text: "Price", value: "acreCost" },
      { text: "Action", value: "edit" }
    ]
  }),
  watch: {
    "$route.params.project": {
      handler: "getData",
      immediate: true
    },
    "$route.params.country": {
      handler: "getCountry",
      immediate: true
    }
  },
  mounted() {
    this.getWatches();
  },
  methods: {
    rangesModal(item) {
      this.costItem = item;
      this.getItemCosts();
      this.rangeDialog = true;
    },
    openPriceModal() {
      this.rangeCreate = true,
      this.rangeItem = {};
      this.priceDialog = true;
    },
    editRangeModal(item) {
      this.rangeItem = item;
      this.rangeCreate = false,
      this.priceDialog = true;
    },
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    openEditDialog(item) {
      this.editItem = item;
      this.editDialog = true;
    },
    deleteWatch() {
      const url = `/market/watch/delete/zone/${this.deleteItem._id}`;
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
          this.loader = false;
          this.$refs.snackbar.show(err, "red");
        });
    },
    openZoneDialog(data) {
      this.zoneItem = data;
      this.costView = false;
      this.zoneDialog = true;
    },
    viewZoneDialog(data) {
      this.zoneItem = data;
      this.zoneCosts = data.costs;
      this.costView = true;
      this.zoneDialog = true;
    },
    getCountry(val) {
      const self = this;
      this.$store
        .dispatch("get", `/countries/${val}`)
        .then(res => {
          if (res.state) {
            self.country = res.record;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getData(val) {
      if (val) {
        const url = `/projects/${val}`;
        const self = this;
        this.$store
          .dispatch("expressGet", url)
          .then(res => {
            if (res.state) {
              self.project = res.record;
              // get costs
              const costsUrl = `/project/cost/${res.record._id}`;
              this.$store
                .dispatch("expressGet", costsUrl)
                .then(res => {
                  if (res.state) {
                    self.costs = [...self.costs, ...res.records];
                  } else {
                    self.$refs.snackbar.show(res.msg, "red");
                  }
                })
                .catch(err => {
                  this.$refs.snackbar.show(err, "red");
                });
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch(err => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    },
    getItems() {},
    getWatches() {
      const self = this;
      let country = this.$route.params.country;
      let project = this.$route.params.project;
      this.$store
        .dispatch("get", `/market/watch/find/${project}/${country}`)
        .then(res => {
          if (res.state) {
            self.marketWatches = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getItemCosts() {
      const self = this;
      let country = this.country._id;
      let project = this.project._id;
      let zone = this.zoneItem._id;
      let itemId = this.costItem._id;
      this.$store
        .dispatch("get", `/cost/definition/fetch/item/costs/${project}/${country}/${zone}/${itemId}`)
        .then(res => {
          if (res.state) {
            self.priceRanges = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    createCost() {
      const self = this;
      const data = {
        project:self.project._id,
        country: self.country._id,
        zone: self.zoneItem._id,
        costitem: self.costItem._id,
        min: self.rangeItem.min,
        max: self.rangeItem.max,
        acreCost: self.rangeItem.acreCost
      };
      const url = `/cost/definition`;

      this.loader = true;
      this.$store
        .dispatch("post", { url, data })
        .then(res => {
          if (res.state) {
            self.loader = false;
            self.getItemCosts();
            self.priceDialog = false;
            self.rangeItem = {};
          } else {
            self.loader = false;
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch(err => {
          self.loader = false;
          this.$refs.snackbar.show(err, "red");
        });
    },
    updateCost() {
      const self = this;
      const data = {
        min: self.rangeItem.min,
        max: self.rangeItem.max,
        acreCost: self.rangeItem.acreCost
      };
      const url = `/cost/definition/${self.rangeItem._id}`;

      this.loader = true;
      this.$store
        .dispatch("expressPut", { url, data })
        .then(res => {
          if (res.state) {
            self.loader = false;
            self.getItemCosts();
            self.priceDialog = false;
            self.rangeItem = {};
           // location.reload();
          } else {
            self.loader = false;
            this.$refs.snackbar.show(res.ResultDesc, "red");
          }
        })
        .catch(err => {
          self.loader = false;
          this.$refs.snackbar.show(err, "red");
        });
    },
    deleteRangeItem() {
      const self = this;
      const url = `/cost/definition/${this.deleteItem._id}`;
      this.loader = true;
      this.$store
        .dispatch("remove", url)
        .then((res) => {
          if (res.state) {
            this.loader = false;
            self.getItemCosts();
            self.deleteDialog = false;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    getZonalCosts() {
      const self = this;
      let country = this.$route.params.country;
      let project = this.$route.params.project;
      this.$store
        .dispatch("get", `/regions/zonal/${project}/${country}`)
        .then(res => {
          if (res.state) {
            self.regions = res.zonesArray;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    saveWatch(data) {
      // create record
      if (this.docCreate == true) {
        data.country = this.country._id;
        data.project = this.project._id;
        const url = `/market/watch`;
        // const self = this;
        this.$store
          .dispatch("post", { url, data })
          .then(res => {
            if (res.state) {
              location.reload();
            } else {
              this.$refs.snackbar.show(res.ResultDesc, "red");
            }
          })
          .catch(err => {
            this.$refs.snackbar.show(err, "red");
          });
      }

      // update record
      if (this.docCreate == false) {
        data.country = this.country._id;
        data.project = this.project._id;
        const url = `/market/watch/edit/${data._id}`;
        // const self = this;
        this.$store
          .dispatch("put", { url, data })
          .then(res => {
            if (res.state) {
              location.reload();
            } else {
              this.$refs.snackbar.show(res.ResultDesc, "red");
            }
          })
          .catch(err => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    }
  },
  created() {
    this.getWatches();
    this.getZonalCosts();
  }
};
</script>