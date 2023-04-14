<template>
  <div
    class="banner bg-cover bg-center bg-no-repeat bg-[url('../assets/img/social-image-nysc.png')] bg-blend-overlay bg-bannerBlendColor md:bg-none md:bg-transparent md:mt-16"
  >
    <div
      class="container px-[1.875rem] text-center flex justify-center items-center md:text-left"
    >
      <div class="banner-text md:w-2/5">
        <h2
          class="text-3xl font-bold mt-52 text-white px-2 md:text-signUpCorperBtn md:mt-0 md:text-4xl md:px-0"
        >
          {{ title }}
        </h2>
        <p
          class="px-5 mt-8 text-white md:text-black md:mt-2 md:px-0 md:text-sm"
        >
          {{ text }}
        </p>
        <div
          class="btns flex justify-evenly gap-2 mt-36 mb-20 md:justify-start md:gap-6 md:mt-16 md:mb-0"
        >
          <router-link
            to="/create-corper-acct"
            class="bg-signUpCorperBtn h-16 text-white rounded-xl py-3 px-6 w-fit md:py-4 md:font-medium text-sm md:h-auto flex items-center justify-center"
          >
            Sign Up as a Corper
          </router-link>
          <router-link
            to="/create-company-acct"
            class="bg-transparent border h-16 border-white text-white rounded-xl py-3 px-6 w-fit md:border-signUpCorperBtn md:text-signUpCorperBtn md:py-4 md:font-medium text-sm md:h-auto flex items-center justify-center"
          >
            Sign Up as an Employer
          </router-link>
        </div>
      </div>
      <img
        src="../assets/img/social-image-nysc.png"
        alt="banner-img"
        class="hidden md:block w-3/5"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      title: "Connecting Corpers To The Right PPA",
      text: "Network with Corpers, Post Jobs, and find the best candidates for the role",
    };
  },
};
</script>

<style scoped></style>
