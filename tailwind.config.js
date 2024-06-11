/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk,ejs,pug}"],
  theme: {
    extend: {
      fontFamily: {
        'dufanthe': ['Dufanthe', 'sans-serif'],
        'grantham': ['Grantham', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
