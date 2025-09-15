<template>
    <v-container fluid>
      <v-card>
        <v-toolbar color="toolbarColor" dense dark>
          <v-toolbar-title>Rent Equipment Applications</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field v-model="search" label="Search"></v-text-field>
            </v-col>
            <!-- start of col -->
            <v-col cols="12">
              <v-data-table
                :items-per-page="2000"
                :headers="headers"
                :items="records"
                :search="search"
                @click:row="(item ) => openDetailsDialog(item)"

  class="elevation-1"

              >
                 <!-- action template -->
                 <!-- <template v-slot:item.action="{ item }">
                  <v-btn
                    color="accent"
                    text
                    @click="openDetailsDialog(item)"
                    ><v-icon left>mdi-eye</v-icon> More Details
                  </v-btn>
                </template> -->
                <!-- end -->
              </v-data-table>
            </v-col>
            <!-- end of col -->
          </v-row>
  
  
        <v-dialog
  v-model="detailsDialog"
  fullscreen
  hide-overlay
  transition="dialog-bottom-transition"
>
  <v-card>
    <v-toolbar dark color="primary" dense>
      <v-toolbar-title>
        <v-btn icon dark @click.native="detailsDialog = false">
          <v-icon dark>mdi-keyboard-backspace</v-icon>
        </v-btn>
        Equipment Application Details
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click.native="detailsDialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
     <v-container>
  <v-row>
    <!-- Equipment Image -->
    <!-- <v-col cols="12" sm="6">
      <v-img
        :src="`${imageUrl}/uploads/projects/${activeItem.equipmentToRent.imageLink}`"
        alt="Equipment Image"
        max-width="300"
      ></v-img>
    </v-col> -->
<v-col
  cols="12"
  sm="6"
  v-if="activeItem.equipmentToRent"
  class="bg-white rounded-2xl shadow-md border border-gray-200 px-6 py-5 mb-6 flex flex-col"
>
  <div class="flex items-center mb-4">
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-3">
      <v-icon color="primary" size="28">mdi-cog-outline</v-icon>
    </span>
    <h3 class="text-2xl font-semibold text-blue-700 tracking-tight">
      Equipment Details
    </h3>
  </div>
  <div class="divide-y divide-blue-50">
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-shape-outline</v-icon>
      <span class="font-semibold text-gray-700 w-36">Machine Type:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.machineType }}</span>
      <span class="ml-2 inline-block w-2 h-2 rounded-full bg-blue-400"></span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-factory</v-icon>
      <span class="font-semibold text-gray-700 w-36">Make:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.make }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-car-cog</v-icon>
      <span class="font-semibold text-gray-700 w-36">Model:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.model }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-weight</v-icon>
      <span class="font-semibold text-gray-700 w-36">Capacity:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.capacity }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-robot-industrial</v-icon>
      <span class="font-semibold text-gray-700 w-36">Drive Type:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.driveType }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-tools</v-icon>
      <span class="font-semibold text-gray-700 w-36">Main Use:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.mainUse }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-cash-multiple</v-icon>
      <span class="font-semibold text-gray-700 w-36">Pricing:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.pricing }}</span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-currency-kes</v-icon>
      <span class="font-semibold text-gray-700 w-36">Average Price:</span>
      <span class="ml-2 text-gray-900">KES {{ activeItem.equipmentToRent.averagePrice }}</span>
      <span class="ml-2 inline-block w-2 h-2 rounded-full bg-green-400"></span>
    </div>
    <div class="flex items-center py-2">
      <v-icon small color="primary" class="mr-2">mdi-check-circle-outline</v-icon>
      <span class="font-semibold text-gray-700 w-36">Condition:</span>
      <span class="ml-2 text-gray-900">{{ activeItem.equipmentToRent.condition }}</span>
      <span
        class="ml-2 inline-block w-2 h-2 rounded-full"
        :class="{
          'bg-green-500': activeItem.equipmentToRent.condition === 'New',
          'bg-yellow-400': activeItem.equipmentToRent.condition === 'Used',
          'bg-gray-400': !['New', 'Used'].includes(activeItem.equipmentToRent.condition)
        }"
      ></span>
    </div>
  </div>
</v-col>
    <v-col cols="12" sm="6" class="space-y-2 bg-white p-4 rounded-lg shadow-md border border-gray-200">
  <h3 class="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
    Farm Details
  </h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm leading-relaxed">
    <p><strong class="font-medium text-gray-900">Country:</strong> {{ activeItem.countryAt }}</p>
    <p><strong class="font-medium text-gray-900">Region:</strong> {{ activeItem.region }}</p>
    <p><strong class="font-medium text-gray-900">District:</strong> {{ activeItem.district }}</p>
    <p><strong class="font-medium text-gray-900">Ward:</strong> {{ activeItem.ward }}</p>
    <p><strong class="font-medium text-gray-900">Village:</strong> {{ activeItem.village }}</p>
    <p><strong class="font-medium text-gray-900">Farm Size:</strong> {{ activeItem.farmSize }}</p>
    <p><strong class="font-medium text-gray-900">Farm Code:</strong> {{ activeItem.farmCode }}</p>
    <p><strong class="font-medium text-gray-900">Project Type:</strong> {{ activeItem.projectType }}</p>
    <p><strong class="font-medium text-gray-900">Farming Schedule:</strong> {{ new Date(activeItem.farmingSchedule).toLocaleString() }}</p>
  </div>
</v-col>



   <v-col cols="6" sm="6" v-if="activeItem.user" class="space-y-2 bg-white p-4 rounded-lg shadow-md border border-gray-200">
  <h3 class="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2 flex items-center">
    <v-icon color="primary" left class="mr-2">mdi-account-circle</v-icon>
    User Details
  </h3>
  <div class="text-gray-700 text-sm leading-relaxed space-y-2">
    <p>
      <v-icon small color="primary" class="mr-1">mdi-account</v-icon>
      <strong class="font-medium text-gray-900">First Name:</strong>
      <v-badge color="primary" content=" " dot class="ml-1 mr-1" />
      {{ activeItem.user.first_name }}
    </p>
    <p>
      <v-icon small color="primary" class="mr-1">mdi-account</v-icon>
      <strong class="font-medium text-gray-900">Last Name:</strong>
      <v-badge color="primary" content=" " dot class="ml-1 mr-1" />
      {{ activeItem.user.last_name }}
    </p>
    <p>
      <v-icon small color="primary" class="mr-1">mdi-email</v-icon>
      <strong class="font-medium text-gray-900">Email:</strong>
      <v-badge color="green" content=" " dot class="ml-1 mr-1" />
      {{ activeItem.user.email }}
    </p>
    <p>
      <v-icon small color="primary" class="mr-1">mdi-phone</v-icon>
      <strong class="font-medium text-gray-900">Phone:</strong>
      <v-badge color="blue" content=" " dot class="ml-1 mr-1" />
      {{ activeItem.user.phone }}
    </p>
  </div>
</v-col>

  </v-row>
 
</v-container>
    </v-card-text>
  </v-card>
</v-dialog>
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
    },
    data() {
      return {
        search: null,
        loader: false,
        deleteDialog: false,
        detailsDialog: false,
        activeItem: {},
        deleteItem: {},
        records: [],
        headers: [
          { text: "Country", value: "countryAt" },
          { text: "Region", value: "region" },
          { text: "District", value: "district" },
          { text: "Ward", value: "ward" },
          { text: "Village", value: "village" },
          { text: "Farm Size", value: "farmSize" },
          { text: "Farm code", value: "farmCode" },
          { text: "Project type", value: "projectType" },
          { text: "Farming schedule", value: "farmingSchedule" },
        ],
      };
    },
    methods: {
     openDetailsDialog(item) {
  this.activeItem = item;
  localStorage.setItem('activeItem', JSON.stringify(item));
  this.detailsDialog = true;
},
created() {
  this.getData();
  const storedItem = localStorage.getItem('activeItem');
  if (storedItem) {
    this.activeItem = JSON.parse(storedItem);
  }
},
      getData() {
        const url = "/equipment-applications";
        const self = this;
        this.$store
          .dispatch("expressGet", url)
          .then((res) => {
            if (res.state) {
              self.records = res.records;
              console.log(self.records, "equipment applications")
            }
          })
          .catch((err) => {
            console.log(err, "error");
            this.$refs.snackbar.show(err, "red");
          });
      },
      openDeleteDialog(item) {
        this.deleteItem = item;
        this.deleteDialog = true;
      },
      deleteProduct() {
        const url = `/equipment-applications/${this.deleteItem._id}`;
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
    //  this.$store.commit("btnLoader", false);
      this.getData();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .v-data-table .v-data-table__tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s ease;

  .v-container {
  background: #f4f8fb;
  min-height: 100vh;
  padding-top: 24px;
  padding-bottom: 24px;
}

.v-card {
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(25, 118, 210, 0.07);
  background: #fff;
  overflow: hidden;
}

.v-toolbar {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: linear-gradient(90deg, #1976d2 0%, #43a047 100%);
}

.v-toolbar-title {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 1px;
}

.v-text-field {
  margin-bottom: 18px;
  background: #f7fafc;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.04);
}

.v-data-table {
  border-radius: 10px;
  overflow: hidden;
  background: #fafbfc;
}

.v-data-table-header th {
  background: #f1f5f9;
  color: #1976d2;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

.v-dialog .v-card {
  border-radius: 0;
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
}

.v-dialog .v-toolbar {
  background: linear-gradient(90deg, #1976d2 0%, #43a047 100%);
}

.v-img {
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(67,160,71,0.08);
  margin-bottom: 16px;
}

.v-card-text strong {
  color: #1976d2;
  font-weight: 600;
}

.v-card-text {
  font-size: 1.07rem;
}

.v-btn {
  border-radius: 8px;
}

.v-btn[icon] {
  background: transparent !important;
}

@media (max-width: 600px) {
  .v-dialog .v-card {
    max-width: 100vw;
    border-radius: 0;
  }
  .v-card {
    border-radius: 0;
  }
}
  
}
  </style>