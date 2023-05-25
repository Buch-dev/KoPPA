<template>
  <div class="container px-[1.875rem] mt-32">
    <h5 class="font-semibold text-xl">Accredidated Company</h5>
    <p class="font-sans font-medium mt-5 mb-8">
      Follow and Interate with companies
    </p>
    <router-link to="#" class="font-sans md:hidden"
      >See all Companies</router-link
    >
    <div
      class="grid grid-cols-2 gap-x-5 gap-y-10 mt-5 md:grid-cols-4 md:gap-y-11"
    >
      <CompaniesComponent
        :company="company"
        v-for="(company, index) in CompaniesData"
        :key="index"
      />
      <button
        class="flex justify-center items-center"
        @click="handleNotAvailableModalOpen"
      >
        <img
          src="../assets/img/put-company.svg"
          alt="drag and drop"
          class="-mt-16"
        />
      </button>
    </div>
  </div>
  <div>
    <NotAvailableModal
      v-if="notAvailable"
      :closeModal="handleNotAvailableModalClose"
    />
    <div v-else></div>
  </div>
</template>

<script>
import CompaniesComponent from "@/components/CompaniesComponent.vue";
import NotAvailableModal from "./NotAvailableModal.vue";
export default {
  name: "Companies",
  components: { CompaniesComponent, NotAvailableModal },
  data() {
    return {
      CompaniesData: [
        {
          logo: "arike-farm-mobile.png",
          name: "Arike Farm",
          field: "Agricultural Enterprise",
          followers: "20k followers",
          mobile: true,
        },
        {
          logo: "koppa-unilever.svg",
          name: "Unilever",
          field: "Private Hospital in Lagos",
          followers: "17k followers",
          mobile: true,
        },
        {
          logo: "real-estate-mobile.png",
          name: "Rise Real Estate",
          field: "Hospitality/Management",
          followers: "18.5k followers",
          mobile: true,
        },
        {
          logo: "williams.png",
          name: "TT Williams Chambers",
          field: "Attorneys at Law",
          followers: "19.3k followers",
          mobile: false,
        },
        {
          logo: "koppa-mtn.svg",
          name: "MTN",
          field: "Telecommunication",
          followers: "25.75k followers",
          mobile: true,
        },
        {
          logo: "koppa-gt.svg",
          name: "GT Bank",
          field: "Accounting/Economics",
          followers: "25k followers",
          mobile: true,
        },
        {
          logo: "high-life.png",
          name: "High-Life Interiors",
          field: "Hospitality/Management",
          followers: "20.5k followers",
          mobile: false,
        },
        // {
        //   logo: "put-company.svg",
        //   name: null,
        //   field: null,
        //   followers: null,
        //   mobile: true,
        // },
      ],
      notAvailable: false,
    };
  },
  methods: {
    handleNotAvailableModalClose() {
      this.notAvailable = false;
    },
    handleNotAvailableModalOpen() {
      this.notAvailable = true;
    },
  },
};
</script>

<style scoped></style>
