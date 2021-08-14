module.exports = {
  mode: "jit",
  purge: ["layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Georama", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-shadow-city": "url('/hero/shadow-city.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
