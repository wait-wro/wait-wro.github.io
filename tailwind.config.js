/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        waitGreen: '#BEDC74',
      },
      keyframes: {
        fly: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flyX: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateX(-20px)' },
        }
      },
      animation: {
        fly: 'fly 6s ease-in-out infinite',
        flyX: 'flyX 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
