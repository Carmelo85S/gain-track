/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/main.webp')",
        'form-bg': "url('/src/assets/form.webp')", 
      },
      colors: {
        "main": "#C6C6C6",
        "black": "#000",
        "primary-100": "#f1fF00",   // Arancione acceso per elementi principali (bottoni, call-to-action)
        "primary-200": "#FFA559",   // Arancione più tenue per hover ed effetti soft
        "secondary-300": "#005F73", // Blu petrolio per un contrasto moderno ed elegante
        "secondary-400": "#0A9396", // Blu acqua per elementi secondari con freschezza
        "training-100": "#001219",  // Blu notte molto scuro per profondità e forza
        "training-text": "#EAEAEA", // Bianco sporco per leggibilità su sfondi scuri
        "accent-100": "#94D2BD",    // Verde menta leggero per piccoli dettagli e armonia
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
