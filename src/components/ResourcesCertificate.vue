<template>
  <div
    class="container px-[1.875rem] mt-[7.5rem] py-5 md:py-12 text-white flex justify-start relative"
  >
    <div class="pr-[5.5rem]">
      <h2 class="leading-6 text-lg md:text-2xl">
        INFORMATION ON NYSC CERTIFICATES
      </h2>
      <div class="space-y-[0.95rem] mt-7 md:space-y-7 max-w-md">
        <p class="text-sm leading-[1.25rem] md:text-base">
          Verification of Certificates
        </p>
        <p class="text-sm leading-[1.25rem] md:text-base">
          Collection/Replacement of certificate of National Service
        </p>
        <p class="text-sm leading-[1.25rem] md:text-base">
          Collection/Replacement of certificate of Exemption
        </p>
      </div>
    </div>
    <div
      class="overflow-x-hidden absolute -top-2 right-0 md:-right-4 lg:right-48"
    >
      <img
        src="../assets/img/cert-mobile.png"
        alt="nysc certificate"
        class="w-[7.5rem] h-[19.75rem] object-cover md:hidden"
      />
      <img
        src="../assets/img/cert-img-desktop.png"
        class="hidden md:block w-80"
      />
    </div>
  </div>bbbbbbbbb
</template>

<script>
export default {
  name: "ResourcesCertificate",
};
</script>
