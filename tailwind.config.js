const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '350px'},
        'xs2': {'max': '540px'},
        'xs3': {'min': '540px'},
        
      },
      fontSize: {
        "sm": "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        "base": "clamp(1.2rem, 0.40vw + 0.99rem, 1.25rem)",
        "lg": "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        "xl": "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)"
      },
      colors:{
        'primary' : '#2CA13F',
        'secondary' : '#F69B00',
        'bg' : '#F4F4F4'

      },
      fontFamily:{
        'title' : ['Bebas Neue']
      },
      fontSize: {
        "sm": "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        "base": "clamp(0.7rem, 0.30vw + 0.80rem, 1.07rem)",
        "lg": "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        "xl": "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)"
      },
    },
  },
  plugins: [],
}) ;
