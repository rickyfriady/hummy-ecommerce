/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bebasneue: 'Bebas Neue',
      poppins: 'Poppins',
    },
    animation: {
      'animation-start': 'starAnim 2s ease-in infinite',
      'animation-spin': 'spinAnim 4s alternate infinite',
    },
    keyframes: {
      starAnim: {
        '0% , 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
      spinAnim: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
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
