/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Verula:['Varela Round', 'sans-serif'],
        Poppins:['Poppins','sans-serif']
      },
      backgroundImage:{
        'photo':"url('./assets/photo.jpg')",
        'photo1':"url('./assets/photo1.jpg')"
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}

