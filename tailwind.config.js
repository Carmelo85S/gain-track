/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      
      colors: {
        "main": "#F3F4F6",  // **Bianco tenue** per lo sfondo, pulito e minimal
        "black": "#000000", // **Nero** per il testo e i bottoni
        "primary-100": "#B0B0B0",  // **Grigio scuro** per hover o bordi morbidi
        "secondary-300": "#333333", // **Nero scuro** per sezioni secondarie
        "accent-100": "#A1D6A5",    // **Verde tenue** per piccoli dettagli motivazionali
        "hero-box": "#E0E0E0", // **Grigio chiaro** per l'hero box, più soft e meno aggressivo
      }
    },
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};
