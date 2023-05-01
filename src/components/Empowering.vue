<template>
  <div class="mt-20 md:bg-empowerBackgroundColor">
    <div
      class="md:container flex flex-col items-center md:flex-row-reverse md:gap-0"
    >
      <img
        :src="require(`../assets/img/${nyscLogo}.png`)"
        alt=""
        class=" mb-12 md:w-1/2 md:mb-0"
      />
      <div class="text text-white bg-empowerBackgroundColor mt-12 md:mt-0">
        <div class="text-center px-5 md:px-0 md:text-left">
          <h2
            class="font-semibold text-3xl mt-7 md:mt-16 md:text-4xl md:underline"
          >
            {{ title }}
          </h2>
          <p class="font-sans mt-10 px-1 md:mt-12 md:text-sm md:px-0 md:w-4/5">
            {{ text }}
          </p>
          <h6 class="font-bold font-sans mt-5">Are you a Corper?</h6>
          <p class="font-sans md:text-sm md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..
          </p>
          <h6 class="font-bold font-sans mt-5">Are you a Employer?</h6>
          <p class="font-sans md:text-sm md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div
            class="btn mt-6 mb-20 flex justify-evenly md:justify-start md:gap-5 md:mt-16"
          >
            <button class="py-4 px-6 rounded-xl border border-white">
              Find a Job
            </button>
            <button
              class="py-4 px-6 rounded-xl border border-white bg-white text-signUpCorperBtn"
            >
              Post a Job
            </button>
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
