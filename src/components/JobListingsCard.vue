<template>
  <div
    class="px-3 pt-6 pb-2 rounded-[20px] md:pt-9 md:px-8"
    style="background-color: #e1efec"
  >
    <div class="flex justify-between">
      <div class="flex gap-x-2 w-1/2 md:w-full md:gap-x-4">
        <div>
          <div
            class="w-14 h-14 md:w-28 md:h-28 bg-white rounded-full flex justify-center items-center"
          >
            <picture>
              <source
                :srcset="require(`../assets/icons/${post.logo}`)"
                media="(min-width:768px)"
              />
              <img
                :src="require(`../assets/icons/${post.mobilelogo}`)"
                alt=""
              />
            </picture>
            <!-- <img
              :src="require(`../assets/icons/${post.logo}.svg`)"
              alt=""
              class="hidden md:block"
            />
            <img
              :src="require(`../assets/icons/${post.mobilelogo}.svg`)"
              alt=""
              class="block md:hidden"
            /> -->
          </div>
        </div>
        <div class="text-companiesColor">
          <h2
            class="font-inter font-normal text-xs md:text-lg whitespace-nowrap"
          >
            {{ post.heading }}
          </h2>
          <ul class="flex gap-x-6">
            <li class="font-bold md:font-normal text-sm whitespace-nowrap">
              {{ post.companyname }}
            </li>
            <li class="list-disc hidden md:block text-sm">
              {{ post.state }}
            </li>
            <li class="list-disc hidden md:block text-sm">
              {{ post.duration }}
            </li>
          </ul>
          <p class="md:hidden mt-2 text-xs max-w-[138px]">
            {{ post.mobileinfo }}
          </p>
          <p class="hidden md:block mt-2 leading-6 text-sm max-w-[43rem]">
            {{ post.desktopinfo }}
          </p>
          <p class="text-xs mt-4 md:mt-9">Posted {{ post.timeposted }}</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center space-y-4 md:space-y-9 mt-11 md:mt-4 md:ml-0 md:justify-between md:pb-2"
      >
        <button
          class="bg-jobListingsApplyBtnColor text-white text-xs uppercase py-1 rounded-md md:bg-signUpCorperBtn px-4 md:rounded-[10px] md:text-base md:px-6 md:py-2"
          @click="handleNotAvailableModalOpen"
        >
          Apply
        </button>

        <button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="#001005"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              d="M18 11.25V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18H1.5C1.10218 18 0.720644 17.842 0.43934 17.5607C0.158035 17.2794 0 16.8978 0 16.5V11.25C0 11.0511 0.0790178 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5C0.948912 10.5 1.13968 10.579 1.28033 10.7197C1.42098 10.8603 1.5 11.0511 1.5 11.25V16.5H16.5V11.25C16.5 11.0511 16.579 10.8603 16.7197 10.7197C16.8603 10.579 17.0511 10.5 17.25 10.5C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25ZM8.46937 11.7806C8.53903 11.8504 8.62175 11.9057 8.7128 11.9434C8.80384 11.9812 8.90144 12.0006 9 12.0006C9.09856 12.0006 9.19616 11.9812 9.2872 11.9434C9.37825 11.9057 9.46097 11.8504 9.53063 11.7806L13.2806 8.03063C13.3503 7.96094 13.4056 7.87822 13.4433 7.78717C13.481 7.69613 13.5004 7.59855 13.5004 7.5C13.5004 7.40145 13.481 7.30387 13.4433 7.21283C13.4056 7.12178 13.3503 7.03906 13.2806 6.96937C13.2109 6.89969 13.1282 6.84442 13.0372 6.8067C12.9461 6.76899 12.8485 6.74958 12.75 6.74958C12.6515 6.74958 12.5539 6.76899 12.4628 6.8067C12.3718 6.84442 12.2891 6.89969 12.2194 6.96937L9.75 9.43969V0.75C9.75 0.551088 9.67098 0.360322 9.53033 0.21967C9.38968 0.0790178 9.19891 0 9 0C8.80109 0 8.61032 0.0790178 8.46967 0.21967C8.32902 0.360322 8.25 0.551088 8.25 0.75V9.43969L5.78063 6.96937C5.63989 6.82864 5.44902 6.74958 5.25 6.74958C5.05098 6.74958 4.86011 6.82864 4.71937 6.96937C4.57864 7.11011 4.49958 7.30098 4.49958 7.5C4.49958 7.69902 4.57864 7.88989 4.71937 8.03063L8.46937 11.7806Z"
              fill="#001005"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <NotAvailableModal
    v-if="notAvailable"
    :closeModal="handleNotAvailableModalClose"
  />
  <div v-else></div>
</template>

<script>
import { ref } from "vue";

import NotAvailableModal from "./NotAvailableModal.vue";
export default {
  name: "JobListingsCard",
  props: ["post"],
  components: { NotAvailableModal },
  setup() {
    const notAvailable = ref(false);

    const handleNotAvailableModalClose = () => {
      notAvailable.value = false;
    };
    const handleNotAvailableModalOpen = () => {
      notAvailable.value = true;
    };

    return {
      notAvailable,
      handleNotAvailableModalClose,
      handleNotAvailableModalOpen,
    };
  },
};
</script>
