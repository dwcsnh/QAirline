module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4A422',
        'golden-hover': '#F2E0A6',
        'golden-ramsay': '#B88A19',
        'Green':'#1A4532',
        'bgGreen': 'rgba(26, 69, 50, 0.666)',
      },
      transitionProperty: {
        'fontSize': ''
      }
    }, 
    fontFamily: {
      'space-grotesk': ['Space Grotesk']
    }, 
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Tắt reset styles
  },
}
