module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b80f1",
        "primary-fade": "#a8c9ff",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "signup-bg": "url('../assets/backgrounds/signup-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
