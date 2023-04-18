<template>
  <Nav />
  <section class="mt-16 md:mt-[7.5rem]">
    <div class="container px-5">
      <h1 class="text-center text-2xl mb-5 md:text-4xl">Contact Us</h1>
      <form
        class="max-w-3xl mx-auto px-5 pt-10 pb-14 md:px-20 bg-white rounded-medium shadow-[0_2px_45px_rgba(7,157,68,0.1)] space-y-7"
      >
        <div>
          <input
            aria-label="name"
            placeholder="Name"
            class="bg-jobCardBackgroundColor px-7 py-4 rounded-[0.625rem] w-full font-inter text-sm border-solid border-bannerBlendColor border border-opacity-25 focus:outline-none focus:border-signUpCorperBtn"
          />
        </div>
        <div>
          <input
            aria-label="email"
            placeholder="Email *"
            class="bg-jobCardBackgroundColor px-7 py-4 rounded-[0.625rem] w-full font-inter text-sm border-solid border-bannerBlendColor border border-opacity-25 focus:outline-none focus:border-signUpCorperBtn"
          />
        </div>
        <div>
          <input
            aria-label="subject"
            placeholder="Subject *"
            class="bg-jobCardBackgroundColor px-7 py-4 rounded-[0.625rem] w-full font-inter text-sm border-solid border-bannerBlendColor border border-opacity-25 focus:outline-none focus:border-signUpCorperBtn"
          />
        </div>
        <div>
          <textarea
            aria-label="message"
            placeholder="Message *"
            class="bg-jobCardBackgroundColor px-7 py-4 rounded-[0.625rem] w-full font-inter text-sm border-solid border-bannerBlendColor border border-opacity-25 focus:outline-none focus:border-signUpCorperBtn min-h-[15rem]"
          ></textarea>
        </div>
        <div class="mt-14 flex justify-end">
          <button
            class="bg-signUpCorperBtn text-white px-7 py-3 rounded-[0.625rem]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "ContactUsView",
  components: { Nav },
};
</script>
