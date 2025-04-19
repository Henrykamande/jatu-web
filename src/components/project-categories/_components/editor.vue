<template>
  <v-form>
    <v-row dense>
      <v-col cols="12" xs="12" md="4">
        <v-text-field name="newCustomerNamex" outlined dense label="Name" v-model="record.name"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn v-if="docCreate == true" color="accent" @click="sendData" :loading="loader">
          <v-icon left>mdi-content-save</v-icon>Save
        </v-btn>

        <v-btn v-else color="accent" @click="sendData" :loading="loader">
          <v-icon left>mdi-content-save</v-icon>Update
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
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
    }
  },
  data: () => ({
    record: {},
    loader: false,
    date: new Date().toISOString().substr(0, 10)
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
      const url = this.record.name
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .trim()
        .split(" ")
        .join("-");

      this.record.url = url;
      this.$emit("data", this.record);
    }
  }
};
</script>