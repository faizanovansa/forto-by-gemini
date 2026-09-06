/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          900: '#0a0a0a', // Deep cinematic black
          800: '#171717', // Secondary dark
          100: '#f4f4f0', // Warm editorial off-white
          accent: '#8b2635', // Muted crimson / Japanese stamp red
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
