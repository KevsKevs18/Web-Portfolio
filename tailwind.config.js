/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        bgcolor: "#fafafa",
        sidebar: "#141428",
        bodycolor: "#E6E6E6",
        'black-g':"#000000",
        'gray-g':"#4D4855",
      },
      screens:{
          sm: '640px', //Small tablets
          md: '768px', //tablets
          lg: '1024px', //laptop
          xl: '1280px', //Desktops
      },
      backgroundImage:{
          'svg-comp-guy': "url('assets/codingart.png')",
      },
      fontFamily:{
        Gothic: ['Special Gothic Expanded One', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

