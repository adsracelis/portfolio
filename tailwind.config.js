/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        card: "#1E293B",
        accent: "#3B82F6",
      },
    },
  },
  plugins: [],
}