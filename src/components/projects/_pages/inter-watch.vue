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
            >International Market Watch</span>
          </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary" small text to="/projects">
          <v-icon left dark>mdi-keyboard-backspace</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>

          <v-col cols="12" md="8">
            <v-btn small color="accent" @click.native="zoneDialog = true">
              <v-icon left>mdi-plus</v-icon>New Day Record
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
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
    <v-dialog
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="zoneDialog"
      max-width="800px"
    >
      <v-card>
        <v-toolbar dense color="toolbarColor" dark>
          <v-toolbar-title>International Zone Watch</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="zoneDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row justify="center" class="mt-4">
              <v-col cols="8">
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
                  Are you sure you want to delete the following zone watch
                  ?
                </span>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                Zone:
                <span style="color: red">{{deleteItem.watchregion }}</span>
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
import Editor from "../_components/international-editor";
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
      { text: "Zone", value: "watchregion" },
      { text: "Unit", value: "unit" },
      { text: "Price", value: "price" },
      { text: "Action", value: "action" },
      { text: "Delete", value: "delete" }
    ]
  }),
  mounted() {
    this.getWatches();
  },
  watch: {
    "$route.params.url": {
      handler: "getProject",
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
    getWatches() {
    const self = this;
    const _id = this.project._id;
    if(_id) {
      const url = `/international/market/watch/query/by/date/${_id}/${this.date}`;

      this.$store
        .dispatch("get",url)
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
    }

    },
    deleteWatch() {
      const url = `/international/market/watch/delete/zone/${this.deleteItem._id}`;
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
      this.dataItem = data;
      this.docCreate = false;
      this.zoneDialog = true;
    },
    getProject(val) {
      const self = this;
      this.$store
        .dispatch("get", `/projects/${val}`)
        .then(res => {
          if (res.state) {
            self.project = res.record;
            self.getWatches(res.record._id);
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
        data.project = this.project._id;
        const url = `/international/market/watch`;
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
      

      // update record
      // if (this.docCreate == false) {
      //   data.project = this.project._id;
      //   const url = `/international/market/watch/edit/${data._id}`;
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
    this.getWatches();
  }
};
</script>