<template>
  <div class="container text-center mt-14">
    <transition
      enter-active-class="duration-500 ease-out"
      leave-active-class="duration-500 ease-in"
    >
      <div class="contact pt-9 pb-14 px-5 rounded-3xl shadow-xl">
        <h2 class="text-5xl font-medium text-signUpCorperBtn md:underline">Contact us</h2>

        <form @submit.prevent="submitForm" class="flex flex-col gap-5 mt-10 font-sans md:gap-1">
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Your name"
            class="w-full px-5 py-7 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          />
          <br />
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Your email"
            class="w-full px-5 py-7 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          />
          <br />
          <textarea
            v-model="message"
            id="message"
            cols="10"
            rows="10"
            placeholder="Message..."
            class="w-full px-5 py-7 mb-8 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          ></textarea>
          <button type="submit" class="py-7 bg-signUpCorperBtn text-white font-bold rounded-xl">SEND</button>
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
