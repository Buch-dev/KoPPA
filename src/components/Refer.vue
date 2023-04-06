<template>
  <div class="bg-primaryYellow">
    <div
      class="container flex justify-between items-center py-4"
    >
      <p class="w-1/2 font-medium text-sm">{{ msg }}</p>
      <div class="btn-close flex justify-between w-1/2">
        <button
          class="bg-referBtn rounded-lg py-1 px-3 ml-5 w-28 font-medium text-sm md:w-36 md:text-base md:ml-40"
        >
          {{ btnMsg }}
        </button>
        <div class="close-btn h-full w-8">
          <img src="../assets/icons/close-banner-mobile.png" alt="" class="md:w-full" />
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
