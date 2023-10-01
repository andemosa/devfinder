/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "blue-gray": "#1f2b49",
      "light-blue": "#0476fa",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
