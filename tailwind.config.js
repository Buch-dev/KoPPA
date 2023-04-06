/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        primaryYellow: '#EDD423',
        referBtn: '#A5CD6A',
        signUpCorperBtn: '#079D44',
        bannerBlendColor: '#27302C',
        blackColor: '#001009',
        jobCardBackgroundColor: '#FAFFFC',
        jobCardBorderColor: '1px solid rgba(39, 48, 44, 0.1)',
        jobCardBackgroundColorHover: '1px solid rgba(39, 48, 44, 0.2)',
        empowerBackgroundColor: '#21513B',
        companiesColor: '#48544C',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

