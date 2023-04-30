/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': '#1E1E1E',
        'gray-table': '#414141',
        'gray-table-topic': '#6f6f6f',
        'gray-swap': '#161616',
      }
    },
  },
  plugins: [],
}

