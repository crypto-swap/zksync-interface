module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'button-blue': '#2669F5',
      },
      animation: {
        // Bounces for a total of 5 seconds
        'spin-once': 'spin 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
