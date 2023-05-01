<template>
  <div v-if="show" class="bg-primaryYellow">
    <div
      class="container px-[1.875rem] xl:pl-32 flex justify-between xl:justify-normal items-center py-2"
    >
      <p class="w-1/2 font-medium text-xs md:text-sm">{{ msg }}</p>
      <div class="btn-close flex xl:gap-x-36 items-center w-1/2">
        <button
          class="bg-referBtn rounded-lg py-2 md:px-3 ml-5 w-28 font-medium text-xs mr-2 md:w-36 md:text-base md:ml-40"
        >
          {{ btnMsg }}
        </button>
        <div class="close-btn h-full w-8 ml-1 md:ml-0">
          <img
            src="../assets/icons/close-banner-mobile.png"
            alt=""
            class="md:w-full md:hidden cursor-pointer"
            @click="closeRefer"
          />
          <img
            src="../assets/icons/refer-close-desktop.png"
            alt=""
            class="hidden md:block cursor-pointer"
            @click="closeRefer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Refer",
  data() {
    return {
      msg: "Refer to friends and help them get started on their Service year",
      btnMsg: "Refer a friend",
      show: true,
    };
  },
  methods: {
    closeRefer() {
      this.show = !this.show
    }
  },
};
</script>

<style scoped></style>
