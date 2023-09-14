/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
    "./src/views/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        slowTyping: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        slowBlink: {
          "0%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "transparent"
          }
        }
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
        slowTyping: "typing 3s steps(30), slowBlink .1s infinite"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}