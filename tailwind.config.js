/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'c-base-01': '#BB86FC',
        'c-base-02': '#03DAC6',
        'c-black': '#121212',
        'c-gray-0': '#1E1E1E',
        'c-gray-1': '#292929',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
