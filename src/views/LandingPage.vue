<template>
  <div class="home">
    <Banner />
    <LatestJobs />
    <Empowering />
    <Companies />
    <div class="flex flex-col md:flex-row md:container">
      <WhyKoppa class="md:w-1/2" />
      <ContactUs class="md:w-1/2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import LatestJobs from "@/components/LatestJobs.vue";
import Empowering from "@/components/Empowering.vue";
import Companies from "@/components/Companies.vue";
import WhyKoppa from "@/components/WhyKoppa.vue";
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: "LandingPage",
  components: { Banner, LatestJobs, Empowering, Companies, WhyKoppa, ContactUs },
  data() {
    return {};
  },
};
</script>
