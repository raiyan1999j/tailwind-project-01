/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        customFont:'Futura PT'
      },
      screens:{
        'small-laptop': { max: '1279.98px' },
        'wide-tablet': { max: '1023.98px' },
        'tablet': { max: '768.98px' },
        'wide-mobile': { max: '640.98px' },
        'mobile': { max: '479.98px' },
      }
    },
  },
  plugins: [],
}

