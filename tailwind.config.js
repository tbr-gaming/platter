/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.css",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'serif-pro': ['Source Serif Pro', 'serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#1C1D1D',
      },
    },
  },
  plugins: [],
}
