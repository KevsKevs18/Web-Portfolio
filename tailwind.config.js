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
        wrapperColor: "#d0e1e9",
        lightblue: "#dfecf2",
        bgcolor: "#23437e",
        sidebar: "#abf7b1",
        bodycolor: "#E6E6E6",
        wrapper: "#375589",
        card: "#4c6796",
        greenFont: "#041908",
        yellowFont: "#cbc66a",
        customBlue: "#90E0EF",
        'black-g':"#000000",
        'gray-g':"#4D4855",
        experience:"#baffc9",
        certificate:"#ffb3ba",
        projects:"#bae1ff",
        techno:"#ffdfba",
      },
      boxShadow:{
          shadowLight: '6px 6px 12px #bababa',
          shadowList: '6px 6px 10px #000000',
          shadowGreen: '6px 6px 10px #041908',
      },
      screens:{
          sm: '500px', //Small tablets
          mm: '640px', //Medium tablets
          md: '768px', //tablets
          lg: '1024px', //laptop
          xl: '1280px', //Desktops
      },
      backgroundImage:{
          'svg-comp-guy': "url('assets/codingart.png')",
          'svg-bg': "url('assets/SVG2.JPG')",
          'kevin-profile': "url('assets/Kevin.JPG')",
      },
      fontFamily:{
        Gothic: ['Special Gothic Expanded One', 'sans-serif'],
        Londrina: ['Londrina Solid', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        Inter: ["Inter", 'sans-serif'],
        GoogleSans: ['Google Sans Code', 'monospace'],
      },
      gridTemplateAreas: {
          layoutMobile: [
            'navheader',
            'profile',
            'maincard'
          ],
          layoutDesktop:[
            'navheader profile',
            'maincard profile',
          ],
          tablet:[
            'navheader navheader',
            'maincard profile',
          ],
         
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}

