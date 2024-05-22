/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // next ui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },

      colors: {
        blue: "#297AAF",
        blue_sec: "#438AB8",
        darkblue: "#2980B9",
        pClr: "#6C6C72",
        bg_1: "#FAFBFF",
        
      },
      navWidth: {
        width: "400px"
      }

    },
  },
  // next ui
  darkMode: "class",
  plugins: [nextui()],
};
