/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        sans: ['"source-han-sans-vf"', "sans-serif"],
        custom: ["tilt-warp", "sans-serif"]
      },
      colors: {
        lite: '#C59B76',
        toolite: '#BDFFFD',
        dark: '#344966',
        toodark: '#0D1821'
      }
    },
  },
  plugins: [],
}