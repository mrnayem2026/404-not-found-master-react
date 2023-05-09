/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: ['Inconsolata', 'monospace'],
        Space_Mono: ['Space Mono', 'monospace'],
      }, //end of fontFamily
    },
  },
  plugins: [require("daisyui")],
}