/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily : {
      'sans' : ['Fira sans'],
      'mono' : ['monospace'],
      'karla' : ['Karla', 'sans-serif'],
      'mulish' : ['Mulish','sans-serif']
    },
    screens:{
      'mobile': "400px"
    },
    extend: {},
  },
  plugins: [],
}
