endering
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#62A8F9",
          200: "#0978F3",
          300: "#1A367F",
          400: "#0B1724",
        },
      },
      fontFamily: {

      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
