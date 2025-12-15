/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: { 100: '#FFF3E7', 0: '#F8F8F8' },
      },
      keyframes: {
        subtleShake: {
          '0%, 100%': {
            transform: 'translateX(0) rotate(0deg)',
          },
          '20%': {
            transform: 'translateX(-1px) rotate(-5deg)',
          },
          '40%': {
            transform: 'translateX(1px) rotate(5deg)',
          },
          '60%': {
            transform: 'translateX(-1px) rotate(-5deg)',
          },
          '80%': {
            transform: 'translateX(1px) rotate(5deg)',
          },
        },
      },
      animation: {
        subtleShake: 'subtleShake 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
