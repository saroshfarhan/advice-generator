/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light_cyan: "hsl(193, 38%, 86%)",
        neon_green: "hsl(150, 100%, 66%)",
        grayish_blue: "hsl(217, 19%, 38%)",
        dark_grayish_blue: "hsl(217, 19%, 24%)",
        dark_blue: "hsl(218, 23%, 16%)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};