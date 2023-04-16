<template>
  <div class="container px-[1.75rem] max-w-4xl relative">
    <button class="absolute top-3" @click="goBack">
      <svg
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3228 3.42854C17.2251 2.64422 17.2251 1.37257 16.3228 0.588253C15.4202 -0.196084 13.9572 -0.196084 13.0547 0.588253L0.0120307 11.9241C-0.00407563 11.9381 -0.00398304 11.9609 0.0121464 11.9749C0.0281602 11.9888 0.0282528 12.0114 0.0122621 12.0254C-0.0037518 12.0393 -0.0037287 12.0618 0.0122621 12.0757L13.0551 23.4118C13.9577 24.1961 15.4206 24.1961 16.3232 23.4118C17.2256 22.6273 17.2256 21.3558 16.3232 20.5713L6.46083 11.9998L16.3228 3.42854Z"
          fill="#001009"
        />
      </svg>
    </button>

    <div class="text-center mt-[1.875rem]">
      <h1 class="text-3xl md:text-5xl">
        <span class="text-bannerBlendColor leading-6">Welcome</span><br />
        <span class="text-signUpCorperBtn leading-6"
          >To
          <span v-if="pathName !== 'signin-company'">Employer's</span>
          KoPPA</span
        >
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
          v-model="username"
          class="py-3 px-4 w-full border-[0.5px] focus:border-signUpCorperBtn border-solid border-bannerBlendColor rounded-[0.625rem] border-opacity-25"
        />
      </div>
      <div class="space-y-2">
        <label for="password" class="font-inter text-base text-bannerBlendColor"
          >Password</label
        >
        <input
          id="password"
          name="password"
          class="py-3 px-4 w-full border-[0.5px] border-solid border-bannerBlendColor rounded-[0.625rem] border-opacity-25 focus:border-signUpCorperBtn"
        />
      </div>
      <div class="flex justify-between">
        <div class="flex gap-x-1">
          <input type="radio" class="focus:border-signUpCorperBtn" />
          <p class="text-bannerBlendColor text-xs md:text-sm">Remember Me</p>
        </div>
        <p class="text-xs md:text-sm text-signUpCorperBtn">
          Forgot your password?
        </p>
      </div>
      <div>
        <button
          class="py-4 bg-signUpCorperBtn text-white w-full mt-10 rounded-[0.625rem]"
          @click="goToAccount(username)"
          type="button"
        >
          Sign In
        </button>
      </div>
      <p class="text-sm flex flex-col md:flex-row gap-2">
        <span> {{ message }} </span>
        <router-link :to="`/${pathName}`" class="text-signUpCorperBtn"
          >Sign In</router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "SignIn",
  props: ["message", "pathName"],
  setup(props) {
    const username = ref("");
    const store = useStore();

    const goBack = () => {
      router.back();
    };

    const goToAccount = (payload) => {
      console.log(props.pathName);
      if (props.pathName === "signin-corper") {
        router.push("/company");
        return;
      }

      if (username.value) {
        store.dispatch("addUser", payload);
      }

      router.push("/home");
    };

    // const addUser = (payload) => {
    //   store.dispatch("addUser", payload)
    // }

    return { username, goBack, goToAccount };
  },
};
</script>
