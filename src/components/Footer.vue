<template>
  <footer class="mt-28">
    <ul class="container px-3 md:px-[1.875rem] flex md:gap-3 justify-end">
      <li class="text-xs font-sans whitespace-nowrap mr-2 md:mr-3">
        <router-link to="/about"> About Us</router-link>
      </li>
      <li class="text-xs font-sans whitespace-nowrap mr-2 md:mr-3">
        <router-link to="/faqs"> FAQs</router-link>
      </li>
      <li class="text-xs font-sans whitespace-nowrap mr-2 md:mr-3">
        <router-link to="/privacy-policy"> Privacy Policy</router-link>
      </li>
      <li class="text-xs font-sans whitespace-nowrap mr-2 md:mr-3">
        <router-link to="/terms"> Terms of use</router-link>
      </li>
      <li class="text-xs font-sans whitespace-nowrap mr-2 md:mr-3">
        <router-link to="/contact-us"> Contact Us</router-link>
      </li>
    </ul>
    <div
      class="footer-logo container px-[1.875rem] flex pb-16 mt-3 justify-end"
    >
      <img src="../assets/icons/copyright.png" alt="" class="mr-1" />
      <img src="../assets/icons/KoPPA-2023-mobile.png" alt="" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
