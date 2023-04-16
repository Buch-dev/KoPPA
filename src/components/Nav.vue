<template>
  <nav
    class="container flex w-full justify-between py-5 shadow-md md:shadow-none"
  >
    <div class="logo">
      <router-link :to="{ name: 'home' }">
        <img
          src="../assets/img/koPPA-logo.png"
          alt="logo"
          class="w-[119.15px] md:w-[181.21px]"
        />
      </router-link>
    </div>
    <div class="menu flex justify-between items-center gap-8">
      <transition
        enter-active-class="duration-500 ease-out"
        leave-active-class="duration-500 ease-in"
      >
        <div class="hidden md:flex search-bar items-center gap-7">
          <input
            type="search"
            name=""
            id="search"
            :style="{ backgroundImage: `url(${img})` }"
            class="w-[400px] h-[50px] rounded-[100px] px-5 py-7 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor"
          />
          <img :src="img" alt="" class="hidden" />
          <img src="../assets/icons/search-line.png" alt="search" class="w-8" />
        </div>
      </transition>
      <img
        src="../assets/icons/menu-bar.png"
        alt="menu"
        class="md:hidden cursor-pointer w-7 h-5 object-cover"
        @click="toggleMobileNav"
      />
      <ul class="hidden md:flex gap-10 items-center">
        <li>
          <router-link :to="{ name: 'JobListings' }">Job Listing</router-link>
        </li>
        <li><router-link :to="{ name: 'Resources' }">Resource</router-link></li>
        <li><img src="../assets/icons/bell-pinned-red.png" alt="bell" /></li>
        <li>
          <router-link to="/user">
            <img src="../assets/icons/profile-desktop.png" alt="user" />
          </router-link>
        </li>
      </ul>
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
            <router-link to="/user">Profile</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link :to="{ name: 'JobListings' }">Job Listing</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <router-link :to="{ name: 'Resources' }">Resource</router-link>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <a to="#notifications">Notifications</a>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <a to="#settings">Settings</a>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <a to="#verfication">Verification</a>
          </li>
          <li class="mb-5 text-xl font-sans font-light">
            <a to="#changepassword">Change Password</a>
          </li>
          <li class="text-xl font-sans font-light">
            <a to="#referral">Referral</a>
          </li>
        </ul>
        <hr class="border mt-[10px]" />
        <ul class="p-4">
          <li class="mb-5 text-xl font-sans font-light">
            <router-link to="/">Log Out</router-link>
          </li>
          <li class="text-xl font-sans font-light">
            <a to="#delete">Delete Account</a>
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
  name: "Nav",
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

<style></style>
