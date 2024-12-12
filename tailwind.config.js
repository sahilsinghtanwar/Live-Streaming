/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#ff416c',
          hover: '#ff4b2b',
        },
        secondary: {
          DEFAULT: '#ff4b2b',
          hover: '#ff416c',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #ff416c, #ff4b2b)',
        'gradient-primary-hover': 'linear-gradient(45deg, #ff4b2b, #ff416c)',
      },
    },
  },
  plugins: [],
};