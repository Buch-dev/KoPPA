<template>
  <div class="space-y-5">
    <div
      class="bg-[#e1efec] rounded-[1.25rem] shadow-[0_2px_45px_1px_rgba(7,157,68,0.1)] p-5"
    >
      <div
        class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1"
      >
        <h2 class="text-blackColor text-base">About</h2>
        <button aria-label="open">
          <img
            src="../assets/icons/pen.png"
            alt=""
            class="w-4 h-4 object-contain"
          />
        </button>
      </div>

      <p
        class="pt-7 pb-16 border-b-2 border-solid border-jobCardBackgroundColorHover text-bannerBlendColor text-sm"
      >
        Equipping developers with the core skill set and soft skills to become
        proficient in solving problems.
      </p>

      <ul
        class="mt-5 pl-3 list-disc text-xs text-bannerBlendColor space-y-[0.625rem]"
      >
        <li class="flex gap-5 mt-9 items-center">
          <img
            src="../assets/icons/location.png"
            alt=""
            class="w-5 h-5 object-contain"
          />
          <p class="text-bannerBlendColor font-inter text-xs md:text-sm ml-1">
            Lorem ipsum dolor sit amet consectetur. Convallis lobortis purus
            magna risus tempor sed.
          </p>
        </li>
        <li class="flex gap-5 mt-[10px] items-center">
          <img
            src="../assets/icons/tel.png"
            alt=""
            class="w-5 h-5 object-contain"
          />
          <p class="text-bannerBlendColor font-inter text-xs md:text-sm">
            +234 809 987 4567
          </p>
        </li>
        <li class="flex gap-5 mt-[10px] items-center">
          <img
            src="../assets/icons/site.png"
            alt=""
            class="w-5 h-5 object-contain"
          />
          <p class="text-bannerBlendColor font-inter text-xs md:text-sm">
            support@hackacademy.com
          </p>
        </li>
      </ul>
    </div>

    <div
      class="bg-[#e1efec] rounded-[1.25rem] shadow-[0_2px_45px_1px_rgba(7,157,68,0.1)] py-5"
    >
      <div
        class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1"
      >
        <button
          class="pb-[6px] border-b-2 border-solid border-signUpCorperBtn text-xs md:text-sm px-6"
        >
          Post job
        </button>
        <button
          class="pb-[6px] border-b-2 border-solid text-xs md:text-sm px-6"
        >
          Applications
        </button>
        <button
          class="pb-[6px] border-b-2 border-solid text-xs md:text-sm px-6"
        >
          Posts
        </button>
      </div>

      <form class="px-5 pt-7 space-y-[0.65rem] text-bannerBlendColor">
        <div>
          <input
            placeholder="Job title"
            aria-label="Job Title"
            class="md:pl-7 md:pr-5 md:py-3 pl-4 pr-2 py-2 w-full"
          />
        </div>
        <div class="flex gap-x-2 md:gap-x-5">
          <div class="w-1/2 relative">
            <select
              class="md:pl-7 md:pr-5 md:py-3 pl-4 pr-2 py-2 bg-white text-bannerBlendColor w-full"
            >
              <option value="" selected disabled class="text-bannerBlendColor">
                Location
              </option>
              <option value="adamawa">Adamawa</option>
              <option value="imo">Imo</option>
              <option value="oyo">Oyo</option>
            </select>
            <button
              type="button"
              class="absolute top-1/2 -translate-y-1/2 right-1 bg-jobCardBackgroundColor w-6 md:w-9 pointer-events-none"
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8363 0.167472C15.6158 -0.0558239 15.2574 -0.0558239 15.0369 0.167472L8.00773 7.29898L0.964787 0.167472C0.744264 -0.0558239 0.385915 -0.0558239 0.165392 0.167472C-0.0551307 0.390768 -0.0551307 0.753624 0.165392 0.976919L7.59425 8.4992C7.70451 8.61084 7.84234 8.66667 7.99395 8.66667C8.13178 8.66667 8.28339 8.61084 8.39365 8.4992L15.8225 0.976919C16.0568 0.753624 16.0568 0.390768 15.8363 0.167472Z"
                  fill="#27302C"
                />
              </svg>
            </button>
          </div>
          <div class="w-1/2 relative">
            <select
              class="md:pl-7 md:pr-5 md:py-3 pl-4 pr-2 py-2 bg-white text-bannerBlendColor w-full"
            >
              <option value="" selected disabled>Duration</option>
              <option value="adamawa">Adamawa</option>
              <option value="imo">Imo</option>
              <option value="oyo">Oyo</option>
            </select>
            <button
              type="button"
              class="absolute top-1/2 -translate-y-1/2 right-1 bg-jobCardBackgroundColor w-6 md:w-9 pointer-events-none"
            >
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8363 0.167472C15.6158 -0.0558239 15.2574 -0.0558239 15.0369 0.167472L8.00773 7.29898L0.964787 0.167472C0.744264 -0.0558239 0.385915 -0.0558239 0.165392 0.167472C-0.0551307 0.390768 -0.0551307 0.753624 0.165392 0.976919L7.59425 8.4992C7.70451 8.61084 7.84234 8.66667 7.99395 8.66667C8.13178 8.66667 8.28339 8.61084 8.39365 8.4992L15.8225 0.976919C16.0568 0.753624 16.0568 0.390768 15.8363 0.167472Z"
                  fill="#27302C"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Job Description"
            class="md:pl-7 md:pr-5 md:py-3 pl-4 pr-2 py-2 w-full min-h-[100px]"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-signUpCorperBtn w-36 text-white px-9 py-2 mt-3 rounded-[0.625rem]"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyForm",
};
</script>
