<template>
  <div
    class="state-card px-4 py-5 bg-jobCardBackgroundColor rounded-[1.25rem] mb-5"
    :data-state-desktop="state.desktop"
  >
    <div class="flex gap-x-6 items-center">
      <img
        src="../assets/img/nysc-logo-mobile.png"
        alt=""
        class="w-6 h-6 object-contain"
      />
      <h3 class="text-blackColor text-sm whitespace-nowrap">
        NYSC Directorate {{ state.state }} state
      </h3>
    </div>
    <div class="flex gap-5 mt-9 items-center">
      <img src="../assets/icons/location.png" alt="" class="w-5 h-5" />
      <p class="text-bannerBlendColor font-inter text-xs ml-1">
        {{ state.location }}
      </p>
    </div>
    <div class="flex gap-5 mt-[10px] items-center">
      <img src="../assets/icons/tel.png" alt="" class="w-5 h-5" />
      <p class="text-bannerBlendColor font-inter text-xs">{{ state.number }}</p>
    </div>
    <div class="flex gap-5 mt-[10px] items-center">
      <img src="../assets/icons/site.png" alt="" class="w-5 h-5" />
      <p class="text-bannerBlendColor font-inter text-xs">
        {{ state.link }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateCard",
  props: ["state"],
};
</script>
