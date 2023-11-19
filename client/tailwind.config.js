/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gopher": ["gopher_black", "ariel", "sans-serif"],
        "cryene": ["cryene", "ariel", "sans-serif"],
        "philosopher": ["philosopher", "ariel", "sans-serif"],
        "airhead": ["airhead", "ariel", "sans-serif"],
      },
    },
  },

  plugins: [],
};
