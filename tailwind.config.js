/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#72ECCE",
        mintTransparent: "rgba(114, 236, 206, 0.7)",
        cybPink: "#FB6C9C",
        cybGrey: "#2F353E",
        cybPurple: "#493960",
        cybBlue: "#0B4D77",
      },
    },
  },
  plugins: [],
};
