/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.7rem', // Tamaño de fuente extra extra pequeño
        'xxl': '2.80rem', // Tamaño de fuente extra grande
        'xxxl': '3.0rem', // Tamaño de fuente extra extra grande
      }
    },
    screens: {
      'xxs': '300px',
      'xs': '320px',
      'peque':'425px',
      'esmol':'530px',
      'sm': '640px',
      'maso': '670px',
      'md': '768px',
      'larguito': '940px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
