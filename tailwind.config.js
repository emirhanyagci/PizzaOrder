/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin"],
      },
      colors: {
        primary: "#EFCFA0",
        secondary: colors.amber,
        cardGray: {
          dark: "#262527",
          light: "#6A6565",
        },
      },
    },
  },
  plugins: [],
};
