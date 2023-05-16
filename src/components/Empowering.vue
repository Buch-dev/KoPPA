<template>
  <div class="mt-20 md:bg-empowerBackgroundColor">
    <div
      class="md:container flex flex-col items-center md:flex-row-reverse md:gap-0"
    >
      <img
        :src="require(`../assets/img/${nyscLogo}.png`)"
        alt=""
        class="mb-12 md:w-1/2 md:mb-0"
      />
      <div class="text text-white bg-empowerBackgroundColor mt-12 md:mt-0">
        <div class="text-center px-5 md:px-0 md:text-left">
          <h2
            class="font-semibold text-3xl mt-7 md:mt-16 md:text-4xl md:underline"
          >
            {{ title }}
          </h2>
          <p class="font-sans mt-10 px-1 md:mt-12 md:text-lg md:px-0 md:w-4/5">
            {{ text }}
          </p>
          <h6 class="font-bold font-sans mt-5">Are you a Corper?</h6>
          <p class="font-sans md:text-base md:w-4/5">
            KoPPA is the perfect platform for you to network with your dream
            companies, and relevant work places to know tertiary education. We
            sympathize with the continued misplacement corps members have faced
            over the years during their service year and the need to utilize
            that period gathering relevant experience. Use KoPPa to get the
            perfect PPA today!
          </p>
          <h6 class="font-bold font-sans mt-5">Are you a Employer?</h6>
          <p class="font-sans md:text-base md:w-4/5">
            Many graduates thus become unemployable and unfit for most work
            places since their skills haven’t be rightly applied. We offer a
            solution that uses machine learning to match the right candidates to
            the right work place, and offer matching recommendations to hiring
            teams. No one does it better.
          </p>
          <div
            class="btn mt-6 mb-20 flex justify-evenly md:justify-start md:gap-5 md:mt-16"
          >
            <router-link
              to="/job-listings"
              class="py-4 px-6 rounded-xl border border-white"
            >
              Find a Job
            </router-link>
            <router-link
              to="/company"
              class="py-4 px-6 rounded-xl border border-white bg-white text-signUpCorperBtn"
            >
              Post a Job
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Empowering",
  data() {
    return {
      nyscLogo: "nysc-logo-mobile",
      title: "Empowering young graduates with the right network",
      text: "KoPPA is a professional networking platform, created to reward the Nigerian Youth for their service to the country",
    };
  },
};
</script>

<style scoped></style>
