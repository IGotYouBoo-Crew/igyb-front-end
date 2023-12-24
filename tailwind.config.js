/** @type {import('tailwindcss').Config} */

 
module.exports = ({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-datepicker/**/*.js'],
  darkMode: 'false',
  theme: {
    extend: {
      colors: {
        'background': '#FFEBAD',
        'honey': '#FEB737',
        'periwinkle': '#A7B5FE',
        'periwinkle-dark': '#7e89fb',
        'search-border': '#953D96',
        'sea': '#37939F',
        'indigo': '#543786',
        'grey': '#C5C5C5',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '34rem',
        '160': '40rem',
      },
      animation: {
        'fade-away': 'fade-up 0.75s forwards',
        'fade-towards': 'fade 0.75s reverse',
        'fade-out': 'fade 0.75s forwards',
      },

      keyframes: { 
        'fade-up': {
          'from': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          'to': {
            transform: 'translateY(-25%)',
            opacity: 0,
            display: 'none',
          }
        },
        'fade': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(25%)',
          }
        },
      },
    },
  },
  plugins: [],

});

