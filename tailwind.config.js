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
      graywhite: "#f7f7f7",
      darkgray_white: "#b8b8b8",
      transpwhite: "#ffffff26",

      black: "#000000",
      grayblack: "#141414",
      transpblack: "#00000026",

      blue: "#3e30ff",
      darkblue: "#0f0f1b",
      grayblue: "#2f2e41",
      darkgray_blue: "#1e1d2b",
    }
  },
  plugins: [],
}

