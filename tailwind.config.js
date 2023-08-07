/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet': '#4F46E5',
        'dark': '#1C1C1C',
      }
    },
  },
  plugins: [],
}

