/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        // add more fonts ...name: [...source-of-font]
      },
      backgroundImage: {
        'hero-background': "url('../images/Rainbow_flag_breeze-cropped.jpg')",
      },
      container: {
        center: true,
      },
      colors: {
        'pride-red': '#ed1c24',
        'pride-blue': '#223f9a',
        'pride-orange': '#f26522',
        'pride-green': '#008e41',
        'pride-purple': '#7f3f98',
        'pride-gold': '#f0c900',
        'pride-platinum': '#e5e4e2',
        'pride-silver': '#c0c0c0',
        'pride-bronze': '##cd7f32',
      },
    },
  },
  plugins: [
    // add your tailwind plugins
  ],
};
