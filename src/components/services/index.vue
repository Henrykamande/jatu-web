<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Services</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-btn color="accent" text to="/new/service"
              ><v-icon>mdi-plus</v-icon>Service</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <!-- start of col -->
          <v-col cols="4" v-for="service in services" v-bind:key="service._id">
            <v-card class="mx-auto">
              <v-img
                :src="`${serverUrl}/uploads/services/${service.coverImage}`"
                height="200px"
                style="max-height: 200px"
              ></v-img>

              <v-card-title> {{ service.title }} </v-card-title>

              <v-card-subtitle> {{ service.size }} </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="accent"
                  text
                  :to="`/service/details/${service.url}`"
                  >More Details</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn icon @click="openModal(service)">
                  <v-icon color="red" left>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- end of col -->
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="650px">
      <v-card>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Delete Service</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row class="subtitle-2 text--primary">
            <v-col cols="12"></v-col>
            <v-col cols="12">
              Are you sure you want to delete this service -
              <span v-if="activeItem" style="color: red">{{
                activeItem.title
              }}</span>
              ?
            </v-col>

            <v-col cols="12">
              <v-btn @click="deleteItem" color="red" dark :loading="loader"
                >Yes</v-btn
              >
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
    ...mapGetters(["serverUrl"]),
  },
  data() {
    return {
      services: [],
      dialog: false,
      activeItem: {},
      loader: false,
    };
  },
  methods: {
    openModal(data) {
      this.activeItem = Object.assign({}, data);
      this.dialog = true;
    },
    getData() {
      const url = "/services";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.services = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    deleteItem() {
      const url = `/services/${this.activeItem._id}`;
      const self = this;
      this.loader = true;
      this.$store
        .dispatch("expressRemove", url)
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
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>