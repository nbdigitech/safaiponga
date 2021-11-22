module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "500px",

      md: "780px",

      lg: "1040px",

      xl: "1300px",

      "2xl": "1550px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
