const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [],
  important: true,
 purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: { m100v: "100vh" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      yellow: colors.amber,
      green: colors.green,
      purple: colors.purple,
      orange: colors.orange,
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
  screens: {
    sm: { min: "400px", max: "767px" },
    md: { min: "768px", max: "1023px" },
    lg: { min: "1024px", max: "1279px" },
    xl: { min: "1280px", max: "1535px" },
    "2xl": { min: "1536px" },
  },
};
