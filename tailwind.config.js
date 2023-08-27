/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      sans: ['"GenJyuuGothic P 500"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFE0',
          dark: '#008D96',
          'deep-dark': '#005656',
        },
        text: {
          DEFAULT: '#fff',
          dark: '#1C3245',
          tint: '#00FFE0',
        },
        role: {
          sm: '#d355ff',
          'sm-dark': '#4c0071',
          'sm-tint': '#ff00f5',
          team1: '#ffc700',
          team2: '#ff5c00',
          'team-dark': '#933500',
        },
        'bg-dark': '#0a0d14',
        'bg-transition': 'rgba(28, 50, 69, 0.6)',
        danger: '#ff0000',
      },
      backgroundImage: {
        'primary-linear': 'linear-gradient(rgba(0, 255, 224, 0) 0%, rgba(0, 255, 224, 0.25) 60%, rgba(0, 255, 224, 0.45) 80%, rgba(0, 255, 224, 0.7) 90%, rgba(0, 255, 224, 0.9) 100%)',
        'role-sm-linear': 'linear-gradient(rgba(211, 85, 255, 0) 0%, rgba(211, 85, 255, 0.05) 60%, rgba(211, 85, 255, 0.2) 80%, rgba(211, 85, 255, 0.6) 100%)',
        'role-team1-linear': 'linear-gradient(rgba(255, 199, 0, 0) 0%, rgba(255, 199, 0, 0.05) 60%, rgba(255, 199, 0, 0.2) 80%, rgba(255, 199, 0, 0.6) 100%)',
        'role-team2-linear': 'linear-gradient(rgba(255, 122, 0, 0) 0%, rgba(255, 122, 0, 0.05) 60%, rgba(255, 122, 0, 0.2) 80%, rgba(255, 122, 0, 0.6) 100%)',
      },
    },
  },
  plugins: [],
};
