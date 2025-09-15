<template>
  <section>
    <!-- start of sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item :to="item.link">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- end of sidebar -->

    <!-- start of appbar -->
    <v-app-bar
    dense
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Jubilantafrofarms Connect</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn text color="white" @click="logout">Logout</v-btn>
    </v-app-bar>
    <!-- end of appbar -->
  </section>
</template>
<script>
export default {
  computed: {
    name() {
      return localStorage.getItem("name");
    },
  },
  data: () => ({
    drawer: true,
    items: [
      // { icon: "mdi-keyboard", text: "Products", link: "/products" },
      { icon: "mdi-keyboard", text: "Projects", link: "/projects" },
      { icon: "mdi-keyboard", text: "Project Category", link: "/project-categories" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Project Pricing",
        model: false,
        children: [
          {
            icon: "mdi-save",
            text: "Price Definition",
            link: "/price/definition",
          }
        ],
      },
      {
        icon: "mdi-keyboard",
        text: "Farm Owners",
        link: "/farm/owners",
      },
      {
        icon: "mdi-keyboard",
        text: "Agri Investors",
        link: "/agri/investors",
      },
      {
        icon: "mdi-keyboard",
        text: "Experts",
        link: "/experts",
      },
      {
        icon: "mdi-keyboard",
        text: "Available Farms",
        link: "/available/farms",
      },
      {
        icon: "mdi-keyboard",
        text: "Farm Applicants",
        link: "/farmland-applications",
      },
      {
        icon: "mdi-keyboard",
        text: "Listed Equipments",
        link: "/listed-equipment",
      },
      {
        icon: "mdi-keyboard",
        text: "Rent EQ Applications",
        link: "/rent-eq-applications",
      },
      { icon: "mdi-keyboard", text: "Meeting Requests", link: "/meeting-requests" },
      { icon: "mdi-keyboard", text: "Upcoming Events", link: "/upcoming-events" },
      // { icon: "mdi-keyboard", text: "Services", link: "/services" },
      // { icon: "mdi-contacts", text: "Orders", link: "/orders" },
      // { icon: "mdi-contacts", text: "Slides Manager", link: "/slide-manager" },
      // { icon: "mdi-contacts", text: "SEO", link: "/seo" },
      { icon: "mdi-keyboard", text: "Blog", link: "/blog" },
      { icon: "mdi-keyboard", text: "Newsletter subscriptions", link: "/newsletters" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Setup",
        model: false,
        children: [
          {
            icon: "mdi-save",
            text: "Countries",
            link: "/countries",
          },
          {
            icon: "mdi-save",
            text: "Zones",
            link: "/regions",
          },
          { icon: "mdi-save", text: "Categories", link: "/categories" },
          { icon: "mdi-save", text: "Sub Categories", link: "/sub-categories" },
          { icon: "mdi-save", text: "Users", link: "/users" },
        ],
      },
    ],
  }),
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push("/login");
    },
  },
};
</script>

