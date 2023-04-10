<template>
  <nav
    class="container flex w-full justify-between py-5 shadow-md md:shadow-none"
  >
    <div class="logo">
      <img src="../assets/img/koPPA-logo.png" alt="logo" class="w-32" />
    </div>
    <div class="menu flex justify-between items-center gap-8">
      <!-- <input type="search" name="" id="search" class="border"> -->
      <img src="../assets/icons/search-line.png" alt="search" class="w-8" />
      <img src="../assets/icons/menu-bar.png" alt="menu" class="md:hidden" />
      <button
        class="hidden md:block rounded border border-signUpCorperBtn text-signUpCorperBtn py-4 px-6"
      >
        SIGN IN
      </button>
    </div>
  </nav>
  <Refer />
</template>

<script>
import Refer from "@/components/Refer.vue";
export default {
  name: "Navigation",
  components: { Refer },
};
</script>

<style scoped></style>
