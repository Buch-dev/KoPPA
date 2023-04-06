<template>
  <div class="container">
    <h3 class="text-signUpCorperBtn font-bold text-xl pt-20">{{ title }}</h3>
    <JobCard :post="post" v-for="(post, index) in latestJobsCards" :key="index" />
  </div>
</template>

<script>
import JobCard from '@/components/JobCard.vue'

export default {
  name: "LatestJobs",
  components: {JobCard},
  data() {
    return {
      title: "Latest Jobs",
      latestJobsCards: [
        {
          logo: "direct-sales-circle-mobile",
          heading: "Direct Sales Executives-Telller Piont Ltd",
          venue: "Temple hill SuperMall",
          state: "Lagos",
          duration: "Full Time",
          timePosted: "2 days ago",
        },
        {
          logo: "direct-sales-lemon-mobile",
          heading: "Direct Sales Executives-Telller Piont Ltd",
          venue: "Temple hill SuperMall",
          state: "Lagos",
          duration: "Full Time",
          timePosted: "2 days ago",
        },
        {
          logo: "direct-sales-mobile",
          heading: "Direct Sales Executives-Telller Piont Ltd",
          venue: "Temple hill SuperMall",
          state: "Lagos",
          duration: "Full Time",
          timePosted: "2 days ago",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
