<template>
  <section>
    <div class="container px-5 md:px-8 max-w-3xl">
      <div class="text-center mt-[1.875rem] relative">
        <h1 class="text-4xl text-[#363636] font-bold">KoPPA</h1>
        <button class="absolute top-3 left-0" @click="goBack">
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-4 md:w-4 md:h-6"
          >
            <path
              d="M16.3228 3.42854C17.2251 2.64422 17.2251 1.37257 16.3228 0.588253C15.4202 -0.196084 13.9572 -0.196084 13.0547 0.588253L0.0120307 11.9241C-0.00407563 11.9381 -0.00398304 11.9609 0.0121464 11.9749C0.0281602 11.9888 0.0282528 12.0114 0.0122621 12.0254C-0.0037518 12.0393 -0.0037287 12.0618 0.0122621 12.0757L13.0551 23.4118C13.9577 24.1961 15.4206 24.1961 16.3232 23.4118C17.2256 22.6273 17.2256 21.3558 16.3232 20.5713L6.46083 11.9998L16.3228 3.42854Z"
              fill="#001009"
            />
          </svg>
        </button>
      </div>
      <div class="text-center mt-20 text-companiesColor text-sm mb-2">
        <h2 class="text-blackColor text-3xl font-bold mb-3">
          Create An Account
        </h2>
        <p>We are glad you want to be part of our network.</p>
        <p>Fill in your details to be part of the network</p>
      </div>

      <form
        class="mt-6 p-5 bg-jobCardBackgroundColor text-companiesColor font-bold text-sm font-inter"
      >
        <h3
          class="text-center text-blackColor font-bold text-xl md:text-3xl mb-6"
        >
          Company Account Setup
        </h3>
        <div class="space-y-6">
          <div class="space-y-2">
            <label for="companyname">Company Name</label>
            <input
              type="text"
              id="companyname"
              class="w-full rounded-[0.625rem] border-[0.5px] border-opacity-25 border-solid border-jobListingsBorderColor px-3 py-3 text-base font-normal block"
            />
          </div>
          <div class="space-y-2">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="w-full rounded-[0.625rem] border-[0.5px] border-opacity-25 border-solid border-jobListingsBorderColor px-3 py-3 text-base font-normal block"
            />
          </div>
          <div class="space-y-2">
            <label for="industry">Industry</label>
            <input
              type="text"
              id="industry"
              class="w-full rounded-[0.625rem] border-[0.5px] border-opacity-25 border-solid border-jobListingsBorderColor px-3 py-3 text-base font-normal block"
            />
          </div>
          <div class="space-y-2">
            <label for="contact">Contact Number</label>
            <input
              type="text"
              id="contact"
              class="w-full rounded-[0.625rem] border-[0.5px] border-opacity-25 border-solid border-jobListingsBorderColor px-3 py-3 text-base font-normal block"
            />
          </div>
          <div class="space-y-2">
            <label for="registration">Company Registration Number</label>
            <input
              type="text"
              id="registration"
              class="w-full rounded-[0.625rem] border-[0.5px] border-opacity-25 border-solid border-jobListingsBorderColor px-3 py-3 text-base font-normal block"
            />
          </div>
        </div>
        <div class="mt-20">
          <button
            class="bg-signUpCorperBtn text-white w-full p-2 md:p-4 rounded-[0.625rem] font-normal text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import router from "@/router";
export default {
  name: "CreateCompanyAcct",
  setup() {
    const goBack = () => {
      router.back();
    };

    return { goBack };
  },
};
</script>
