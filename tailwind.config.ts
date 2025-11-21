import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beatlistGreen: "#00ff88",
        beatlistGreenLight: "#33ff9e",
        beatlistGreenDark: "#00995a",
        charcoal: "#1a1a1a",
        smoke: "#f5f5f5",
      },
      backgroundImage: {
        "gradient-beatlist":
          "linear-gradient(135deg, #00ff88 0%, #00995a 100%)",
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 255, 136, 0.45)",
        soft: "0 4px 12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
