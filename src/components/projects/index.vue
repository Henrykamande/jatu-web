<template>
  <v-container fluid>
    <v-toolbar color="toolbarColor" dense dark>
      <v-toolbar-title>Projects</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col cols="12">
        <v-btn color="accent" text to="/new/project">
          <v-icon>mdi-plus</v-icon>Project
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" label="Label" outlined dense></v-text-field>
        <v-data-table
          :items-per-page="1000"
          :headers="headers"
          :items="projects"
          :search="search"
          :mobile-breakpoint="0"
        >
          <!-- action template -->
          <template v-slot:item.delete="{ item }">
            <v-btn @click="openModal(item)" color="accent" text icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.title="{ item }">
            <v-btn color="accent" text :to="`/project/details/${item.url}`">{{item.title}}</v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.action="{ item }">
            <v-btn color="accent" text :to="`/project/details/${item.url}`" icon>
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.zones="{ item }">
            <v-btn color="primary" text :to="`/project/zones/${item.url}`">
              <v-icon></v-icon>Zones
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.active="{ item }">
            <v-switch @change="updateStatus(item)" color="accent" v-model="item.active"></v-switch>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.costdef="{ item }">
            <v-btn color="primary" text :to="`/project/costs/${item.url}`">
              <v-icon></v-icon>Costs
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.setup="{ item }">
            <v-btn color="primary" text :to="`/unit/setup/${item.url}`">
              <v-icon></v-icon>Units Setup
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.mwatch="{ item }">
            <v-btn color="accent" text :to="`/local/watch/${item.url}`">
              <v-icon></v-icon>LCL Watch
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.interwatch="{ item }">
            <v-btn color="accent" text :to="`/international/watch/${item.url}`">
              <v-icon></v-icon>INT Watch
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.seasons="{ item }">
            <v-btn color="primary" text :to="`/seasons/${item.url}`">
              <v-icon></v-icon>Seasons
            </v-btn>
          </template>
          <!-- end -->

          <!-- action template -->
          <template v-slot:item.image="{ item }">
            <v-img
              :src="`${serverUrl}/uploads/projects/${item.coverImage}`"
              height="50px"
              width="50px"
              style="max-height: 50px"
            ></v-img>
          </template>
          <!-- end -->
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Delete Project</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row class="subtitle-2 text--primary">
            <v-col cols="12"></v-col>
            <v-col cols="12">
              Are you sure you want to delete this project -
              <span
                v-if="activeItem"
                style="color: red"
              >
                {{
                activeItem.title
                }}
              </span>
              ?
            </v-col>

            <v-col cols="12">
              <v-btn @click="deleteItem" color="red" dark :loading="loader">Yes</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["serverUrl"])
  },
  data() {
    return {
      search: "",
      projects: [],
      dialog: false,
      activeItem: {},
      loader: false,
      headers: [
        { text: "Dlt", value: "delete" },
        { text: "Image", value: "image" },
        { text: "Name", value: "title" },
        { text: "Active", value: "active" },
        { text: "Zones", value: "zones" },
        { text: "Costs", value: "costdef" },
        { text: "Unit", value: "setup" },
        { text: "LCL Watch", value: "mwatch" },
        { text: "Int Watch", value: "interwatch" },
        { text: "Seasons", value: "seasons" },
        { text: "Action", value: "action" }
      ]
    };
  },
  methods: {
    openModal(data) {
      this.activeItem = Object.assign({}, data);
      this.dialog = true;
    },
    updateStatus(item) {
      const details = {
        active: item.active
      };
      const data = {
        product: JSON.stringify(details)
      };
      const url = `/projects/edit/status/${item._id}`;
      const self = this;
      this.$store
        .dispatch("expressPut", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
          } else {
            self.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch((err) => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    getData() {
      const url = "/projects";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then(res => {
          if (res.state) {
            self.projects = res.records;
          }
        })
        .catch(err => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    deleteItem() {
      const url = `/projects/${this.activeItem._id}`;
      const self = this;
      this.loader = true;
      this.$store
        .dispatch("expressRemove", url)
        .then(res => {
          if (res.state) {
            location.reload();
          } else {
            self.$refs.snackbar.show(res.msg, "red");
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>