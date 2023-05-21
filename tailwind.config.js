/**
 /**
 * @format
 * @type {import('tailwindcss').Config}
 */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        borderLogo: "#E6E6E6",
        logo: "#292929",
        iconNav: "#7D7D7D",
        btnSide: "#F2F2F2",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#FFBE18",
        white: "#FFFFFF",
        black: "#000000",
        textPost: "#292929",
        backgroundFooter: "#FAFAFA",
        gray1: "#F2F2F2",
        green1: "#0F730C",
        gray2: "#757575",
        gray3: "#E6E6E6",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["Lora", "sans-serif", "sohne"],
      },
      fontSize: {
        "text-5xl": "42px",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
});
