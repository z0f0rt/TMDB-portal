/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'slide-right': 'slideRight .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      dropShadow: {
        dark: '0 0 10px #ffa7c4',
        light: '0 0 10px #d23669',
      },
      colors: {
        yellow: '#ffba08',
        pink: {
          100: '#ffa7c4',
          900: '#d23669',
        },
        neutral: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
};
