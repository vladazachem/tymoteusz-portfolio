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
          main: "#FFFFFF",
          lines: "#EAEAEA",
          img: "#333333",
        },
        typo: {
          main: "#000000",
          secondary: "#808080",
        },
        btns: {
          hover: "#000080",
        },
      },
      fontSize: {
        h1: ["119px", "auto"],
        h2: ["100px", "auto"],
        h3: ["60px", "auto"],
        h4: ["45px", "auto"],
        h5: ["30px", "auto"],
        h6: ["12px", "auto"],
        p: ["15px", "auto"],
        btns: ["12px", "auto"],
      },
      screens: {
        sm: "402px",
        md: "1280px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
