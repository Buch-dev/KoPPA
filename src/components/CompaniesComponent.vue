<template>
  <div
    v-if="company.mobile"
    class="flex flex-col items-center text-center text-companiesColor"
  >
    <img :src="require(`../assets/img/${company.logo}.png`)" alt="" />
    <h4 class="font-medium text-lg mt-4">{{ company.name }}</h4>
    <p class="text-sm mt-4">{{ company.field }}</p>
    <h5 class="font-medium mt-4">{{ company.followers }}</h5>
  </div>
</template>

<script>
export default {
  name: "CompaniesComponent",
  props: ["company"],
};
</script>

<style scoped></style>
