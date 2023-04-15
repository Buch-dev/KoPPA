<template>
  <div class="container px-[1.75rem] max-w-4xl">
    <div class="flex flex-col items-center mt-8 text-center relative">
      <router-link :to="{ name: 'landing' }">
        <img
          src="../assets/icons/arrow-left.png"
          alt=""
          class="absolute left-0"
        />
      </router-link>
      <img src="../assets/icons/KoPPA-lemon.png" alt="" class="" />
      <h2 class="text-3xl font-bold mt-[50px]">Create an account</h2>
      <p class="mt-[5px] font-sans">
        We’re glad you want to Lorem. Few more steps and you’ll b.
      </p>
    </div>
    <h2 class="font-sans text-3xl font-bold text-center mt-[70px]">
      Corper Account Setup
    </h2>
    <transition
      enter-active-class="duration-500 ease-out"
      leave-active-class="duration-500 ease-in"
    >
      <form @submit.prevent="" class="mt-10 flex flex-col text-sm md:text-base">
        <div class="grid grid-cols-2 gap-[10px]">
          <Input :data="data" v-for="(data, index) in inputData" :key="index" />
          <div class="flex flex-col">
            <label for="gender" class="font-sans mt-5">Gender</label>
            <select
              name="gender"
              id="gender"
              class="appearance-none bg-[url('../assets/icons/green-arrow-dropdown.png')] bg-no-repeat bg-fixed pl-3 pr-8 h-[50px] px-1 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg mt-[9px]"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Input
            :data="data"
            v-for="(data, index) in inputData2"
            :key="index"
          />
        </div>
        <div class="flex flex-col mt-[29.87px]">
          <label for="nysc-callup-number" class="font-sans"
            >Nysc call up Number</label
          >
          <input
            type="text"
            name="nysc-callup-number"
            id="nysc-callup-number"
            class="border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg mt-[9px] w-full h-[70px] px-6"
          />
        </div>
        <div class="flex flex-col mt-[29.87px]">
          <label for="headline" class="font-sans">Headline</label>
          <textarea
            name="headline"
            id="headline"
            cols="20"
            rows="10"
            class="border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg mt-[9px] w-full h-[118px] px-[20px] py-[20px]"
          ></textarea>
        </div>
        <div class="flex flex-col mt-[29.87px]">
          <label for="skills" class="font-sans">Skills</label>
          <textarea
            name="skills"
            id="skills"
            cols="20"
            rows="10"
            class="border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg mt-[9px] w-full h-[146px] px-[20px] py-[20px]"
          ></textarea>
        </div>
        <div class="flex flex-col mt-[29.87px]">
          <label for="hobbies" class="font-sans">Hobbies</label>
          <textarea
            name="hobbies"
            id="hobbies"
            cols="20"
            rows="10"
            class="border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg mt-[9px] w-full h-[229px] px-[20px] py-[20px]"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-signUpCorperBtn text-white mt-5 h-16 rounded-[10px] text-lg font-bold"
        >
          SUBMIT
        </button>
      </form>
    </transition>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
export default {
  name: "CreateCorperAcct",
  components: { Input },
  data() {
    return {
      inputData: [
        {
          label: "First name",
          name: "firstname",
          id: "firstname",
          type: "text",
          vmodel: "",
        },
        {
          label: "Last name",
          name: "lastname",
          id: "lastname",
          type: "text",
          vmodel: "",
        },
        {
          label: "Email",
          name: "email",
          id: "email",
          type: "email",
          vmodel: "",
        },
        {
          label: "Phone number",
          name: "tel",
          id: "tel",
          type: "tel",
          vmodel: null,
        },
        {
          label: "Date of Birth",
          name: "dob",
          id: "dob",
          type: "date",
          vmodel: null,
        },
      ],
      inputData2: [
        {
          label: "Password",
          name: "password",
          id: "password",
          type: "password",
          vmodel: "",
        },
        {
          label: "Confirm Password",
          name: "confirm-password",
          id: "confirm-password",
          type: "password",
          vmodel: "",
        },
        {
          label: "Location",
          name: "location",
          id: "location",
          type: "text",
          vmodel: "",
        },
        {
          label: "Address",
          name: "address",
          id: "address",
          type: "text",
          vmodel: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
