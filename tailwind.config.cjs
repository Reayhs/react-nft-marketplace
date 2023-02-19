/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'max': '1023px'},
      'ct': {'max': '880px'},
      'tl': {'max': '723px'},
      },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
