/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    fill: {
      'orange-gradient': 'linear-gradient(to right, #ff8c00, #ffaf5f)',
    },
    extend: {
      colors: {
        redborderbuttons: '#820E17',
        redbuttons: '#FF0013',
        bluePrimary: '#293654', 
        blueSecondary: '#6C82BB',
        greenPrimary: "#58AA56",
        redPrimary : "#DD451D",
      }
    },
   
  },
  plugins: [ ],
}