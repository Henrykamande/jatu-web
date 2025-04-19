import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#388E3C",
        accent: "#E65100",
        toolbarColor: "#36454F",
        secondary: "#FAFAFA",
        error: "#b71c1c",
        tabColor: "#BDBDBD",
        iconColor: "#03A9F4",
        flatButton: "#03A9F4",
      },
    },
  },
});
