/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Path to your React components
    "./public/index.html"          // Path to your HTML file
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#cca353',  // Custom background color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Custom font family
      },
    },
  },
  plugins: [],
}
