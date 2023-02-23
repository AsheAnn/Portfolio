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
      fontFamily: {
        Cardo: 'Cardo',
        NotoSans: 'Noto Sans'
      },
      colors: {
        theme: { 100: '#010301' }
      }
    }
  },
  plugins: []
}
