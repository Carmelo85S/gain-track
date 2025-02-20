/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        "primary-100": "#112d44",   // Blu scuro intenso per lo sfondo principale
        "primary-200": "#2a4f6b",   // Blu medio scuro per contrasto elegante
        "primary-300": "#54778d",   // Blu chiaro/grigio-blu per un tocco soft e fresco
        "secondary-300": "#3a6f98", // Blu vivace per pulsanti o sezioni interattive
        "secondary-400": "#1f4f6f", // Blu intenso per accenti e dettagli di impatto
        "accent-100": "#2a8f8f",    // Verde acqua scuro per aggiungere freschezza senza distrarre
    }
    
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};
