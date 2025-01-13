/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Montserrat-Regular', 'sans-serif'],
        bold: ['Montserrat-Bold', 'sans-serif'],
      },
      colors: {
        gray: '#CFCFCF',
        white: '#f5f5f5',
        blue: '#151F2B',
        'blue-text': '#1E2733',
        yellowBg: '#FE8A00',
        'white-ice': '#ECEFF1',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
