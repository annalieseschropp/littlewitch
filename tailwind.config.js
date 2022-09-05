/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,scss,ts,tsx}',
  ],
  theme: {
    colors: {
      'purple': '#8D89A3',
      'hover-purple': '#837F98',
      'dark-grey': '#212121',
      'light-grey': '#CBCBCF',
      'white': '#FFFFFF',

    },
    fontFamily: {
      'header':['"Georgia"', 'serif'],
      'body':['"Open Sans"', 'sans-serif'],
    },
    backgroundColor: '#212121',
    extend: {},
  },
  plugins: [],
}
