module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      width: ["responsive", "hover", "focus"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
}
