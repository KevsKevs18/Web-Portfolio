/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation:{
        blink: 'blink 1s step-start infinite',
         'scroll-slow': 'scroll 10s linear infinite',
      },
      keyframes:{
        blink:{
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0'},
        },
        scroll:{
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-50%)'},
        },
      },
        
      colors:{
        bgcolor: "#fafafa",
        sidebar: "#141428",
        bodycolor: "#E6E6E6",
        customBlue: "#90E0EF",
        'black-g':"#000000",
        'gray-g':"#4D4855",
        experience:"#baffc9",
        certificate:"#ffb3ba",
        projects:"#bae1ff",
        techno:"#ffdfba",
      },
      boxShadow:{
          shadowLight: '6px 6px 12px #bababa, -6px -6px 12px #ffffff',
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
        Rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

