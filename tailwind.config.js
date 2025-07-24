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
        experience:"#baffc9",
        certificate:"#ffb3ba",
        projects:"#bae1ff",
        techno:"#ffdfba",
      },
      screens:{
          sm: '640px', //Small tablets
          md: '768px', //tablets
          lg: '1024px', //laptop
          xl: '1280px', //Desktops
      },
      backgroundImage:{
          'svg-comp-guy': "url('assets/codingart.png')",
          'svg-bg': "url('assets/SVG2.JPG')",
      },
      fontFamily:{
        Gothic: ['Special Gothic Expanded One', 'sans-serif'],
        Londrina: ['Londrina Solid', 'sans-serif'],
      },
      animation:{
        blink: 'blink 1s step-start infinite',
      },
      keyframes:{
        blink:{
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0'},
        },
      },

    },
  },
  plugins: [],
}

