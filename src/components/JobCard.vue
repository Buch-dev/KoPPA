<template>
  <div
    class="jobCard mt-5 py-5 px-5 text-blackColor shadow-md hover:shadow-lg border border-jobCardBorderColor hover:border-jobCardBackgroundColorHover bg-jobCardBackgroundColor hover:bg-white transition-all duration-500 rounded-2xl md:w-full text-sm"
  >
    <div class="md:flex md:justify-between items-start">
      <div class="flex justify-between items-start gap-8">
        <img :src="require(`../assets/icons/${post.logo}.png`)" alt="" />
        <div class="md:space-y-7">
          <h6 class="font-medium">{{ post.heading }}</h6>
          <div
            class="mt-3 md:flex md:gap-x-2 md:items-center font-sans font-normal text-bannerBlendColor"
          >
            <p class="">{{ post.venue }}</p>
            <p class="hidden md:block">{{ post.duration }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex pl-14 gap-16 font-sans font-normal mt-3 md:flex-col md:gap-y-0 md:space-y-7 md:pl-0 md:mt-0"
      >
        <p>{{ post.state }}</p>
        <p class="md:hidden">{{ post.duration }}</p>
        <p class="hidden font-sans font-normal mt-3 md:block">
          {{ post.timePosted }}
        </p>
      </div>
    </div>
    <p class="pl-14 font-sans font-normal mt-3 md:hidden">
      {{ post.timePosted }}
    </p>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["post"],
};
</script>

<style scoped></style>
