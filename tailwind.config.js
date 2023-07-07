export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      display: ["responsive"],
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        90: ".9",
        100: "1",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },
    },
  },
  plugins: [],
};
