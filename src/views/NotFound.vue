<template>
  <section>
    <div
      class="container flex flex-col justify-center gap-y-6 items-center h-screen text-bannerBlendColor"
    >
      <h2 class="text-8xl md:text-9xl tracking-[1rem]">404</h2>

      <router-link
        to="/home"
        class="w-fit px-3 py-2 bg-signUpCorperBtn text-white hover:bg-white hover:text-bannerBlendColor duration-300 transition-colors"
        >Go Home</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
