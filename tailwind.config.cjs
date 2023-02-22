/** @type {import('tailwindcss').Config} */
require('dotenv').config()
const themes = require('./themes/index.cjs')
const currentTheme = process.env.VITE_APP_THEME || 'defaultTheme' 

console.log(process.env.VITE_APP_THEME)

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {...themes[currentTheme]},
  plugins: [],
}
