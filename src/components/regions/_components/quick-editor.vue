<template>
  <v-form>
    <v-row dense>
      <v-col cols="12" xs="12" md="6">
        <v-text-field name="regionName" outlined dense label="Name" v-model="record.name"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn  color="accent" @click="sendData" :loading="$store.state.btnLoader">
          <v-icon left>mdi-content-save</v-icon> Create
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
      this.$store.commit("btnLoader", true);
      this.$emit("data", this.record);
    }
  }
};
</script>