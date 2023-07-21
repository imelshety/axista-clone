/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#115e59",
        "border-color":
          "linear-gradient(to right, rgb(52, 152, 132), rgb(44, 96, 132));",
      },
      // backgroundImage: {
      //   "hero-bg": "url(./assets/hero-bg.jpg)",
      // },
      backgroundImage: {
        "port-1": "url('./img/port1.jpg')",
      },
    },
  },
  plugins: [],
};
