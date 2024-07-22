/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F6F5F3',
        dark: '#0A0A0A',
        green: '#2EC4B6',
        yellow: '#FFBF69',
        orange: '#FF9F1C',
        primary: '#71c1c0'
      }
    }
  },
  plugins: []
}
