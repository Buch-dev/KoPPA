<template>
  <div class="container px-[1.875rem]">
    <div
      class="mt-10 flex flex-col items-center text-center md:flex-row-reverse md:text-left md:justify-between"
    >
      <div class="md:flex-1 md:flex md:justify-center">
        <img src="../assets/img/nysc-logo-mobile.png" alt="" />
      </div>
      <div class="mt-12 md:flex-1">
        <h1 class="text-blackColor text-3xl">About NYSC</h1>
        <p class="mt-5 text-bannerBlendColor text-sm leading-5 max-w-xl">
          The NYSC scheme was created in a bid to reconstruct, reconcile and
          rebuild the country after the Nigerian Civil war. The unfortunate
          antecedents in our national history gave impetus to the establishment
          of the National Youth Service Corps...
        </p>
        <div class="flex justify-end mt-7 md:justify-start">
          <button
            class="px-7 py-3 bg-signUpCorperBtn text-white rounded-[10px]"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesHero",
};
</script>
