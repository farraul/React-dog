/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3a4068",
        secondary: "#777FB4",
      },
      colors: {
        primary: "#ffffff",
      },
    },
  },
  plugins: [],
};
