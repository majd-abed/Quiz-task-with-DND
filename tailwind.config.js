/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xlx': { 'max': '1535px' },
        'xlx': { 'max': '1279px' },
        'lgx': { 'max': '1023px' },
        'mdx': { 'max': '767px' },
        'smx': { 'max': '639px' },
      },
    },
  },
  plugins: [],
}