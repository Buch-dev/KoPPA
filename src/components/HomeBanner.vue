<template>
  <div
    class="banner bg-cover bg-center bg-no-repeat bg-[url('../assets/img/koppa-bg.png')] max-h-[690px]"
  >
    <Nav />
    <div
      class="container text-center flex justify-center items-center md:text-left"
    >
      <div class="banner-text text-center pb-8 pt-20 md:pb-16 md:pt-56">
        <h2
          class="text-3xl font-bold mt-10 text-white px-2 md:text-signUpCorperBtn md:mt-0 md:text-6xl md:px-0"
        >
          <span v-if="user">Hi {{ user }}</span> <span v-else>{{ title }}</span>
        </h2>
        <p
          class="md:hidden px-5 mt-8 font-sans text-lg text-white md:text-center md:mt-2 md:px-0 md:text-lg"
        >
          {{ text }}
        </p>
        <p
          class="hidden md:block px-5 mt-8 font-sans text-lg text-white md:text-center md:mt-2 md:px-0 md:text-lg"
        >
          {{ text2 }}
        </p>
        <div
          class="btns flex justify-evenly gap-2 mb-20 md:justify-center md:gap-6 mt-16 md:mb-0"
        >
          <button
            class="bg-signUpCorperBtn text-white rounded-xl py-6 px-7 font-semibold font-sans w-40 md:py-4 md:font-medium md:text-sm md:px-1"
            @click="goToJobs"
          >
            Browse Jobs
          </button>
        </div>
      </div>
      <!-- <img
        src="../assets/img/social-image-nysc.png"
        alt="banner-img"
        class="hidden w-3/5"
      /> -->
    </div>
  </div>
</template>

<script>
import router from "@/router";
import Nav from "@/components/Nav.vue";
export default {
  name: "Banner",
  components: { Nav },
  data() {
    return {
      title: "Hi Edward",
      text: "Network with Corpers, join a community and grow with like-minded communities",
      text2:
        "Network with Corpers, browse through Jobs, and find the best role suited for your career and growth.",
    };
  },
  methods: {
    goToJobs() {
      router.push("/job-listings");
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped></style>
