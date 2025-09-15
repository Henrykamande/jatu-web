<template>
  
    <v-row dense>
      <v-col cols="8">
        <v-btn color="primary" small @click.native="watchDialog = true"><v-icon left>mdi-plus</v-icon>Add Record</v-btn>
      </v-col>

      <v-col cols="4">
        <DatePicker @date="setDate" :myDate="date" :title="`Date`" ref="dateRef"></DatePicker>
      </v-col>
     
      <v-col cols="12">
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
                <v-btn color="red" text @click="deleteItem(item)" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <!-- end of deletion -->
            </v-data-table>
      </v-col>
     
      <v-col cols="12">
        <v-btn
          v-if="docCreate == true"
          color="accent"
          @click="sendData"
          :loading="loader"
        >
          <v-icon left>mdi-content-save</v-icon>Save Data
        </v-btn>

        <v-btn v-else color="accent" @click="sendData" :loading="loader">
          <v-icon left>mdi-content-save</v-icon>Update
        </v-btn>
      </v-col>


          <!-- start of delete dialog -->
    <v-dialog v-model="watchDialog" max-width="750px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>New International Market Watch</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="watchDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Zone" outlined dense v-model="watchRecord.zone"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Unit" outlined dense v-model="watchRecord.unit"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Price" outlined dense v-model="watchRecord.price"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="accent" dark @click="addWatch">Add</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->
    </v-row>

</template>


<script>
export default {
  props: {
    initial: {
      type: Object,
      required: true,
    },
    docCreate: {
      type: Boolean,
    },
    regions: {
      type: Array
    },
  },
  data: () => ({
    record: {},
    search: "",
    loader: false,
    watchDialog: false,
    watchRecord: {},
    date: new Date().toISOString().substr(0, 10),
    marketWatches: [],
    headers: [
      { text: "Zone", value: "zone" },
      { text: "Unit", value: "unit" },
      { text: "Price", value: "price" },
      { text: "Delete", value: "delete" }
    ]
  }),
  watch: {
    initial: {
      handler: "init",
      immediate: true,
    },
  },
  methods: {
    init(val) {
      this.record = { ...val };
    },
    addWatch() {
      const record = this.watchRecord;
      this.marketWatches.push(record);
      this.watchRecord = {};
      this.watchDialog = false;
    },
    deleteItem(data) {
      const pos = this.marketWatches.indexOf(data);
      if(pos === -1) {
        return;
      }

      this.marketWatches.splice(pos, 1);
    },
    setDate(date) {
      this.date = date;
    },
    sendData() {
      this.loader = true;
      const data = {
        rows: this.marketWatches,
        date: this.date
      }
      this.$emit("data", data);
    }
  },
};
</script>