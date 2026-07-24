import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both"
      }
    }
  },
  plugins: []
} satisfies Config;
