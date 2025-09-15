<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>
          <span style="color: red">{{dataItem.title}}</span> - Zones
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" small text to="/projects">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field class="mt-2 mb-2" label="Search" v-model="search" outlined dense></v-text-field>
            <v-data-table
              :items-per-page="100"
              :headers="headers"
              :items="countries"
              :search="search"
              :mobile-breakpoint="0"
            >
              <template v-slot:item.action="{ item }">
                <v-btn small color="blue" text @click="openZoneDialog(item)">
                  <v-icon left>mdi-cog-outline</v-icon>Manage Zones
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
          <v-toolbar-title>{{dataItem.title}} ZONES</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="zoneDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row id="docForm" justify="center">
              <v-col cols="7">
                <h2>Country: {{zoneItem.name}}</h2>
              </v-col>

              <v-col cols="7">
                <v-autocomplete
                  autocomplete="off"
                  outlined
                  dense
                  v-model="zonesGrown"
                  :items="zones"
                  label="Zones Grown"
                  item-text="name"
                  item-value="_id"
                  chips
                  small-chips
                  multiple
                ></v-autocomplete>
              </v-col>

              <v-col cols="7" class="float-right">
                <v-btn
                  color="accent"
                  small
                  class="float-right"
                  :loading="loader"
                  @click="updateZones"
                >Update Zones</v-btn>
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    search: "",
    loader: false,
    zoneDialog: false,
    dataItem: {},
    zoneItem: {},
    countries: [],
    zones: [],
    zonesGrown: [],
    zoneStatus: false,
    regions: [],
    docCreate: false,
    headers: [
      { text: "Name", value: "name" },
      { text: "Action", value: "action" }
    ]
  }),
  watch: {
    "$route.params.url": {
      handler: "getProject",
      immediate: true
    }
  },
  methods: {
    openZoneDialog(data) {
      this.zoneItem = data;
      this.zoneDialog = true;
      this.getRegions(data._id);
      this.getZonesGrown(data._id);
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
    getZonesGrown(id) {
      const self = this;
      this.$store
        .dispatch("get", `/project/zones/find/${id}/${self.dataItem._id}`)
        .then(res => {
          if (res.state) {
            if (res.record != null) {
              self.zonesGrown = res.record.zonesGrown;
              self.zoneStatus = true;
            }

            if (res.record == null) {
              self.zoneStatus = false;
            }
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getProject(val) {
      const self = this;
      this.$store
        .dispatch("get", `/projects/${val}`)
        .then(res => {
          if (res.state) {
            self.dataItem = res.record;
            self.countries = res.projectCountries;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    updateZones() {
      if (this.zoneStatus == false) {
        const self = this;
        const data = {
          country: self.zoneItem._id,
          project: self.dataItem._id,
          zonesGrown: self.zonesGrown
        };
        const url = `/project/zones`;
        self.loader = true;
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

      if (this.zoneStatus == true) {
        const self = this;
        const data = {
          country: self.zoneItem._id,
          project: self.dataItem._id,
          zonesGrown: self.zonesGrown
        };
        const url = `/project/zones/edit`;
        self.loader = true;
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
  }
};
</script>