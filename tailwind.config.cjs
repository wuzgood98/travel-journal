/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "717px",
      lg: "1024px",
    },
    extend: {
      colors: {
        lightRed: "#f55a5a",
        dark: "#2b283a",
        gray: "#918e9b",
      },
    },
  },
  plugins: [require("daisyui")],
};
