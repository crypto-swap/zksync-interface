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
      boxShadow: {
        'inset-text': 'inset 7px 7px 14px #bababa, inset -7px -7px 14px #ffffff',
        'card-text': '7px 7px 7px #bababa, -7px -7px 7px #ffffff',
        'inset-text-dark': 'inset 7px 7px 14px #161827, inset -7px -7px 14px #20243b',
        'card-text-dark': '7px 7px 7px #161827, -7px -7px 7px #20243b'
      },
    },
  },
  plugins: [],
}
