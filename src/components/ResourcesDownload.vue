<template>
  <div
    class="relative max-h-[23rem] md:max-h-max overflow-y-hidden md:overflow-y-visible md:bg-none pt-5 pb-9 mt-[7.5rem] md:mt-80"
  >
    <!-- <img
      src="../assets/img/resource-screen-phones.png"
      alt=""
      class="hidden md:block absolute -top-9 md:left-0 md:w-96 md:h-96 xl:w-[35.125rem] xl:h-[37.1875rem] xl:-top-48 xl:left-10"
    /> -->
    <div class="container px-[1.875rem] md:flex md:justify-end relative">
      <img
        src="../assets/img/resource-screen-phones.png"
        alt=""
        class="hidden md:block absolute -top-20 md:left-0 md:w-96 md:h-96 xl:w-[35.125rem] xl:h-[37.1875rem] xl:-top-48 xl:left-10"
      />
      <div
        class="max-w-[30.625rem] text-center text-white md:pl-40 md:text-left md:flex md:flex-col xl:pl-0"
      >
        <h2 class="text-lg">Download the NYSC App</h2>
        <p class="mt-5 text-sm leading-[21.6px]">
          NYSC Official Mobile Application is a FREE application available for
          Prospective/Corps Members, Stakeholders and General Public. It uses
          your smartphone internet connection to keep you informed about
          National Youth Service Corps.
        </p>
        <div class="flex mt-[0.625rem]">
          <div class="flex flex-col mt-6 gap-y-5 md:flex-row">
            <img
              src="../assets/img/googleplay.png"
              alt=""
              class="w-40 h-12 object-contain"
            />
            <img
              src="../assets/img/appstore.png"
              alt=""
              class="w-40 h-12 object-contain"
            />
          </div>
          <div
            class="md:hidden relative after:absolute after:inset-0 after:bg-empowerBackgroundColor/25"
          >
            <img
              src="../assets/img/resource-mobile-bg.png"
              alt=""
              class="md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesDownload",
};
</script>
