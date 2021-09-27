module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true
    },
    extend: {
      colors: {
        'play': '#1DB954',
        'sign-up': '#5892DA',
        'card': '#181818',
        'scrollbar': '#898989',
        'light': '#282828',
        'lightest': '#B3B3B3',
        'dark': '#121212',
        'darkest': '#191414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}
