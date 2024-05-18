/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astglobalcolor5: '#f8f6f3',
        astglobalcolor4: '#654321',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(160deg, var(--e-global-color-astglobalcolor5) 0%, var(--e-global-color-astglobalcolor4) 100%)',
      },
    },
  },
  plugins: [],
}

