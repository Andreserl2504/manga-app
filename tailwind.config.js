/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#11181C',
          background: '#fff',
          secondBackground: '#fff',
          border: '#cbcbff',
          tint: '#0a7ea4',
          icon: '#687076',
          tabIconDefault: '#687076',
          tabIconSelected: '#0a7ea4'
        },
        dark: {
          text: '#ECEDEE',
          background: '#151718',
          secondBackground: '#11181C',
          border: '#11181C',
          tint: '#fff',
          icon: '#9BA1A6',
          tabIconDefault: '#9BA1A6',
          tabIconSelected: '#fff'
        }
      },
      placeholderColor: {
        dark: '#11181C',
        light: '#ECEDEE'
      }
    }
  },
  plugins: []
}
