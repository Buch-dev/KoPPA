<template>
  <div
    class="banner bg-cover bg-center bg-no-repeat bg-[url('../assets/img/koppa-bg.png')] max-h-[690px]"
  >
    <Navigation />
    <div
      class="container px-[1.875rem] text-center flex justify-center items-center md:text-left"
    >
      <div class="banner-text pb-8 pt-20 md:pb-16 md:pt-56">
        <h2
          class="text-3xl font-bold md:text-center mt-10 text-white md:text-signUpCorperBtn px-2 md:mt-0 md:text-4xl md:px-0"
        >
          {{ title }}
        </h2>
        <p
          class="px-5 mt-8 text-white md:text-center md:mt-2 md:px-0 md:text-sm"
        >
          {{ text }}
        </p>
        <div class="btns flex mb-20 md:justify-start md:gap-6 mt-16 md:mb-0">
          <router-link
            to="/create-corper-acct"
            class="bg-signUpCorperBtn border h-[4.375rem] border-signUpCorperBtn text-white rounded-[0.625rem] py-3 px-6 mr-2 w-1/2 md:py-4 md:font-medium text-sm xl:text-base md:leading-6 flex items-center justify-center hover:bg-white hover:text-signUpCorperBtn transition-colors duration-300"
          >
            Sign Up as a Corper
          </router-link>
          <router-link
            to="/create-company-acct"
            class="bg-white border h-[4.375rem] border-white text-signUpCorperBtn rounded-[0.625rem] py-3 px-[0.625rem] w-1/2 md:border-signUpCorperBtn md:py-4 md:font-medium text-sm xl:text-base md:leading-6 flex items-center justify-center hover:bg-signUpCorperBtn hover:text-white transition-colors duration-300 ml-2"
          >
            Sign Up as an Employer
          </router-link>
        </div>
      </div>
      <!-- <img
        src="../assets/img/social-image-nysc.png"
        alt="banner-img"
        class="hidden md:block w-3/5"
      /> -->
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Banner",
  components: { Navigation },
  data() {
    return {
      title: "Connecting Corpers To The Right PPA",
      text: "Network with Corpers, Post Jobs, and find the best candidates for the role",
    };
  },
};
</script>

<style scoped></style>
