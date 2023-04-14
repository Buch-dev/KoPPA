<template>
  <div
    class="text-center text-companiesColor"
    :class="{ mobileCompany: !company.mobile }"
  >
    <img
      :src="require(`../assets/img/${company.logo}.png`)"
      alt=""
      class="w-full aspect-auto max-h-[14.125rem] object-cover rounded-medium"
    />
    <h4 class="text-sm font-medium md:text-lg mt-4">{{ company.name }}</h4>
    <p class="text-xs md:text-sm mt-4 whitespace-nowrap">{{ company.field }}</p>
    <h5 class="text-xs md:text-sm font-medium mt-4">{{ company.followers }}</h5>
  </div>
</template>

<script>
export default {
  name: "CompaniesComponent",
  props: ["company"],
};
</script>

<style scoped></style>
