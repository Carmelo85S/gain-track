/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors:{
        "primary-100": "#161616",
        "primary-200": "#282827",
        "primary-300": "#3a3a3a",
        "secondary-300": "#ffdb4c",
        "secondary-400": "#ffcc00",
        "accent-100": "#f59e0b",
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
