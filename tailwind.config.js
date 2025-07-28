/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a5490",
        secondary: "#2e7cd6",
        accent: "#ff6b35",
        surface: "#ffffff",
        background: "#f8f9fa",
        success: "#28a745",
        warning: "#ffc107",
        error: "#dc3545",
        info: "#17a2b8"
      },
      fontFamily: {
        sans: ["Noto Sans KR", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideDown: "slideDown 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}