/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/styles/*.{scss, css}'
  ],
  theme: {
    extend: {
      colors: {
        theme: { 100: '#171717' }
      }
    }
  },
  plugins: []
}
