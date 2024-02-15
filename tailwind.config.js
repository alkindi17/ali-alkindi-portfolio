/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "dark-accent": {
          DEFAULT: "#404040",
          100: "#666666",
          200: "#4d4d4d",
        },
      },
      fontFamily: {
        enriqueta: ["var(--font-enriqueta)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "max-content",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
