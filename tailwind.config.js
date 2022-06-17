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
        'lighter-gray': '#FAFAFA',
        'light-gray': '#CFC3B7',
        'medium-gray': '#988F86',
        'dark-gray': '#676058',
        'darker-gray': '#111111',
        'orange': '#F46F25'
      }
    },
    fontFamily: {
      'caudex': ['Caudex', 'serif'],
      'dm': ['DM Sans', 'sans-serif']
    },
  },
  plugins: [],
}
