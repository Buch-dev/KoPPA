<template>
  <div class="container max-w-4xl">
    <div class="text-center mt-[1.875rem]">
      <h1 class="text-5xl">
        <span class="text-bannerBlendColor leading-6">Welcome</span><br />
        <span class="text-signUpCorperBtn leading-6">To KoPPA</span>
      </h1>
      <p class="text-bannerBlendColor text-base mt-[0.625rem]">
        Login to your account to browse the site
      </p>
    </div>
    <form class="mt-10 pt-12 px-5 pb-14 bg-[#f7fffa] space-y-5">
      <div class="space-y-2">
        <label
          for="email"
          class="block font-inter text-base text-bannerBlendColor"
          >Email</label
        >
        <input
          id="email"
          name="email"
          class="py-3 px-4 w-full border-[0.5px] border-solid border-bannerBlendColor rounded-[0.625rem] border-opacity-25"
        />
      </div>
      <div class="space-y-2">
        <label for="password" class="font-inter text-base text-bannerBlendColor"
          >Password</label
        >
        <input
          id="password"
          name="password"
          class="py-3 px-4 w-full border-[0.5px] border-solid border-bannerBlendColor rounded-[0.625rem] border-opacity-25"
        />
      </div>
      <div class="flex justify-between">
        <div class="flex gap-x-1">
          <input type="radio" />
          <p class="text-bannerBlendColor text-sm">Remember Me</p>
        </div>
        <p class="text-sm text-signUpCorperBtn">Forgot your password?</p>
      </div>
      <div>
        <button
          class="py-4 bg-signUpCorperBtn text-white w-full mt-10 rounded-[0.625rem]"
        >
          Sign In
        </button>
      </div>
      <p class="text-sm flex flex-col md:flex-row gap-2">
        <span> {{ message }} </span>
        <router-link :to="`/${path}`" class="text-signUpCorperBtn"
          >Sign In</router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: ["message", "path"],
};
</script>
