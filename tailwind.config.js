/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        moveBackground: "moveBackground 50s linear infinite",
        marqueeSm: "marqueeSm 40s linear infinite",
        marqueeMd: "marqueeMd 20s linear infinite",
      },
      keyframes: {
        marqueeSm: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-477%)",
          },
        },
        marqueeMd: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-123%)",
          },
        },
      },
    },
  },
  plugins: [],
};
