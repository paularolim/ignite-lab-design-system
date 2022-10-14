/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xlg: 24,
        "2xlg": 32,
      },
      colors: {
        "gray-1000": "#000000",
        "gray-900": "#121214",
        "gray-800": "#202024",
        "gray-400": "#7c7c8a",
        "gray-100": "#e1e1e6",
        "cyan-500": "#81d8f7",
        "cyan-300": "#9be1fb",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
