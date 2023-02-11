/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    screens: {
      xxs: "450px",
      xs: "550px",
      sm: "640px",
      md: "768px",
      base: "870px",
      md_link: "980px",
      lg: "1024px",
      lg1: "1180px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1650px",
      "4xl": "1850px",
      "5xl": "2140px",
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
      "8xl": "96px",
      "9xl": "128px",
    },
    extend: {
      colors: {
        primaryColor: "#FDB813",
        secondaryColor: "#707070",
        greenBg: "#66C026",
        secondaryLightColor: "#717171",
        danger: "#f7061f",
      },
      boxShadow: {
        resale_shadow:
          "-2px -2px 9px rgba(0, 0, 0, 0.25), inset 6px 4px 9px #9B700A",
        nav: "0px -5px 50px 2px rgba(0,0,0,0.3)",
        dropdown_shadow: "inset -1px -4px 4px 0 rgb(0 0 0 / 0.3)",
        formInputShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        formShadow: "0rem 0rem 0.2rem 0.2rem #c2c2c2",
        testimonial_shadow :"inset 1px 4px 10px  rgb(0 0 0 / 0.3)",
      },
      fontFamily: {
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
