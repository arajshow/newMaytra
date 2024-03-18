/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Myriad", "Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      PWhite: "#FBFBF9",
      black: "#000",
      transparent: "#ffffff00",
      PGreen: "#B2c248",
      GreenLight: "#EBF9F4",
      PBlue: "#0077BE",
      PGray: "#7D7F7C",
      PLuminous: "#00FFBF",
      Pred: "#FF401E",
      Pyellow: "#E8F4FD",
      Back: "#EAE7E7",
      galeryBlack: "#2A2B2A",
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};
