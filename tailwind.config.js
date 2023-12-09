/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#FFEBAD',
        'honey': '#FEB737',
        'periwinkle': '#A7B5FE',
        'sea': '#37939F',
        'indigo': '#543786',
      },
      fontFamily: {
        jost: ["'Jost'", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '34rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}

