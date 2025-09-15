<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="toolbarColor" dense dark>
        <v-toolbar-title>Orders</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" v-if="orders.length <= 0">
            <v-alert border="top" colored-border type="info" elevation="2"
              >No Orders Yet</v-alert
            >
          </v-col>

          <v-col cols="12" v-else>
            <v-text-field label="Search" v-model="search"></v-text-field>
            <v-data-table
              :items-per-page="2000"
              :headers="headers"
              :items="orders"
              :search="search"
            >
              <!-- action template -->
              <template v-slot:item.action="{ item }">
                <v-btn color="accent" text @click="orderModal(item)"
                  ><v-icon left>mdi-eye</v-icon> More Details
                </v-btn>
              </template>
              <!-- end -->
            </v-data-table>
          </v-col>
        </v-row>

        <v-row>
          <v-dialog
            v-model="orderDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
              <v-toolbar dark color="primary" dense>
                <v-toolbar-title>
                  <v-btn icon dark @click.native="orderDialog = false">
                    <v-icon dark>mdi-keyboard-backspace</v-icon>
                  </v-btn>
                  Order Details
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click.native="orderDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>

              <v-card-text>
                <v-container>
                  <v-row justify="center">
                    <!-- generate excel -->
                    <v-col cols="12" xs="12" md="10">
                      <v-row class="subtitle-2 text--primary">
                        <v-col cols="12" md="4">
                          Customer: {{ orderItem.name }}<br />
                          Phone No: {{ orderItem.phone }}<br />
                          Location: {{ orderItem.location }}
                        </v-col>

                        <v-col cols="12" md="12">
                          Instructions: {{ orderItem.details }}
                        </v-col>

                        <v-col cols="12">
                          <v-data-table
                            :items-per-page="2000"
                            :headers="productHeaders"
                            :items="orderItem.products"
                            :search="search"
                          >
                            <template v-slot:item.unit_price="{ item }">
                              {{ item.unit_price.toLocaleString() }}
                            </template>
                            <!-- action template -->
                            <template v-slot:item.total="{ item }">
                              {{
                                (
                                  item.quantity * item.unit_price
                                ).toLocaleString()
                              }}
                            </template>
                            <!-- end -->
                          </v-data-table>
                        </v-col>

                        <v-col cols="12">
                          Total:
                          {{
                            orderItem.total && orderItem.total.toLocaleString()
                          }}</v-col
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
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
      loader: false,
      dialog: false,
      search: null,
      orders: [],
      deleteItem: {},
      orderDialog: false,
      orderItem: {},
      headers: [
        { text: "Name", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },
        { text: "Order Date", value: "orderDate" },
        { text: "Action", value: "action" },
      ],
      productHeaders: [
        { text: "Name", value: "name" },
        { text: "Quantity", value: "quantity" },
        { text: "Price", value: "unit_price" },
        { text: "Total", value: "total" },
      ],
    };
  },
  methods: {
    openModal(data) {
      this.deleteItem = Object.assign({}, data);
      this.dialog = true;
    },
    orderModal(data) {
      this.orderItem = data;
      this.orderDialog = true;
    },
    getData() {
      const url = "/order";
      const self = this;
      this.$store
        .dispatch("expressGet", url)
        .then((res) => {
          if (res.state) {
            self.orders = res.records;
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