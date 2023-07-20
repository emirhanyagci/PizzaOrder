/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFCFA0",
        secondary: "#E1A140",
        cardGray: {
          dark: "#262527",
          light: "#6A6565",
        },
      },
    },
  },
  plugins: [],
};
