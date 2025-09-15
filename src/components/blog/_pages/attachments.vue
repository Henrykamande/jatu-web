<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Blog Attachments</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/blog">
          <v-icon left>mdi-arrow-left</v-icon>Back
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <h2>{{ dataItem.title }}</h2>
          </v-col>

          <v-col cols="12">
            <v-btn @click="openDialog" color="accent" text
              ><v-icon left>mdi-plus</v-icon>Attachment</v-btn
            >
          </v-col>

          <v-col
            cols="12"
            md="4"
            v-for="(image, index) of dataItem.attachments"
            v-bind:key="index"
          >
            <!-- <v-btn text color="primary" @click="downloadFile(image.fileName)">{{
              image.title
            }}</v-btn> -->

            <a :href="`${serverUrl}/uploads/attachments/${image.fileName}`">{{
              image.title
            }}</a>

            <v-btn
              icon
              style="margin-left: 50px"
              @click="openDeleteDialog(image)"
              ><v-icon color="red">mdi-close</v-icon></v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <!-- attachment modal -->
          <v-dialog v-model="dialog" max-width="750px">
            <v-card>
              <v-toolbar dense color="toolbarColor" dark>
                <v-toolbar-title>New Attachment</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-container fluid>
                  <v-row class="subtitle-2 text--primary">
                    <v-col cols="12" xs="12" sm="6" md="12">
                      <v-text-field
                        label="Title"
                        outlined
                        dense
                        v-model="attachmentName"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" xs="12" sm="6" md="12">
                      <v-file-input
                        v-model="attachmentImage"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        placeholder="Select Document"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <!-- <v-col cols="6">
                    <img
                      v-if="attachmentUrl"
                      :src="attachmentUrl"
                      style="height: 200px; padding: 20px"
                    />
                  </v-col> -->
                    <v-col cols="12">
                      <v-btn color="accent" @click="save" :loading="loader">
                        <v-icon left>mdi-content-save</v-icon>Save
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <!-- end of attachment modal -->

          <!-- delete modal -->
          <v-dialog v-model="deleteDialog" max-width="650px">
            <v-card>
              <v-toolbar dense color="toolbarColor" dark>
                <v-toolbar-title>Delete Attachment</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="deleteDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-container fluid>
                  <v-row class="subtitle-2 text--primary">
                    <v-col cols="12" xs="12" sm="6" md="12">
                      Are you sure you want to delete
                      <span style="color: red">{{ selectedItem.title }}</span> ?
                    </v-col>

                    <v-col cols="12">
                      <v-btn
                        color="red"
                        dark
                        @click="deleteAttachment"
                        :loading="loader"
                      >
                        <v-icon left>mdi-content-save</v-icon> Delete
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <!-- end of attachment modal -->
        </v-row>
      </v-card-text>
    </v-card>
    <snackbar ref="snackbar"></snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters(["serverUrl"]),
  },
  data() {
    return {
      action: "view",
      url: null,
      dataItem: {},
      dialog: false,
      deleteDialog: false,
      attachmentImage: [],
      attachmentUrl: "",
      attachmentName: null,
      selectedItem: {},
    };
  },
  watch: {
    "$route.params.url": {
      handler: "setUrl",
      immediate: true,
    },
  },
  methods: {
    setUrl(val) {
      this.url = val;
    },
    openDialog() {
      this.dialog = true;
    },
    openDeleteDialog(item) {
      this.selectedItem = item;
      this.deleteDialog = true;
    },
    setAttachmentImage({ image, imageUrl }) {
      this.attachmentImage = image;
      this.attachmentUrl = imageUrl;
    },
    save() {
      const data = new FormData();
      const attUrl = this.attachmentName
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .trim()
        .split(" ")
        .join("-");

      const title = `${this.dataItem.url}-${attUrl}`;
      const _id = this.dataItem._id;
      data.append("attachmentImage", this.attachmentImage);
      data.append("title", title);
      data.append("imageName", this.attachmentName);
      data.append("_id", _id);
      const url = "/blog/create/attachment";
      this.loader = true;
      this.$store
        .dispatch("expressPost", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
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
    deleteAttachment() {
      const data = {
        _id: this.dataItem._id,
        fileName: this.selectedItem.fileName,
      };
      const url = "/blog/delete/attachment";
      this.loader = true;
      this.$store
        .dispatch("expressPost", { url, data })
        .then((res) => {
          if (res.state) {
            location.reload();
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
      const url = `/blog/${this.url}`;
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
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>