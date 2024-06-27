/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dc4a2d",
        primary_outline: "#fcb4a5",
        seconddary: "#fef4f2",
        dividerColor: "#e7e7e7",
      },
    },
  },
  plugins: [],
};
