<template>
  <div
    class="bg-jobCardBackgroundColor text-bannerBlendColor px-6 pt-4 pb-2 md:pt-10 md:pb-6 md:px-11 rounded-[20px] flex flex-col items-center justify-center text-center"
  >
    <div
      class="w-14 h-[4.435rem] bg-white flex items-center justify-center md:w-32 md:h-24"
    >
      <img :src="require(`../assets/icons/${company.logo}`)" alt="" />
    </div>
    <h3 class="mt-9 text-xl font-inter font-bold whitespace-nowrap">
      {{ company.name }}
    </h3>
    <p class="mt-3 text-sm">{{ company.title }}</p>
    <p class="mt-2 text-xs">{{ company.followers }} followers</p>
    <button
      class="bg-signUpCorperBtn text-white px-10 py-2 rounded-[10px] mt-12"
    >
      Follow
    </button>
  </div>
</template>
<script>
export default {
  name: "JobListingsCompanies",
  props: ["company"],
};
</script>
