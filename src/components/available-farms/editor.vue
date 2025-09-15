<template>
  <div>
    <h2 class="text--primary subtitle-2">Location Info</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.country"
          :items="countries"
          label="Country"
          item-text="name"
          item-value="_id"
          @change="getRegions(record.country)"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.zone"
          :items="zones"
          label="Zone"
          item-text="name"
          item-value="_id"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Location" outlined dense v-model="record.location"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Sub Location" outlined dense v-model="record.subLocation"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Region" outlined dense v-model="record.region"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="District" outlined dense v-model="record.district"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Ward" outlined dense v-model="record.ward"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Village" outlined dense v-model="record.village"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <v-row class="subtitle-2 text--primary">
      <v-col cols="12" md="3">
      <h2 class="subtitle-2 text--primary">Farm Size</h2>
        <v-text-field
          label="Farm Size (Acres/Hectors)"
          outlined
          dense
          v-model="record.acres"
          type="number"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <h2 class="subtitle-2 text--primary">Farm status</h2>
        <v-text-field label="Status" outlined dense v-model="record.status"></v-text-field>
      </v-col>

    </v-row>

    <v-divider class="my-4"></v-divider>

    <!-- Land Ownership -->
    <h2 class="subtitle-2 text--primary">Nature Of Ownership</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Nature of Ownership" outlined dense v-model="record.natureOfOwnership"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Right of occupancy" outlined dense v-model="record.rightOfOccupancy"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <h2 class="subtitle-2 text--primary">Farming Season</h2>
      <v-row class="subtitle-2 text--primary">

        <v-col cols="12" md="3">
          <v-text-field label="Farming Season" outlined dense v-model="record.farmingSeason"></v-text-field>
        </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <!-- Project -->
    <h2 class="subtitle-2 text--primary">Choose Your Project</h2>
    <v-col cols="12" md="3">
      <v-autocomplete
        autocomplete="off"
        outlined
        dense
        v-model="record.projectId"
        :items="projects"
        label="Projects"
        item-text="title"
        item-value="_id"
        
      ></v-autocomplete>
    </v-col>

    <v-divider class="my-4"></v-divider>

    <h2 class="subtitle-2 text--primary">Agri-inputs</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Seeds" outlined dense v-model="record.seeds"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Fertilizer" outlined dense v-model="record.fertilizer"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Pesticides" outlined dense v-model="record.pesticides"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Accessibility" outlined dense v-model="record.accessibility"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Agri-equipment</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="For Lease" outlined dense v-model="record.forLease"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="For Partnership" outlined dense v-model="record.forPartnership"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="For Sale" outlined dense v-model="record.forSale"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    
    <h2 class="subtitle-2 text--primary">Soil Test</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Soil Test" outlined dense v-model="record.soilTest"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Availability of Water</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Source" outlined dense v-model="record.waterSource"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Use" outlined dense v-model="record.waterUse"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Distance" outlined dense v-model="record.waterDistance"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Availability of Electricity</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Source" outlined dense v-model="record.electricitySource"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Use" outlined dense v-model="record.electricityUse"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Distance" outlined dense v-model="record.electricityDistance"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Availability of Transport</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Accessibility" outlined dense v-model="record.transportAccessibility"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field label="Distance" outlined dense v-model="record.transportDistance"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Availability" outlined dense v-model="record.transportAvailability"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Service Provider(eg. Safaricom)</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field
          label="Communication Provider"
          outlined
          dense
          v-model="record.serviceProvider"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Add videos and photos -->

    <v-divider class="my-4"></v-divider>
    <h2 class="subtitle-2 text--primary">Price margin</h2>
    <v-row class="subtitle-2 text--primary mb-2">
      <v-col cols="12" md="3">
        <v-text-field label="Per Acre" outlined dense v-model="record.priceMarginPerAcre"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="In Local Currency" outlined dense v-model="record.inLocalCurrency"></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field label="In USD" outlined dense v-model="record.inUsd"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="accent"
          
          @click="sendData"
          :loading="loader"
        >
          <v-icon left>mdi-content-save</v-icon>Save
        </v-btn>

        <!-- <v-btn
          color="accent"
          v-show="action == 'view'"
          @click="sendData"
          :loading="loader"
        >
          <v-icon left>mdi-content-save</v-icon> Update
        </v-btn> -->
      </v-col>
    </v-row>

    <snackbar ref="snackbar"></snackbar>
  </div>
</template>

<script>
export default {
  props: {
    docCreate: {
      type: Boolean
    },
    initial: {
      type: Object
    }
  },
  data() {
    return {
      record: {},
      createStatus: true,
      loader: false,
      countries: [],
      zones: [],
      projects:[],
      farmOptions: [
        { name: "Partnership", value: "Partnership" },
        { name: "For Lease", value: "For Lease" },
        { name: "For Sale", value: "For Sale" }
      ]
    };
  },
  watch: {
    initial: {
      handler: "setInitial",
      immediate: true
    },
    docCreate: {
      handler: "setStatus",
      immediate: true
    }
  },
  methods: {
    setInitial(val) {
      this.record = { ...val };
      if (val.country) {
        this.getRegions(val.country._id);
      }
    },
    setStatus(val) {
      this.createStatus = val;
    },
    sendData() {
      if (this.record.country == undefined || this.record.zone == undefined) {
        this.$refs.snackbar.show("Please select country and zone!", "red");
      } else {
        const details = this.record;
        // console.log(this.record)
        // this.loader = true;
        this.$emit("data", details);
      }
    },
    getCountries() {
      const self = this;
      this.$store
        .dispatch("get", `/countries`)
        .then(res => {
          if (res.state) {
            self.countries = res.records;
          } else {
            this.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getProjects() {
      const self = this;
      this.$store
        .dispatch("get", `/projects`)
        .then(res => {
          if (res.state) {
            self.projects = res.records
          } else {
            this.$refs.snackbar.show(res.msg, "red")
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red")
        })
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
    }
  },
  created() {
    this.getCountries();
    this.getProjects();
  }
};
</script>

<style lang="scss" scoped>
</style>