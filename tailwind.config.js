// run npx tailwindcss-cli build tailwind.css -o public/style.css

module.exports = {
  content : ['./src/**/*.{html,md,njk}','.eleventy.js'],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'heading': ['Poppins', 'sans-serif']
    },
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    // disbaled 2xl for now
    // '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
}
