<template>
  <form class="mt-10 hidden md:block">
    <div class="flex justify-end relative">
      <input
        type="text"
        aria-label="search"
        class="w-[325px] px-4 py-3 border-jobListingsBorderColor border-solid border-[1px] rounded-full"
      />
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute right-[18px] bottom-2"
      >
        <path
          d="M28.5491 26.3103L35.3305 33.0901L33.0901 35.3305L26.3102 28.5491C23.7876 30.5714 20.6498 31.6713 17.4167 31.6667C9.55066 31.6667 3.16666 25.2827 3.16666 17.4167C3.16666 9.55067 9.55066 3.16667 17.4167 3.16667C25.2827 3.16667 31.6667 9.55067 31.6667 17.4167C31.6713 20.6498 30.5713 23.7876 28.5491 26.3103ZM25.3729 25.1354C27.3823 23.069 28.5045 20.299 28.5 17.4167C28.5 11.2923 23.5394 6.33334 17.4167 6.33334C11.2923 6.33334 6.33332 11.2923 6.33332 17.4167C6.33332 23.5394 11.2923 28.5 17.4167 28.5C20.299 28.5045 23.069 27.3824 25.1354 25.3729L25.3729 25.1354Z"
          fill="black"
        />
      </svg>
    </div>
  </form>
  <div class="mt-14 space-y-5">
    <JobListingsCard
      v-for="post in recommendedJobs"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import JobListingsCard from "./JobListingsCard.vue";

import { recommendedJobs } from "@/utils/jobs";

export default {
  name: "JobListingsRecommended",
  components: { JobListingsCard },
  setup() {
    return { recommendedJobs };
  },
};
</script>
