/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'itembg': "url('/public/assets/itembg.png')",
        'itemhoverbg': "url('/public/assets/itemhoverbg.png')",
        'launchbg': "url('/public/assets/launchpadbg.png')",
        'btnbg': "url('/public/assets/launchbtn.png')"
      }
    },
  },
  plugins: [],
}
