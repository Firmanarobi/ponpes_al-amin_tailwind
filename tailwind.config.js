/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      rotate: {
        '35': '35deg',
      },
      colors: {
        header: '#4AB539'
      }
    },
  },
  plugins: [],
}

