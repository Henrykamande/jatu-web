<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Blog</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-btn color="accent" text to="/new/blog"
              ><v-icon>mdi-plus</v-icon>Article</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <!-- start of col -->
          <v-col cols="4" v-for="blog in blogs" v-bind:key="blog._id">
            <v-card class="mx-auto">
              <v-img
                v-if="blog.videoStatus == false"
                :src="`${serverUrl}/uploads/blog/${blog.coverImage}`"
                height="300px"
                style="max-height: 300px"
              ></v-img>

              <iframe
                v-if="blog.videoStatus == true"
                width="300"
                height="300"
                src="https://www.youtube.com/embed/AayuowSrf-Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <v-card-title> {{ blog.title }} </v-card-title>

              <v-card-subtitle> {{ blog.size }} </v-card-subtitle>

              <v-card-actions>
                <v-btn color="accent" text :to="`/blog/details/${blog.url}`"
                  >More Details</v-btn
                ><br />

                <v-btn color="blue" text :to="`/blog/attachments/${blog.url}`"
                  ><v-icon>mdi-attachment</v-icon>Docs</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn icon @click="openModal(blog)">
                  <v-icon color="red" left>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- end of col -->
        </v-row>

        <v-row>
          <v-dialog v-model="dialog" max-width="650px">
            <v-card>
              <v-toolbar dense color="primary" dark>
                <v-toolbar-title>Delete Blog</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="dialog = false" dark>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-row class="subtitle-2 text--primary">
                  <v-col cols="12"></v-col>
                  <v-col cols="12">
                    Are you sure you want to delete this blog -
                    <span v-if="activeItem" style="color: red">{{
                      activeItem.title
                    }}</span>
                    ?
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      @click="deleteItem"
                      color="red"
                      dark
                      :loading="loader"
                      >Yes</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
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
      blogs: [],
      dialog: false,
      activeItem: {},
    };
  },
  methods: {
    openModal(data) {
      this.activeItem = Object.assign({}, data);
      this.dialog = true;
    },
    getData() {
      const url = "/blog";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          console.log(res, "all blog res");
          if (res.state) {
            self.blogs = res.records;
          }
        })
        .catch((err) => {
          console.log(err, "error");
          this.$refs.snackbar.show(err, "red");
        });
    },
    deleteItem() {
      const url = `/blog/${this.activeItem._id}`;
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