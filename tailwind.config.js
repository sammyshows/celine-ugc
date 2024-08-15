export default {
  content: [
    './pages/**/*.{vue,js}',  // Adjust paths according to your project structure
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{vue,js}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bonaNova: ['BonaNova', 'serif'],
        corinthia: ['Corinthia', 'cursive'],
        lora: ['Lora', 'serif']
      },

      width: {
        '1/10': '10%',
      },

      margin: {
        '1/10': '10%'
      },

      spacing: {
        '1/6': '16.666667%',
        '1/3': '33.333333%',
        '2/5': '40%',
        '3/5': '60%',
        '5/4': '125%',
        '3/2': '150%',
        '5/2': '250%',
        '7/2': '350%',
        '0.75': '0.1875rem'
      },

      fontSize: {
        '4-5xl': '2.5rem',
        '5-5xl': '3.5rem',
        '6-5xl': '4.5rem',
        '7-5xl': '5.5rem',
        '8-5xl': '6.5rem',
        '9-5xl': '8.5rem',
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        'tiny': '0.6rem',
        'teeny': '0.5rem',
        'atomic': '0.4rem'
      },

      lineHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '30': '7.5rem',
      },

      colors: {
        'ugc-dark-green': '#2D3B26',
        'ugc-light-green': '#8DAE7C',
        'ugc-light-green-opaque': 'rgba(141, 174, 124, 0.10)',
      }
    }
  },
  plugins: [],
}