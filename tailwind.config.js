/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ngindex/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
require('@tailwindcss/forms'),],
}

