/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mysignature: ['agustina', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '&::-webkit-scrollbar': { 'display': 'none' },
          '&::-ms-overflow-style': 'none', /* For Internet Explorer */
          'scrollbar-width': 'none', /* For Firefox */
        },
      }
      addUtilities(newUtilities)
    },
  ],
  daisyui: {
    themes: ["winter","dim"],
  },
}

