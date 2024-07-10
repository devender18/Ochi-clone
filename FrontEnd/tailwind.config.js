/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        custom : ['CustomFont', 'NeueMontreal']
      },
      colors : {
        custombg : '#F1F1F1',
      }
    },
  },
  plugins: [],
}

