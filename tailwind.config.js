/** @type {import('tailwindcss').Config} */
export default {
  content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        bg: '#000000',
        color: '#fff',
        primary: '#e50914',
        secondary: '#333',
        link: '#757575',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
    },
},

  plugins: [],
}

