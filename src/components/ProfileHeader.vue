<template>
  <div>
    <div class="flex flex-col items-center">
      <img
        :src="require(`../assets/img/${imgUrl}.png`)"
        class="w-36 h-40 rounded-full"
      />

      <div class="relative">
        <h1 class="mt-14 text-blackColor text-3xl">John Edwards</h1>
        <img
          src="../assets/icons/pen.png"
          alt=""
          class="w-3 h-3 absolute bottom-3 -right-10"
        />
      </div>
      <div class="flex mt-3 gap-x-10 items-center">
        <div class="flex gap-1 items-center">
          <img
            src="../assets/icons/koppa-bag.png"
            alt=""
            class="w-5 h-6 object-contain"
          />
          <small class="text-[0.625rem]">Lab Technicians</small>
        </div>
        <div class="flex gap-1 items-center">
          <img
            src="../assets/icons/like.png"
            alt=""
            class="w-[1.375rem] h-5 object-contain"
          />
          <small class="text-[0.625rem]">20</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileHeader",
  props: ["imgUrl"],
  //   setup() {
  //     return { imgUrl };
  //   },
};
</script>
