module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./assets/**/*.svg",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-gray': '#111111'
      }
    },
    fontFamily: {
      'caudex': ['Caudex', 'serif'],
      'dm': ['DM Sans', 'sans-serif']
    },
  },
  plugins: [],
}
