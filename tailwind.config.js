/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a32431',
        'secondary':'#051e40',
        'accent':'#f3e3e5'
      }
    },
  },
  plugins: [],
}

