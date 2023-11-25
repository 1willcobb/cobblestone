/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gopher: ["gopher", "ariel", "sans-serif"],
      cryene: ["cryene", "ariel", "sans-serif"],
      philosopher: ["philosopher", "ariel", "sans-serif"],
      airhead: ["airhead", "ariel", "sans-serif"],
    },
    extend: {
      colors: {
        lightTan: "#FFF6EA",
        tan: "#FFE6C6",
        midTan: "#E9B878",
        darkTan: "#906935",
        orangePop: "#FF9900",
        neverBlack: "#2e2e2e",
      },
    },
  },

  plugins: [],
};
