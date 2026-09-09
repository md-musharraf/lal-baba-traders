/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          blue: '#1E3A8A',
          amber: '#F59E0B',
          'amber-dark': '#D97706',
          slate: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Noto Sans Devanagari', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      }
    },
  },
  plugins: [],
}
