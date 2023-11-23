/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideTop: "slideTop 0.5s ease-in-out both",
        slideLeft: "slideLeft 0.5s ease-in-out both",
      },
      aspectRatio: {
        "2.5/1": "2.8 / 1",
      },
      boxShadow: {
        "s.08": "0 4px 10px 0 rgba(0, 0, 0, 0.08)",
      },
      colors: {
        primary: "#FFB20F",
        gelap: "#252C33",
        gelap2: "#3A4750",
        putih: "#EEEEEE",
        putih2: "#F7F7F7",

        "gray-138": "rgba(138, 138, 138, 1)",
        "gray-234": "rgba(234, 234, 234, 1)",
        "black/80": "rgba(0, 0, 0, 0.8)",
        "white/20": "rgba(255, 255, 255, 0.8)",
        "white/0.15": "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        cairo: "Cairo, sans-serif",
      },
      keyframes: {
        slideTop: {
          "0%": { transform: "translateY(-30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(-30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      screens: {
        // => @media (min-width: 350px)
        sm: "350px",

        // => @media (min-width: 410px)
        ip: "410px",

        // => @media (min-width: 491px)
        md: "491px",

        // => @media (min-width: 700px)
        lg: "700px",

        // => @media (min-width: 1015px)
        xl: "1015px",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
