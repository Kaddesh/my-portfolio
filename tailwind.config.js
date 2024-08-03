/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
     
      spacing: {
        '16': '4rem',
      },
      borderWidth: {
        '2': '2px',
      },
      fontSize: {
        'xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

