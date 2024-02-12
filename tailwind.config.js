/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize:{
        '100%': '100% 100%'
      },
      fontFamily:{
        'chewy' : 'Chewy, system-ui',
        'balsamiq' :'Balsamiq Sans, sans-serif'
      },
      screens:{
        'xs': "350px",
        "xs_1": "470px",
        'xs_2': "520px",
        'xxs': "420px",
        'sm_2': "650px",
        '992': '992px',
        '576': '576px',
        '450': '450px',
        'lg_2': '850px',
      }
    },
  },
  plugins: [],
}