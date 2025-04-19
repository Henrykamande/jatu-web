<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Upcoming Events</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-btn color="accent" small @click.native="eventsDialog = true"><v-icon left>mdi-plus</v-icon>  New event</v-btn>
          </v-col>
          <!-- start of col -->
          <v-col cols="12">
            <v-text-field label="Search" v-model="search"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="upcomingEvents"
              :search="search"
            >
            </v-data-table>
          </v-col>
          <!-- end of col -->
        </v-row>

          <!-- start of dialog -->
          <v-dialog v-model="eventsDialog" max-width="850px">
          <v-card>
            <v-toolbar dense color="accent" dark>
              <v-toolbar-title>Create An Event</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click.native="eventsDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <v-container fluid>
                <v-row dense class="subtitle-2 text--primary">
                 <v-col cols="12" md="6">
                  <DatePicker  @date="setDate" :myDate="date" :title="`Date`" ref="dateRef"></DatePicker>
                 </v-col>
                 <v-col cols="12" md="6">
                  <v-text-field label="meeting Time" outlined dense v-model="eventItem.meetingTime"></v-text-field>
                 </v-col>
                 <v-col cols="12" md="6">
                  <v-text-field label="Time Zone" outlined dense v-model="eventItem.timeZone"></v-text-field>
                 </v-col>
                 <v-col cols="12" md="6">
                  <v-text-field label="Channel" outlined dense v-model="eventItem.meetingChannel"></v-text-field>
                 </v-col>
                 <v-col cols="12" md="12">
                  <v-textarea label="Venue" outlined rows="2" v-model="eventItem.meetingVenue"></v-textarea>
                 </v-col>
                 <v-col cols="12" md="12">
                  <v-text-field label="Agenda" outlined dense v-model="eventItem.meetingAgenda"></v-text-field>
                 </v-col>
                 <v-col cols="12" md="12">
                  <v-textarea label="More Details" outlined rows="3" v-model="eventItem.details"></v-textarea>
                 </v-col>
                 <v-col cols="12" md="12">
                  <v-btn color="accent" @click="save" :loader="loader"> <v-icon left>mdi-content-save</v-icon>Save</v-btn>
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
      search: "",
      eventsDialog: false,
      costs: [],
      acres: null,
      loader: false,
      deleteItem: {},
      eventItem: {},
      upcomingEvents: [],
      date: null,
      headers: [
        { text: "Serial No", value: "serialNo" },
        { text: "Date", value: "meetingDate" },
        { text: "Time", value: "meetingTime" },
        { text: "Channel", value: "meetingChannel" },
        { text: "Venue", value: "meetingVenue" },
        { text: "Agenda", value: "meetingAgenda" },
        { text: "More Details", value: "details" }
      ]
    };
  },
  methods: {
    setDate(date) {
      this.date = date;
    },
    save() {
      const data = this.eventItem;
      data.meetingDate = this.date;
      const url = "/upcoming/events";
      const self = this;
      this.loader = true;
      this.$store
        .dispatch("expressPost", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
            // self.$router.push("/services");
          } else {
            self.$refs.snackbar.show(res.msg, "red");
          }
        })
        .finally(() => {
          location.reload();
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getData() {
      const url = "/upcoming/events";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          console.log(res, 'upcoming res');
          if (res.state) {
            self.upcomingEvents = res.records;
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