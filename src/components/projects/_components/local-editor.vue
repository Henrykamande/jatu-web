<template>
  <v-row dense class="docForm">
    <v-col cols="12" md="4">
      <DatePicker @date="setDate" :myDate="date" :title="`Date`" ref="dateRef"></DatePicker>
    </v-col>
    <v-col cols="12" md="12">
      <v-data-table
        :items-per-page="100"
        :headers="headers"
        :items="regions"
        :search="search"
        :mobile-breakpoint="0"
      >
        <template v-slot:item.name="{ item }">
          <div style="width: 200px">{{item.name}}</div>
        </template>
        <template v-slot:item.price="{ item }">
          <v-text-field label="Price" v-model="item.price" outlined dense></v-text-field>
        </template>
      </v-data-table>
    </v-col>

    <v-col cols="12">
      <v-btn v-if="docCreate == true" color="accent" @click="sendData" :loading="loader">
        <v-icon left>mdi-content-save</v-icon>Save Data
      </v-btn>

      <v-btn v-else color="accent" @click="sendData" :loading="loader">
        <v-icon left>mdi-content-save</v-icon>Update
      </v-btn>
    </v-col>
  </v-row>
</template>


<script>
export default {
  props: {
    initial: {
      type: Object,
      required: true
    },
    docCreate: {
      type: Boolean
    },
    regions: {
      type: Array
    }
  },
  data: () => ({
    record: {},
    loader: false,
    date: new Date().toISOString().substr(0, 10),
    headers: [
      { text: "Item", value: "name" },
      { text: "Price", value: "price" }
    ]
  }),
  watch: {
    initial: {
      handler: "init",
      immediate: true
    }
  },
  methods: {
    init(val) {
      this.record = { ...val };
    },
    setDate(date) {
      this.record.date = date;
    },
    sendData() {
      this.loader = true;
      let data = this.record;
      data.zones = this.regions;
      this.$emit("data", data);
    }
  }
};
</script>