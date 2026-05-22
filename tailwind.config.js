/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FF6A00",
          50: "#FFE9D9",
          100: "#FFD2B0",
          200: "#FFAD70",
          300: "#FF8A3D",
          400: "#FF6A00",
          500: "#E55E00",
          600: "#C04F00",
        },
        bg: {
          base: "#0A0A0B",
          panel: "#111114",
          card: "#16161A",
          line: "#1E1E22",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "Menlo", "monospace"],
        display: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255, 106, 0, 0.25)",
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
