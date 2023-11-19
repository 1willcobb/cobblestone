/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gopher_black": ["gopher_black", "sans-serif"],
      },
    },
  },

  plugins: [],
};
