<template>
  <div class="container mt-32">
    <h5 class="font-semibold text-xl">Accredidated Company</h5>
    <p class="font-sans font-medium mt-5 mb-8">
      Follow and Interate with companies
    </p>
    <router-link to="#" class="font-sans">See all Companies</router-link>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <CompaniesComponent
        :company="company"
        v-for="(company, index) in CompaniesData"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import CompaniesComponent from "@/components/CompaniesComponent.vue";
export default {
  name: "Companies",
  components: { CompaniesComponent },
  data() {
    return {
      CompaniesData: [
        {
          logo: "arike-farm-mobile",
          name: "Arike Farm",
          field: "Agricultural Enterprise",
          followers: "400 followers",
          mobile: true,
        },
        {
          logo: "unilever-mobile",
          name: "Unilever",
          field: "Private Hospital in Lagos",
          followers: "300 followers",
          mobile: true,
        },
        {
          logo: "real-estate-mobile",
          name: "Rise Real Estate",
          field: "Hospitality/Management",
          followers: "600 followers",
          mobile: true,
        },
        {
          logo: "williams",
          name: "TT Williams Chambers",
          field: "Attorneys at Law",
          followers: "300 followers",
          mobile: false,
        },
        {
          logo: "MTN-mobile",
          name: "MTN",
          field: "Telecommunication",
          followers: "200 followers",
          mobile: true,
        },
        {
          logo: "GTCO-mobile",
          name: "GT Bank",
          field: "Accounting/Economics",
          followers: "200 followers",
          mobile: true,
        },
        {
          logo: "high-life",
          name: "High-Life Interiors",
          field: "Hospitality/Management",
          followers: "600 followers",
          mobile: false,
        },
        {
          logo: "drag-img-mobile",
          name: null,
          field: null,
          followers: null,
          mobile: true,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
