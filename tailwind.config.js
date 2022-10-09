/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "MainBlue": "#4169e1",
        "YoutubeRed": "#FF0000",
        "LinkedInBlue": "#0072b1"
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}