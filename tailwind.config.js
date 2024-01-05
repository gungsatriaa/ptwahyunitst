/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7dd3fc',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      }
    },
    extend: {
      scale: {
        '20': '0.20',
      }
    }
  },
  plugins: [],
};

