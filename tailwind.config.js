/** @type {import('tailwindcss').Config} */
export default {
  server: {
    port: 5174,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Brand Palette (from Coolors)
        primary: "#3aafa9",     // Teal (main accent)
        secondary: "#17252a",   // Deep navy/charcoal
        accent: "#2b7a78",      // Muted aqua (buttons, hovers)
        background: "#def2f1",  // Soft pale aqua
        surface: "#feffff",     // Almost white

        // Optional neutral grays for text/background blending
        neutral: {
          light: "#f7f7f7",
          DEFAULT: "#eaeaea",
          dark: "#1f1f1f",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
        display: ["Pacifico", "cursive"],
        boldonse: ["Boldonse", "sans-serif"],
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(20px)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out forwards",
        slideOut: "slideOut 0.3s ease-in forwards",
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
