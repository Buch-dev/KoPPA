/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primaryYellow: "#EDD423",
        referBtn: "#A5CD6A",
        signUpCorperBtn: "#079D44",
        bannerBlendColor: "#27302C",
        blackColor: "#001009",
        jobCardBackgroundColor: "#FAFFFC",
        jobCardBorderColor: "rgba(39, 48, 44, 0.1)",
        jobCardBackgroundColorHover: "rgba(39, 48, 44, 0.2)",
        empowerBackgroundColor: "#21513B",
        companiesColor: "#48544C",
        jobListingsBorderColor: "#487456",
        jobListingsColor: "#494949",
        jobListingsApplyBtnColor: "#034f1c",
        darkLightBlue: "#ebfff3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        medium: "1.25rem",
      },
    },
  },
  plugins: [],
};
