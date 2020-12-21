module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'asphalt': {
    '50': '#f3f3f3', 
    '100': '#e8e8e8', 
    '200': '#c5c4c4', 
    '300': '#a3a1a1', 
    '400': '#5d5b5b', 
    '500': '#181414', 
    '600': '#161212', 
    '700': '#120f0f', 
    '800': '#0e0c0c', 
    '900': '#0c0a0a'
        },
        'rent': {
    '500': '#ff5f35', 
        },
        
      },
       fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
       backgroundColor: ['active'],
    },
  },
  plugins: [],
}
