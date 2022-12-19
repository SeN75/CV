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
        c7: "#339999",
      },
      screens: {
        sm: "0",
        // => @media (min-width: 640px) { ... }

        md: "800px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {

        f2: ["'Press Start 2P'"],
        f1: ["Russo One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
