/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '450px',
        'md': '768px',
        'lg': '976px',
      }
    },
  },
  plugins: [],
}