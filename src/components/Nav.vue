<template>
  <nav
    v-if="signedIn || token"
    class="container flex w-full justify-between py-5 shadow-md md:shadow-none overflow-x-hidden"
  >
    <div class="logo">
      <router-link to="/home">
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
      <ul v-if="signedIn || token" class="hidden md:flex gap-10 items-center">
        <li :class="$route.path === '/company' ? 'hidden' : 'inline-block'">
          <router-link :to="{ name: 'JobListings' }">Job Listing</router-link>
        </li>
        <li :class="$route.path === '/company' ? 'hidden' : 'inline-block'">
          <router-link :to="{ name: 'Resources' }">Resource</router-link>
        </li>
        <li>
          <button @click="handleModalOpen">
            <img src="../assets/icons/bell-pinned-red.png" alt="bell" />
          </button>
        </li>
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
        class="bg-white fixed top-0 right-0 w-[223px] z-10 rounded-l-[20px] duration-500 transition-transform ease-out"
        :class="[isOpen ? 'translate-x-0' : 'translate-x-full', 'md:hidden']"
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
          <li
            class="mb-5 text-xl font-sans font-light"
            @click="handleModalOpen"
          >
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
            <router-link to="/" @click="handleLogOut">Log Out</router-link>
          </li>
          <li class="text-xl font-sans font-light">
            <a to="#delete">Delete Account</a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
  <Navigation v-else />
  <Refer v-if="signedIn || token" />
  <div v-else></div>
  <Modal v-if="openModal" :closeModal="handleModalClose" />
  <div v-else></div>
</template>

<script>
import Refer from "@/components/Refer.vue";
import Navigation from "./Navigation.vue";
import Modal from "./Modal.vue";
export default {
  name: "Nav",
  components: { Refer, Modal, Navigation },
  data() {
    return {
      isOpen: false,
      openModal: false,
      token: "",
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
    handleModalOpen() {
      this.openModal = true;
      if (this.isOpen) {
        this.isOpen = false;
        document.body.classList.remove("menu-open");
        return;
      }
    },
    handleModalClose() {
      this.openModal = false;
    },
    handleLogOut() {
      this.$store.dispatch("signOut");
    },
  },
  mounted() {
    if (this.isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    this.token = localStorage.getItem("koppa-token");
  },
  computed: {
    signedIn() {
      console.log(this.$store.getters.getSignedIn);
      return this.$store.getters.getSignedIn;
    },
  },
};
</script>

<style></style>
