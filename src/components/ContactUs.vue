<template>
  <div class="container px-[1.875rem] text-center mt-14 md:mt-0">
    <transition
      enter-active-class="duration-500 ease-out"
      leave-active-class="duration-500 ease-in"
    >
      <div
        class="contact pt-9 pb-[1.875rem] px-3 md:px-5 rounded-3xl shadow-xl"
      >
        <h2
          class="text-3xl md:text-5xl font-medium text-signUpCorperBtn md:underline"
        >
          Contact us
        </h2>

        <form
          @submit.prevent="submitForm"
          class="grid gap-y-[1.875rem] mt-10 font-sans"
        >
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Your name"
            class="w-full px-5 py-3 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          />

          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Your email"
            class="w-full px-5 py-3 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          />

          <textarea
            v-model="message"
            id="message"
            placeholder="Message..."
            class="w-full px-5 py-3 mb-8 min-h-[11.25rem] border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          ></textarea>
          <button
            type="submit"
            class="py-4 bg-signUpCorperBtn text-white font-bold rounded-xl md:py-6"
          >
            SEND
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  mounted() {
    // Load form data from localStorage
    this.name = localStorage.getItem("name") || "";
    this.email = localStorage.getItem("email") || "";
    this.message = localStorage.getItem("message") || "";
  },
  methods: {
    submitForm() {
      // Save form data to localStorage
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("name", this.message);
      // Clear the form inputs
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped></style>
