<template>
  <section class="fixed inset-0 z-10 h-screen bg-blackColor/80">
    <div
      class="fixed drop-shadow w-56 bg-white opacity-100 right-0 rounded-l-medium rounded-bl-medium md:rounded-medium md:top-10 md:w-[80vw] md:max-w-3xl md:left-1/2 md:-translate-x-1/2"
    >
      <div
        class="flex justify-between items-center border-b border-solid border-b-jobCardBackgroundColorHover py-2 md:py-6 md:border-b-2 md:border-b-black"
      >
        <p class="pl-5 font-semibold text-sm md:text-lg">Notifications</p>
        <button class="pr-5" @click="closeModal">
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="md:w-4 md:h-4"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 1L13 13L1 1Z"
              fill="#27302C"
            />
            <path
              d="M1 1L13 13"
              stroke="#27302C"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8794 1L1 12.8794L12.8794 1Z"
              fill="#27302C"
            />
            <path
              d="M12.8794 1L1 12.8794"
              stroke="#27302C"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        class="border-b border-b-jobCardBackgroundColorHover border-solid md:border-b md:border-b-black"
      >
        <div
          class="p-5 md:py-2 flex items-start gap-x-4 md:justify-between md:gap-x-10"
        >
          <div>
            <img
              src="../assets/img/MTN-mobile.png"
              alt="mtn"
              class="w-24 aspect-square object-cover"
            />
          </div>
          <div
            class="text-xs space-y-3 leading-5 font-inter text-bannerBlendColor"
          >
            <p class="font-semibold max-w-xl">
              Your application for the role of Legal clerk in EE Chambers has
              been approved.
              <span class="hidden md:inline"
                >check your email for further instructions</span
              >
            </p>
            <p>Tuesday, March 14th</p>
          </div>
        </div>
        <div
          class="p-5 md:py-2 flex items-start gap-x-4 md:justify-between md:gap-x-10"
        >
          <div>
            <img
              src="../assets/img/GTCO-mobile.png"
              alt="gt bank"
              class="w-24 aspect-square object-cover"
            />
          </div>
          <div
            class="text-xs space-y-3 leading-5 font-inter text-bannerBlendColor"
          >
            <p class="font-semibold max-w-xl">
              Your application for the role of Legal clerk in EE Chambers has
              been approved.
              <span class="hidden md:inline"
                >check your email for further instructions</span
              >
            </p>
            <p>Tuesday, March 14th</p>
          </div>
        </div>
        <div
          class="hidden p-5 md:py-2 items-start gap-x-4 md:flex md:justify-between md:gap-x-10"
        >
          <div>
            <img
              src="../assets/icons/direct-sales-circle-mobile.png"
              alt="gt bank"
              class="w-24 aspect-square object-cover"
            />
          </div>
          <div
            class="text-xs space-y-3 leading-5 font-inter text-bannerBlendColor"
          >
            <p class="font-semibold max-w-xl">
              Your application for the role of Legal clerk in EE Chambers has
              been approved.
              <span class="hidden md:inline"
                >check your email for further instructions</span
              >
            </p>
            <p>Tuesday, March 14th</p>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between text-jobCardBorderColor/60 text-xs py-3 px-5 md:text-base md:py-5"
      >
        <button>Clear All</button>
        <button>View All</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Modal",
  props: ["closeModal"],
  setup() {},
};
</script>
