const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        code: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: {
          main: "#FAFAFA",
          lines: "#F1EEEB",
          img: "#0A133D",
        },
        typo: {
          main: "#000000",
          secondary: "#7D7D7D",
        },
        btns: {
          hover: "#0A133D",
        },
      },
      fontSize: {
        h1: ["117px", "auto"],
        h2: ["100px", "auto"],
        h3: ["60px", "auto"],
        h4: ["45px", "auto"],
        h5: ["30px", "auto"],
        h6: ["12px", "auto"],
        p: ["15px", "auto"],
        btns: ["12px", "auto"],
      },
      backgroundImage: {
        'lines': "repeating-linear-gradient(0deg, transparent, transparent 124px, #E2DDD8 125px)",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
