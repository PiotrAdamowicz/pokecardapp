/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pkred: {
          // 50: "#ff0000",
          // 100: "#ff0000",
          // 200: "#ff0000",
          // 300: "#ff0000",
          // 400: "#ff0000",
          500: "#cc0000",
          // 600: "#ff0000",
          // 700: "#977669",
          800: "#ff0000"
          // 900: "#43302b"
        },
        pkblue: "#3b4cca",
        pkyellow: {
          500: "#ffde00",
          800: "#b3a125"
        }
      }
    }
  },
  plugins: []
};
