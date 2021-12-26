module.exports = { 
  content: ["./src/**/*.{html,js}"],
  theme: {  
   
    extend: {
     colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'whitebg': '#F8F8F8',
          'font': '#335C74',          
          'primary': '#0AC9C9', 
          'lprimary': '#18E3E3',
          'secondary': '#FFB887 ',
          'fontprimary': '#3B8A95',

          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',   
          'tahiti': {
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
          },
          'silver': '#evebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },      
        transformOrigin: {
        'ayaya-center': '-50% -50%',
        },
        borderRadius: {
          'xl': '1.7rem',
        },

    },
  },
  plugins: [],
}
