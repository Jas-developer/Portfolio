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
    },
  },
  plugins: [],
};