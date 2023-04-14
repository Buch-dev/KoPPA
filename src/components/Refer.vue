<template>
  <div class="bg-primaryYellow">
    <div class="container px-[1.875rem] flex justify-between items-center py-2">
      <p class="w-1/2 font-medium text-xs md:text-sm">{{ msg }}</p>
      <div class="btn-close flex justify-between gap-x-3 items-center w-1/2">
        <button
          class="bg-referBtn rounded-lg py-2 md:px-3 ml-5 w-28 font-medium text-xs md:w-36 md:text-base md:ml-40"
        >
          {{ btnMsg }}
        </button>
        <div class="close-btn h-full w-8">
          <img
            src="../assets/icons/close-banner-mobile.png"
            alt=""
            class="md:w-full md:hidden cursor-pointer"
          />
          <img
            src="../assets/icons/refer-close-desktop.png"
            alt=""
            class="hidden md:block cursor-pointer"
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
    };
  },
};
</script>

<style scoped></style>
