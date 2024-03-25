/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : "class",
  theme: {
    extend:{
      padding: {
        'vh-15': '15vh',
        'vh-20': '20vh', 
        'vh-25': '25vh', 
        'vh-30': '30vh', 
        'vw-7': '7vw',
        'vw-15': '15vw',
      },
      margin: {
        'vh-15': '15vh', 
        'vh-20': '20vh', 
        'vh-25': '25vh', 
        'vh-30': '30vh', 
        'vw-7': '7vw',
        'vw-15': '15vw',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors:{
      transparent: "#ffffff00",

      white: "#ffffff",
      transpwhite: "#ffffff26",

      black: "#000000",
      transpblack: "#00000026",

      blue: "#4086ff",

      lightBackground: "#fff",
      lightContent_1: "#f3f3f3",
      lightContent_2: "#c5c5c5",
      lightTexttitle: "#000000",
      lightTextnormal: "#323232",

      darkBackground: "#171718",
      darkContent_1: "#252526",
      darkContent_2: "#2d2d2d",
      darkTexttitle: "#fff",
      darkTextnormal: "#c5c5c5",

      darkblue: "#171718",
      grayblue: "#2f2e41",
      darkgray_blue: "#252526",
    }
  },
  plugins: [],
}

