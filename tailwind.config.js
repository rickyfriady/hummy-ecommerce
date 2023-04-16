/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bebasneue: 'Bebas Neue',
      poppins: 'Poppins',
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#FFFDFA',
          secondary: '#FC7B53',
          background: '#0A0909',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
