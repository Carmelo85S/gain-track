/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 76%)'
      },
      colors: {
        "primary-100": "#1C3D63",  // Blu intenso, elegante ma energico
        "primary-200": "#3B5A83",  // Un blu un po' più chiaro, per un tocco di freschezza
        "secondary-300": "#F34F3A", // Rosso-arancio brillante per spinta ed energia
        "secondary-400": "#F5A623", // Arancio dorato, per un contrasto caldo ed invitante
        "training-100":"#055FAC",
        "training-text": "#C6C6C6",
        "accent-100": "#A4D65E",    // Verde chiaro, fresco e vitale, per dare equilibrio e freschezza
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};
