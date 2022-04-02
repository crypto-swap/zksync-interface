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
        'bg-light': '#EDEDED',
        'card-light': '#F4F4F5',
        'bg-dark': '#1B1E31',
        'card-dark': '#1F2237',
        'text-light': '#1F2237',
        'text-dark': '#EFEFEF',
        'menu-blue': '#363C5F',
        'royal-blue': '#163A91',
        'button-blue': '#2669F5', 
        'bg-blue': '#5090EA',
        'font-blue': '#4B86FF',
      },
      animation: {
        // Bounces for a total of 5 seconds
        'spin-once': 'spin 1s ease-in-out 1',
      },
      boxShadow: {
        'inset-text': 'inset 7px 7px 14px #bababa, inset -7px -7px 14px #ffffff',
        'card-text': '7px 7px 7px #bababa, -7px -7px 7px #ffffff',
        'inset-text-dark': 'inset 7px 7px 14px #161827, inset -7px -7px 14px #20243b',
        'card-text-dark': '7px 7px 7px #161827, -7px -7px 7px #20243b',
        'card': '5px 5px 10px #b7b7b8, -5px -5px 10px #ffffff',
        'card-dark': '5px 5px 10px #171a29, -5px -5px 10px  #272b45',
        'button':'-1px -1px 3px #4479e6,-1px -1px 2px #4479e6,1px 1px 1px #4479e6,1px 1px 2px #272b45',
        'button-dark':'-1px -1px 3px #225fdd,-1px -1px 2px #225fdd,1px 1px 1px #225fdd,1px 1px 2px #2a74ff',
      },
    },
  },
  plugins: [],
}
