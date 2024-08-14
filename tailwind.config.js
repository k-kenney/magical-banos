/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // ...
      'lightBeige': '#FFFAF1',
      'lightTan' : '#C1AA80',
      'darkTan' : '#B09154',
      'darkBlue' : '#344D62',
      'lightBlue' : '#7CBCAC',
      'text' : '323232',
    }, 

    fontFamily: {
      title: ["Noto Sans", "sans-serif"],
      para: [ "Manrope", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

