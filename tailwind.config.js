/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        verdeagua: '#0EB9CB',
      naranja: '#FF8759',
      violaceo2: '#3150af',
      violaceo: '#ff8759',
      customBlue: "#547ceb"
      },
      screens: {
        mq1024: {
          raw: "screen and (max-width: 1024px)",
        },
        mq980: {
            raw: "screen and (max-width: 980px)",
          },
        mq780: {
          raw: "screen and (max-width: 780px)",
        }
      }
    },
  },
  plugins: [],
}
