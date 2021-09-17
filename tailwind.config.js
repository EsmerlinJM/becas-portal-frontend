module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      textColor: {
        'currentBlue': '#003876',
        'currentRed':'#ee2a24',
        
      },
      backgroundImage: {
        'lines-pattern': "url('./img/pattern.png",
       },
       backgroundColor: theme => ({
        ...theme('colors'),
        'lighBlue':'#E7F1FD'
       })
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)
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
  plugins: [require("@tailwindcss/typography")],
};
