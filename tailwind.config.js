/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ['"Josefin Sans", sans-serif'],
        Poppins: ['"Poppins",sans-serif'],
        Montserrat: ['"Montserrat",sans-serif'],
        Inria : ['"Inria Sans",sans-serif']

      },
      colors:{
        mustardCategories:['#EA9D20'],
        stars:['#FFD600'],
        points:['#2E9280'],
        footerHighlights:['#B27106']
        
      }
      
    },
  },
  plugins: [],
};
