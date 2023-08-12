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
        },
      },
      fontFamily: {
        enriqueta: ["var(--font-enriqueta)"],
      },
    },
  },
  plugins: [],
};
