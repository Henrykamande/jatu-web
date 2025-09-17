export default {
  // (default) remove if not present

  target: 'static',

  // Define environment variables accessible in the application.
  // These values can be overridden by a .env file at the root.
  env: {
    websiteUrl: process.env.WEBSITE_URL || "http://localhost:8182",
    backendUrl:
      process.env.BACKEND_URL || "https://jatu-server-long-cloud-6971.fly.dev",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Jubilant Afro farms",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/jubilant-afrofarms-logo.png" }],
  },
  server: {
    port: 8182, // default: 3000
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/tailwind.css",
    "~assets/styles/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/capitalize",
    { src: "~/plugins/vuex-persist", ssr: false },
    { src: '~/plugins/vue-datepicker', ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // modules: ["nuxt-lazy-load"],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',   // important for PostCSS 8 with Nuxt 2
    "@nuxtjs/tailwindcss",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ["far"],
          },
        ],
      },
    ],
  ],
  // fontawesome: {
  //   component: 'fas',
  //   icons: {
  //     solid: ['fasTimes'],
  //     brands: []
  //   }
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
