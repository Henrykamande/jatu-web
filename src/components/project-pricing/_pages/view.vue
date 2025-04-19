<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Project Cost Items</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/price/definition"
          ><v-icon left>mdi-arrow-left</v-icon>Back</v-btn
        >
      </v-toolbar>
      <v-card-text>
        <v-row class="text--primary subtitle-2">
          <v-col cols="12"> PROJECT: {{ dataItem.title }}</v-col>

          <v-col cols="12">
            <v-btn @click="itemDialog = true" text color="accent"
              ><v-icon left>mdi-plus</v-icon> Add Item</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="costs"
              :search="search"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="editIcon" @click="openEditDialog(item)" text icon
                  ><v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <!-- end -->

              <template v-slot:item.delete="{ item }">
                <v-btn color="red" text @click="openDeleteDialog(item)" icon
                  ><v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- start of dialog -->
    <v-dialog v-model="itemDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Create Cost Item</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="itemDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Name"
                  v-model="costItem.name"
                ></v-text-field>
              </v-col>

              <!-- <v-col cols="12" sm="12" md="6">
                <v-text-field
                  label="Cost Per Acre"
                  v-model="costItem.acreCost"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  label="Partner Request Cost"
                  v-model="costItem.partnerCost"
                ></v-text-field>
              </v-col> -->

              <v-col cols="12">
                <v-btn color="red" dark :loading="loader" @click="saveItem"
                  >Save</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- start of dialog -->
    <v-dialog v-model="deleteDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="accent" dark>
          <v-toolbar-title>Delete Item</v-toolbar-title>
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
                  Are you sure you want to delete the following item ?</span
                >
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <span style="color: red"> {{ deleteItem.name }}</span>
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="red"
                  dark
                  :loading="loader"
                  @click="deleteCostItem"
                  >Yes</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->

    <!-- start of dialog -->
    <v-dialog v-model="editDialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Edit Item</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="editDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-container fluid>
            <v-row dense class="subtitle-2 text--primary">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Name"
                  v-model="editItem.name"
                ></v-text-field>
              </v-col>

              <!-- <v-col cols="12" sm="12" md="6">
                <v-text-field
                  label="Cost/Acre"
                  v-model="editItem.acreCost"
                ></v-text-field>
              </v-col> -->
              <!-- 
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  label="Partner Cost"
                  v-model="editItem.partnerCost"
                ></v-text-field>
              </v-col> -->

              <v-col cols="12">
                <v-btn color="accent" dark :loading="loader" @click="updateItem"
                  >Update</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end of dialog -->
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      action: "view",
      search: "",
      url: null,
      editDialog: false,
      editItem: {},
      dataItem: {},
      costItem: {},
      itemDialog: false,
      loader: false,
      deleteDialog: false,
      deleteItem: {},
      costs: [],
      headers: [
        { text: "Name", value: "name" },
        // { text: "Cost/Acre", value: "acreCost" },
        // { text: "Partner Cost", value: "partnerCost" },
        { text: "Edit", value: "action" },
        { text: "Delete", value: "delete" },
      ],
    };
  },
  watch: {
    "$route.params.id": {
      handler: "getData",
      immediate: true,
    },
  },
  methods: {
    saveItem() {
      const costItem = this.costItem;
      const self = this;
      const data = {
        project: self.dataItem._id,
        name: costItem.name,
        acreCost: costItem.acreCost,
        partnerCost: costItem.partnerCost,
      };

      const url = "/project/cost";
      self.loader = true;
      this.$store
        .dispatch("expressPost", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
            self.loader = false;
          } else {
            self.$refs.snackbar.show(res.msg, "red");
            self.loader = false;
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    updateItem() {
      const editItem = this.editItem;
      const self = this;
      const data = {
        name: editItem.name,
        acreCost: editItem.acreCost,
        partnerCost: editItem.partnerCost,
      };

      const url = `/project/cost/${editItem._id}`;
      self.loader = true;
      this.$store
        .dispatch("expressPut", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
            self.loader = false;
          } else {
            self.$refs.snackbar.show(res.msg, "red");
            self.loader = false;
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    openDeleteDialog(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },
    openEditDialog(item) {
      this.editItem = item;
      this.editDialog = true;
    },
    deleteCostItem() {
      const url = `/project/cost/${this.deleteItem._id}`;
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
    getData(val) {
      if (val) {
        const url = `/projects/fetch/${val}`;
        const self = this;
        this.$store
          .dispatch("expressGet", url)
          .then((res) => {
            if (res.state) {
              self.dataItem = res.record;
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });

        // get costs
        const costsUrl = `/project/cost/${val}`;
        this.$store
          .dispatch("expressGet", costsUrl)
          .then((res) => {
            if (res.state) {
              self.costs = res.records;
            } else {
              self.$refs.snackbar.show(res.msg, "red");
            }
          })
          .catch((err) => {
            this.$refs.snackbar.show(err, "red");
          });
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>