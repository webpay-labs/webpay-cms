module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['CircularStd', 'sans-serif'],
      serif: ['serif'],
    },
    colors: {
      black: '#000',
      'light-black': '#172430',
      white: '#FFF',
      purple: {
        DEFAULT: '#8B4BFF',
      },
      pink: {
        DEFAULT: '#DC1FFF',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
