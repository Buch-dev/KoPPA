<template>
  <div class="jobCard w-11/12 mx-auto mt-5 py-6 px-7 text-blackColor shadow-md hover:shadow-lg border border-jobCardBorderColor hover:border-jobCardBackgroundColorHover bg-jobCardBackgroundColor hover:bg-white transition-all duration-500 rounded-2xl md:w-full">
    <div class="flex justify-between items-center gap-8">
      <img :src="require(`../assets/icons/${post.logo}.png`)" alt="" />
      <h6 class="font-medium">{{ post.heading }}</h6>
    </div>
    <p class="pl-14 font-sans font-normal mt-3">{{ post.venue }}</p>
    <div class="flex pl-14 gap-16 font-sans font-normal mt-3">
        <p>{{ post.state }}</p>
        <p>{{ post.duration }}</p>
    </div>
    <p class="pl-14 font-sans font-normal mt-3">{{ post.timePosted }}</p>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["post"],
};
</script>

<style scoped></style>
