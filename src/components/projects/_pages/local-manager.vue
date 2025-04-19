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
            >Local Market Watch</span>
            <v-spacer></v-spacer>
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary" small text to="/projects">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <v-btn small color="accent" @click.native="zoneDialog = true">
              <v-icon left>mdi-plus</v-icon>New Local Mkt Watch
            </v-btn>
          </v-col>
          <v-col cols="4">
            <DatePicker @date="setDate" :myDate="date" :title="`Date`" ref="dateRef"></DatePicker>
          </v-col>
          <v-col cols="12" md="12" class="mt-2">
            <v-text-field class="mt-2 mb-2" label="Search" v-model="search" outlined dense></v-text-field>
            <v-data-table
              :items-per-page="100"
              :headers="headers"
              :items="marketWatches"
              :search="search"
              :mobile-breakpoint="0"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="accent" text @click="openZoneDialog(item)" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <!-- end -->

              <!-- delete template -->
              <template v-slot:item.delete="{ item }">
                <v-btn color="red" text @click="openDeleteDialog(item)" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <!-- end of deletion -->
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- start of zone dialog -->
    <v-dialog v-model="zoneDialog" max-width="800px">
      <v-card>
        <v-toolbar dense color="toolbarColor" dark>
          <v-toolbar-title>Market Watch Definition</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="zoneDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <editor
                  :initial="dataItem"
                  :docCreate="trueValue"
                  :regions="regions"
                  @data="saveWatch"
                ></editor>
              </v-col>
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
          <v-toolbar-title>Delete Zone Units</v-toolbar-title>
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
                  Are you sure you want to delete the following zone watch
                  ?
                </span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                Zone:
                <span style="color: red">{{deleteItem.zone && deleteItem.zone.name }}</span>
              </v-col>

              <v-col cols="12">
                <v-btn color="red" dark :loading="loader" @click="deleteWatch">Yes</v-btn>
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
import Editor from "../_components/local-editor";
import { mapGetters } from "vuex";
export default {
  components: {
    Editor
  },
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    search: "",
    loader: false,
    deleteItem: {},
    deleteDialog: false,
    zoneDialog: false,
    trueValue: true,
    marketWatches: [],
    dataItem: {},
    country: {},
    project: {},
    countries: [],
    regionsData: [],
    regions: [],
    docCreate: true,
    date: new Date().toISOString().substr(0, 10),
    headers: [
      { text: "Zone", value: "zone.name" },
      { text: "Price", value: "price" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action" }
    ]
  }),
  mounted() {
    this.getRegions();
    this.getWatches();
  },
  watch: {
    "$route.params.project": {
      handler: "getProject",
      immediate: true
    },
    "$route.params.country": {
      handler: "getCountry",
      immediate: true
    }
  },
  methods: {
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    setDate(date) {
      this.date = date;
      this.getWatches();
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
        console.log(data, 'data');
    //   this.dataItem = data;
    //   this.docCreate = false;
    //   this.zoneDialog = true;
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
    getProject(val) {
      const self = this;
      this.$store
        .dispatch("get", `/projects/${val}`)
        .then(res => {
          if (res.state) {
            self.project = res.record;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getRegions() {
      const self = this;
      let country = this.$route.params.country;
      let project = this.$route.params.project;
      this.$store
        .dispatch("get", `/project/zones/query/data/url/${country}/${project}`)
        .then(res => {
          if (res.state) {
            self.regions = res.zones;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getWatches() {
      const self = this;
      if (this.date) {
        let country = this.$route.params.country;
        let project = this.$route.params.project;
        let data = {
          country: country,
          project: project,
          date: this.date
        };

        let url = `/market/watch/find/by/date`;
        this.$store
          .dispatch("post", { url, data })
          .then(res => {
            console.log(res, 'watchaes')
            if (res.state) {
              self.marketWatches = res.records;
            } else {
              this.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch(err => {
            this.$refs.snackbar.show(err, "red");
          });
      }
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
    this.getRegions();
    this.getWatches();
  }
};
</script>