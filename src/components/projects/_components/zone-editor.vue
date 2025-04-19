<template>
  
      <v-row dense>

      <v-col cols="12" md="4">
        <v-autocomplete
          autocomplete="off"
          outlined
          dense
          v-model="record.zone"
          :items="regions"
          label="Zone"
          item-text="name"
          item-value="_id"
        ></v-autocomplete>
      </v-col>
  
        <v-col cols="12" xs="12" md="4">
          <v-text-field
            outlined
            dense
            label="Unit"
            v-model="record.unit"
          ></v-text-field>
        </v-col>
  
        <!-- <v-col cols="12" xs="12" md="4">
          <v-text-field
          type="number"
            outlined
            dense
            label="Price"
            v-model="record.price"
          ></v-text-field>
        </v-col> -->

        <v-col cols="12" xs="12" md="4">
          <v-text-field
          type="number"
            outlined
            dense
            label="Bags / Acre"
            v-model="record.bags"
          ></v-text-field>
        </v-col>
  
  
        <v-col cols="12">
          <v-btn
            v-if="docCreate == true"
            color="accent"
            @click="sendData"
            :loading="loader"
          >
            <v-icon left>mdi-content-save</v-icon>Save
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
      loader: false,
      date: new Date().toISOString().substr(0, 10),
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
      setDate(date) {
        this.record.date = date;
      },
      sendData() {
        this.loader = true;
        this.$emit("data", this.record);
      },
    },
  };
  </script>