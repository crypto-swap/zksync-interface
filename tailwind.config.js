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
        'bg-light': '#EAEAEA', // bg- prefixes to avoid conflicts with other names
        'bg-dark': '#1B1E31',
        'bg-card-light': '#F4F4F5',
        'bg-card-dark': '#1F2237', // same as text-light
        'text-light': '#1F2237',
        'text-dark': '#EFEFEF',
        // blues
        'menu-blue': '#363C5F',
        'royal-blue': '#163A91',
        'button-blue': '#2669F5',
        'bg-blue': '#5090EA',
        'font-blue': '#4B86FF',
      },
      animation: {
        'spin-once': 'spin 0.5s ease-in-out 1 reverse',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        card: '3px 3px 3px #c7c7c7, -3px -3px 3px #ffffff',
        'card-dark': '3px 3px 3px #171a29, -3px -3px 3px  #272b45',

        button:
          '-1px -1px 3px #4479e6,-1px -1px 2px #4479e6,1px 1px 1px #4479e6,1px 1px 2px #272b45',
        'button-dark':
          '-1px -1px 3px #225fdd,-1px -1px 2px #225fdd,1px 1px 1px #225fdd,1px 1px 2px #2a74ff',
        'button-hover':
          'inset 3px 3px 3px #c7c7c7, inset -3px -3px 3px #ffffff',
        'button-hover-dark':
          'inset 3px 3px 3px #171a29, inset -3px -3px 3px  #272b45',
      },
    },
  },
  plugins: [],
};
