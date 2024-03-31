import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      myriad: ['Myriad Pro'],
      acumin: ["acumin-pro", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
      hindi: ["Mukta",]
    },
    fontWeight: {
      'myriad': 700,
      'acumin': 500,
    },
    fontStyle: {
      'myriad': 'normal',
      'acumin': 'normal',
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
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
