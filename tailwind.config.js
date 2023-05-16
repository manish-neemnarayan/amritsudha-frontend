/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        animation: {
          scroll: 'scroll 40s linear infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(calc(-250px * 3))' },
          },
        },
      },
    },
  plugins: [],
}