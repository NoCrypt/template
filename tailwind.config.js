/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      serif: ["Georgia", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
