<template>
  <div class="home">
    <Nav />
    <HomeBanner />
    <LatestJobs />
    <Empowering />
    <Companies />
    <div
      class="flex flex-col mt-14 md:flex-row md:container md:px-[1.875rem] md:items-start md:mt-28"
    >
      <WhyKoppa class="md:w-1/2" />
      <ContactUs class="md:w-1/2" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import LatestJobs from "@/components/LatestJobs.vue";
import Empowering from "@/components/Empowering.vue";
import Companies from "@/components/Companies.vue";
import WhyKoppa from "@/components/WhyKoppa.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    HomeBanner,
    LatestJobs,
    Empowering,
    Companies,
    WhyKoppa,
    ContactUs,
  },
};
</script>

<style scoped></style>
