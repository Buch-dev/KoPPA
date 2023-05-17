<template>
  <section>
    <Nav />
    <div class="container px-[1.875rem] mt-32">
      <h1 class="text-2xl text-center text-blackColor md:text-5xl">FAQs</h1>
      <div
        class="bg-jobCardBackgroundColor shadow-[0_2px_45px_rgba(7,157,68,0.1)] mt-10"
      >
        <div class="bg-white font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20">
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            What is KoPPA and how does it work? ?
          </h2>
          <p class="leading-6 text-sm"></p>
        </div>
        <div
          class="bg-darkLightBlue font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20"
        >
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            Who can sign up on KoPPA?
          </h2>
          <p class="leading-6 text-sm"></p>
        </div>
        <div class="bg-white font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20">
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            What is the NYSC scheme and how does it relate to KoPPA?
          </h2>
          <p class="leading-6 text-sm"></p>
        </div>
        <div
          class="bg-darkLightBlue font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20"
        >
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            Do job seekers need to have a college degree to join KoPPA?
          </h2>
          <p class="leading-6 text-sm"></p>
        </div>
        <div class="bg-white font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20">
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            How can employers on KoPPA provide monthly stipends to incentivize
            the employed graduates?
          </h2>
          <p class="leading-6 text-sm"></p>
        </div>
        <div
          class="bg-darkLightBlue font-inter space-y-3 p-5 md:pt-9 md:pb-5 md:px-20"
        >
          <h2
            class="text-bannerBlendColor font-semibold text-sm leading-[27px] text-left"
          >
            Are the job listings on KoPPA specifically for one-year positions?
          </h2>
          <!-- <ol class="list-decimal pl-5 md:pl-10">
            <li class="leading-6 text-sm"></li>
            <li class="leading-6 text-sm"></li>
            <li class="leading-6 text-sm"></li>
          </ol> -->
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container px-[1.875rem] mt-7"></div>
  </section>
  <section>
    <div class="container px-[1.875rem] mt-7"></div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Faq",
  components: { Nav },
};
</script>
