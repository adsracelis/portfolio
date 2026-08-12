/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1F3558",
        blue: "#4F6F99",
        "muted-blue": "#8FA3C1",
        "icy-blue": "#B0C9E2",
        blush: "#F3C7BC",
        "off-white": "#FAF9F6",
        "text-dark": "#1D2633",
        "text-muted": "#5F6B7A",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}