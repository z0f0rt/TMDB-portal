const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./public/**/*.html"],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa", "sans-serif"],
    },
    colors: {
      ...colors,
      white: "#ffffff",
      main: {
        200: "#c8d8e4",
        250: "#bccbd7",
        300: "#88bae0",
        500: "#2b6777",
      },
      gray: "#f2f2f2",
      secondary: { 500: "#52ab98" },
    },
    extend: {},
  },
  plugins: [],
};
