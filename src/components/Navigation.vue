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
      <img
        src="../assets/icons/menu-bar.png"
        alt="menu"
        class="md:hidden cursor-pointer"
        @click="toggleMobileNav"
      />
      <router-link :to="{ name: 'CreateCorperAcct' }">
        <button
          class="hidden md:block rounded border border-signUpCorperBtn text-signUpCorperBtn py-4 px-6"
        >
          SIGN IN
        </button>
      </router-link>
    </div>
    <!-- Mobile nav -->
    <transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        class="bg-white fixed top-0 right-0 w-[223px] z-10 rounded-l-[20px] cursor-pointer"
        :class="[isOpen ? 'block' : 'hidden', 'md:hidden']"
      >
        <div class="relative">
          <img
            src="../assets/icons/close-mobile.png"
            alt=""
            class="absolute right-8 top-5"
            @click="toggleMobileNav"
          />
        </div>
        <hr class="border mt-[52px]" />
        <ul class="p-4">
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Profile</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link :to="{ name: 'JobListings' }">Job Listing</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link :to="{ name: 'Resources' }">Resource</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Notifications</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Settings</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Verification</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Change Password</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Referral</router-link>
          </li>
          <li class="text-xl font-sans font-light">
            <router-link :to="{name: 'home'}">Landing Page (For now)</router-link>
          </li>
        </ul>
        <hr class="border mt-[10px]" />
        <ul class="p-4">
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="#">Log Out</router-link>
          </li>
          <li class="text-xl font-sans font-light">
            <router-link to="#">Delete Account</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
  <Refer />
</template>

<script>
import Refer from "@/components/Refer.vue";
export default {
  name: "Navigation",
  components: { Refer },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    },
  },
  mounted() {
    if (this.isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  },
};
</script>

<style scoped></style>
