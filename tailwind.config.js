/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors:{
        "primary-100": "#161616",
        "primary-200": "#282827",
        "secondary-300": "#ffdb4c"
      },
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};
