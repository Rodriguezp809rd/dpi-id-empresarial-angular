/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Angular templates + componentes
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#003876", // Blue principal
          2: "#3D7FB1",
        },
        gray: {
          5: "#696A6E",
          6: "#343637",
        },
        lightgray: {
          1: "#F7F7F8",
          2: "#ECEDEE",
          3: "#DDDEE1",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
