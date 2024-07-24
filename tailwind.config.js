/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'c-base-01': '#BB86FC',
        'c-base-01-hover': '#A772E8',
        'c-base-02': '#03DAC6',
        'c-black': '#121212',
        'c-gray-0': '#1E1E1E',
        'c-gray-1': '#292929',
        'c-gray-2': '#7B7B7B',
        'c-red': '#FF4181',
      },
      spacing: {
        'calc-100vw-minus-400px': 'calc(100vw - 400px)',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
