/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gacoan: {
          yellow: "#FFC903",
          "yellow-light": "#FFD53D",
          "yellow-dark": "#E5B400",
          red: "#E11D48",
          "red-dark": "#BE123C",
          orange: "#EA580C",
          dark: "#121212",
          black: "#0A0A0A",
          surface: "#FFFDF0",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fredoka)", "Fredoka", "system-ui", "sans-serif"],
      },
      boxShadow: {
        float: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        pop: "4px 4px 0px 0px #0A0A0A",
        "pop-lg": "8px 8px 0px 0px #0A0A0A",
        "pop-hover": "2px 2px 0px 0px #0A0A0A",
      },
      animation: {
        "marquee": "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.92", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};
