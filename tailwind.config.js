/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      height: {
        'nav-h': '100px',
        'nav-mobile': '80px',
      },
      padding: {
        'nav-h': '100px',
        'nav-mobile': '80px',
      },
      colors: {
        main: {
          default: '#4F473B',
          dark: '#27231D',
          light: '#A7A39D',
          lightest: '#EDECEB',
        },
        tequila: {
          light: '#E35500',
          dark: '#BD2F00',
        },
        yellow: '#FFED2E',
        orange: '#FBB03B',
      },
    },
    boxShadow: {
      nav: '0px 10px 20px rgba(79, 71, 59, 0.2);',
    },
    keyframes: {
      'buoyancy-1': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-8px)' },
      },
      'buoyancy-2': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-16px)' },
      },
    },
    animation: {
      'buoyancy-1': 'buoyancy-1 2s ease-in-out infinite',
      'buoyancy-2': 'buoyancy-2 2s ease-in-out infinite',
    },
  },
  plugins: [],
}