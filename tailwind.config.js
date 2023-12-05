/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main-theme-1": 'var(--main-theme-1)',
        "main-theme-2": 'var(--main-theme-2)',
        "main-theme-3": 'var(--main-theme-3)',
        "main-theme-4": 'var(--main-theme-4)',
      },
      screens:{
        "small" : '450px'
      }
    },
  },
 
  plugins: [require("daisyui")],
}

