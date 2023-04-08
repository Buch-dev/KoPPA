<template>
  <section>
    <div class="container px-[1.875rem]">
      <div
        class="mt-10 flex flex-col items-center text-center md:flex-row-reverse md:text-left md:justify-between"
      >
        <div class="md:flex-1 md:flex md:justify-center">
          <img src="../assets/img/nysc-logo-mobile.png" alt="" />
        </div>
        <div class="mt-12 md:flex-1">
          <h1 class="text-blackColor text-3xl">About NYSC</h1>
          <p class="mt-5 text-bannerBlendColor text-sm leading-5 max-w-xl">
            The NYSC scheme was created in a bid to reconstruct, reconcile and
            rebuild the country after the Nigerian Civil war. The unfortunate
            antecedents in our national history gave impetus to the
            establishment of the National Youth Service Corps...
          </p>
          <div class="flex justify-end mt-7 md:justify-start">
            <button
              class="px-7 py-3 bg-signUpCorperBtn text-white rounded-[10px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#21513b99] md:bg-empowerBackgroundColor">
    <div class="relative bg-no-repeat md:bg-none py-8 mt-[7.5rem] md:mt-80">
      <img
        src="../assets/img/resource-mobilebg.png"
        alt=""
        class="absolute z-[-1] -top-14 right-[3px] md:hidden"
      />
      <img
        src="../assets/img/resource-screen-phones.png"
        alt=""
        class="hidden md:block absolute -top-9 md:w-80 md:h-80 lg:w-[35.125rem] lg:h-[37.1875rem] lg:-top-48 left:0"
      />
      <div class="container px-[1.875rem] md:flex md:justify-end">
        <div
          class="max-w-[30.625rem] text-center text-white md:text-left md:flex md:flex-col"
        >
          <h2 class="text-lg">Download the NYSC App</h2>
          <p class="mt-5 text-sm leading-[21.6px]">
            NYSC Official Mobile Application is a FREE application available for
            Prospective/Corps Members, Stakeholders and General Public. It uses
            your smartphone internet connection to keep you informed about
            National Youth Service Corps.
          </p>
          <div class="flex flex-col mt-6 gap-y-7 md:flex-row">
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
        </div>
      </div>
    </div>
  </section>
</template>
