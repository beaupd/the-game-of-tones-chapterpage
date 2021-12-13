module.exports = {
  mode: "jit",
  purge: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "88": "22rem"
      },
      height: {
        "88": "22rem"
      },
      colors: {
        blue: {
          DEFAULT: "#3F51B5",
          light: "#CDD5E9"
        },
        green: {
          DEFAULT: "#54BA54",
          light: "#C8E8C7"
        },
        yellow: {
          DEFAULT: "#E7EF37",
          light: "#F4F4D7"
        },
        orange: {
          DEFAULT: "#FF9400",
          light: "#F9DDB3"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
