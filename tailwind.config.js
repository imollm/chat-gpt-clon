/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        typing: 'blink 1s steps(5, start) infinite'
      },
      blink: {
        to: {
          visibility: 'hidden'
        }
      },
      backgroundColor: {
        gptlogo: '#10a37f',
        gptdarkgray: '#202123',
        gptgray: '#343541',
        gptlightgray: '#444654'
      },
      colors: {
        gptgray: '#8d8d8d'
      },
      screens: {
        '2lg': '1110px'
      }
    },
  },
  plugins: [],
}
