/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#B9A9E8",
        "lavender-light": "#E8E1F9",
        mint: "#A8D8C9",
        "mint-light": "#DCF2EA",
        pink: "#F5C6D6",
        "pink-light": "#FBE8EE",
        ink: "#2B2B3D",
        muted: "#6B6B7D",
        cream: "#fffdff",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
}