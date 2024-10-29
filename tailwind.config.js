/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './first_template/*.{html,js}',
    './second_template/*.{html,js}',
  ],
  theme: {
    extend: {
      inset: {
        '15/100': '15%',
      },
      width: {
        '7/10': '70%',
        '280': '70rem',
      },
      height: {
        '800': '200rem',
        '120': '30rem',
        '140': '35rem',
        '10/12': '83%'
      },
      colors:{
        'theme1blue': '#61A3BA',
        'theme1cream': '#FFFFDD',
        'theme1lime': '#D2DE32',
        'theme1green': '#A2C579',
      },
    },
  },
  plugins: [],
}

