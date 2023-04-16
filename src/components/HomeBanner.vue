<template>
  <div
    class="banner bg-cover bg-center bg-no-repeat bg-[url('../assets/img/social-image-nysc.png')] bg-blend-overlay bg-bannerBlendColor md:bg-none md:bg-transparent md:mt-16"
  >
    <div
      class="container text-center flex justify-center items-center md:text-left"
    >
      <div class="banner-text md:w-2/5">
        <h2
          class="text-3xl font-bold mt-52 text-white px-2 md:text-signUpCorperBtn md:mt-0 md:text-6xl md:px-0"
        >
          <span v-if="user">Hi {{ user }}</span> <span v-else>{{ title }}</span>
        </h2>
        <p
          class="md:hidden px-5 mt-8 font-sans text-lg text-white md:text-black md:mt-2 md:px-0 md:text-lg"
        >
          {{ text }}
        </p>
        <p
          class="hidden md:block px-5 mt-8 font-sans text-lg text-white md:text-black md:mt-2 md:px-0 md:text-lg"
        >
          {{ text2 }}
        </p>
        <div
          class="btns flex justify-evenly gap-2 mt-36 mb-20 md:justify-start md:gap-6 md:mt-16 md:mb-0"
        >
          <button
            class="bg-signUpCorperBtn text-white rounded-xl py-6 px-7 font-semibold font-sans w-40 md:py-4 md:font-medium md:text-sm md:px-1"
          >
            Browse Jobs
          </button>
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
      title: "Hi Edward",
      text: "Network with Corpers, join a community and grow with like-minded communities",
      text2:
        "Network with Corpers, browse through Jobs, and find the best role suited for your career and growth.",
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped></style>
