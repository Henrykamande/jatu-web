<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="secondary" flat dense>
        <v-toolbar-title>
          <span style="color: red">
            {{project.title}} - {{country.name}}
            <span style="color: blue" class="mr-4">Seasons Manager</span>
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn color="primary" small text :to="`/seasons/${project.url}`">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row class="docForm justify-center">
          <v-col cols="12" md="8" class="mt-2">
            <!-- <v-btn small color="accent" @click.native="zoneDialog = true">
              <v-icon left>mdi-plus</v-icon>New Zone Season
            </v-btn> -->
            <v-text-field class="mt-2 mb-2" label="Search" v-model="search" outlined dense></v-text-field>
            <v-data-table
              :items-per-page="400"
              :headers="headers"
              :items="zonesGrown"
              :search="search"
              :mobile-breakpoint="0"
            >
            <!-- action template -->
            <template v-slot:item.name="{ item }">
              <div style="width: 150px">{{item.name}}</div>
            </template>
            <!-- end -->

              <!-- action template -->
              <template v-slot:item.start="{ item }">
                <v-text-field v-model="item.start" outlined dense ></v-text-field>
              </template>
              <!-- end -->

                <!-- action template -->
                <template v-slot:item.end="{ item }">
                <v-text-field v-model="item.end" outlined dense></v-text-field>
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

          <v-col cols="12" md="8" class="mt-2">
            <v-btn color="accent" class="float-right" @click="saveSeasons" :loading="loader">Save Seasons</v-btn>
            </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- start of zone dialog -->
    <!-- <v-dialog v-model="zoneDialog" max-width="800px">
      <v-card>
        <v-toolbar dense color="toolbarColor" dark>
          <v-toolbar-title>New Zone Season</v-toolbar-title>
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
    </v-dialog> -->
    <!-- end of dialog -->

    <!-- start of delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Delete Zone Watch</v-toolbar-title>
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
                  Are you sure you want to delete the following zone season
                  ?
                </span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                Zone:
                <span style="color: red">{{deleteItem.zone && deleteItem.zone.name }}</span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <span>{{deleteItem && deleteItem.start }} - {{deleteItem && deleteItem.end }}</span>
              </v-col>

              <v-col cols="12">
                <v-btn color="red" dark :loading="loader" @click="deleteSeason">Yes</v-btn>
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
// import Editor from "../_components/season-editor";
import { mapGetters } from "vuex";
export default {
  components: {
    // Editor
  },
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    search: "",
    loader: false,
    docCreate: true,
    deleteItem: {},
    deleteDialog: false,
    zoneDialog: false,
    zoneStatus: false,
    zonesGrown: [],
    trueValue: true,
    seasons: [],
    dataItem: {},
    country: {},
    project: {},
    countries: [],
    regionsData: [],
    regions: [],
    headers: [
      { text: "Zone", value: "name" },
      { text: "Start", value: "start" },
      { text: "End", value: "end" },
      // { text: "Action", value: "action" },
      // { text: "Delete", value: "delete" }
    ]
  }),
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
  mounted() {
    this.getSeasons();
  },
  methods: {
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    openSeasonDialog(data) {
      this.dataItem = data;
      this.docCreate = false;
      this.zoneDialog = true;
    },
    deleteSeason() {
      const url = `/seasons/delete/${this.deleteItem._id}`;
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
    getCountry(val) {
      const self = this;
      this.$store
        .dispatch("get", `/countries/${val}`)
        .then(res => {
          if (res.state) {
            self.country = res.record;
            self.getRegions(res.record._id);
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getRegions(id) {
      const self = this;
      this.$store
        .dispatch("get", `/regions/by/country/${id}`)
        .then(res => {
          if (res.state) {
            self.regions = res.records;
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
    getSeasons() {
      const self = this;
      let country = this.$route.params.country;
      let project = this.$route.params.project;
      this.$store
        .dispatch("get", `/seasons/query/by/${country}/${project}`)
        .then(res => {
          if (res.state) {
              self.zonesGrown = res.zones;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    // getWatches() {
    //   const self = this;
    //   let country = this.$route.params.country;
    //   let project = this.$route.params.project;
    //   this.$store
    //     .dispatch("get", `/seasons/find/${project}/${country}`)
    //     .then(res => {
    //       if (res.state) {
    //         self.seasons = res.records;
    //       } else {
    //         this.$refs.snackbar.show(res.msg, "red");
    //       }
    //     })
    //     .catch(err => {
    //       this.$refs.snackbar.show(err, "red");
    //     });
    // },
    saveSeasons() {
      // create
        let data = {};
        data.country = this.country._id;
        data.project = this.project._id;
        data.zonesGrown = this.zonesGrown;

        const url = `/seasons`;
        this.loader = true;
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
      
      // update

      // if (this.docCreate == false) {
      //   data.country = this.country._id;
      //   data.project = this.project._id;
      //   const url = `/seasons/edit/${data._id}`;
      //   // const self = this;
      //   this.$store
      //     .dispatch("put", { url, data })
      //     .then(res => {
      //       if (res.state) {
      //         location.reload();
      //       } else {
      //         this.$refs.snackbar.show(res.ResultDesc, "red");
      //       }
      //     })
      //     .catch(err => {
      //       this.$refs.snackbar.show(err, "red");
      //     });
      // }
    }
  },
  created() {
    this.getSeasons();
  }
};
</script>