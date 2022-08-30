/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/src/*.scss",
    "./src/index.html",
    "./src/**/*.{scss, ts, html}",
    "./src/app/views/**/*.{scss, ts, html}",
  ],
  theme: {
    extend: {
      colors: {
        c1: "#66cc99",
        c2: "#023259",
        c3: "#006666",
        c4: "#339966",
        c5: "#519391",
        c6: "#339999",
      },
      fontFamily: {
        f1: ["Russo One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
