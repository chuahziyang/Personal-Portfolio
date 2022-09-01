module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thegray: "#171717",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
