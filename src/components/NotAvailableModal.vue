<template>
  <section
    class="fixed inset-0 z-10 h-screen bg-blackColor/80 flex items-center justify-center"
  >
    <div
      class="w-4/5 bg-white max-w-sm shadow-sm rounded relative p-7 min-h-[140px] flex items-center justify-center"
    >
      <button class="pr-5 absolute right-0 top-3" @click="closeModal">
        <svg
          width="14"
          height="14"
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
      <p class="text-center text-2xl font-bold">Not Available For Now</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotAvailableModal",
  props: ["closeModal"],
  setup() {},
};
</script>
