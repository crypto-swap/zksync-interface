module.exports = {
  
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '4.167%': '4.167%', 
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
        'card': '3px 3px 3px #c7c7c7, -3px -3px 3px #ffffff',
        'card-dark': '3px 3px 3px #171a29, -3px -3px 3px  #272b45',
        'button':
          '-1px -1px 3px #4479e6,-1px -1px 2px #4479e6,1px 1px 1px #4479e6,1px 1px 2px #272b45',
        'button-dark':
          '-1px -1px 3px #225fdd,-1px -1px 2px #225fdd,1px 1px 1px #225fdd,1px 1px 2px #2a74ff',
        'button-hover':
          'inset 3px 3px 3px #c7c7c7, inset -3px -3px 3px #ffffff',
        'button-hover-dark':
          'inset 3px 3px 3px #171a29, inset -3px -3px 3px  #272b45',
        'green-card':
          '5px 5px 0px #609664, -5px -5px 0px #82cc88',
        'green-card-hover':
          'inset 15px 15px 15px #609664, inset -15px -15px 15px #82cc88',
        'blue-card':
          '5px 5px 0px #4072d9, -5px -5px 0px #569aff',
        'blue-card-hover':
          'inset 15px 15px 15px #4072d9, inset -15px -15px 15px #569aff',
        'grey-card':
          '5px 5px 0px #2e3351, -5px -5px 0px #3e456d',
        'grey-card-hover':
          'inset 15px 15px 15px #2e3351, inset -15px -15px 15px #3e456d',
        'blue-button':
          '2px 2px 0px #2059d0, -2px -2px 0px #2c79ff',
        'blue-button-hover':
          'inset 3px 3px 0px #2059d0, inset -3px -3px 0px #2c79ff',
        'search':
          '4px 4px 7px #c7c7c7, -4px -4px 7px #ffffff',
        'search-dark':
          '4px 4px 7px #171a29, -4px -4px 7px #272b45',
        'search-border':
          'inset 10px 10px 15px -10px #c7c7c7, inset -10px -10px 15px -10px #ffffff',
        'search-border-dark':
          'inset 10px 10px 15px -10px #171a29, inset -10px -10px 15px -10px #272b45',
      },
    },
  },
  plugins: [],
};
