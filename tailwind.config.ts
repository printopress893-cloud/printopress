import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#58C4F6",
          pink: "#FF5FA2",
          yellow: "#FFD447",
          brown: "#5B3A29",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 50%, #FFD447 100%)",
        "gradient-blue-pink":
          "linear-gradient(135deg, #58C4F6 0%, #FF5FA2 100%)",
        "gradient-pink-yellow":
          "linear-gradient(135deg, #FF5FA2 0%, #FFD447 100%)",
        "gradient-blue-yellow":
          "linear-gradient(135deg, #58C4F6 0%, #FFD447 100%)",
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
