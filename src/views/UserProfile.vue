<template>
  <Nav />
  <div
    class="md:flex md:container md:gap-x-24 md:bg-jobCardBackgroundColor md:mt-[7.5rem]"
  >
    <div class="pt-14 pb-[7.5rem] md:w-2/3">
      <section>
        <div class="container px-[1.875rem] mt-[7.5rem] md:mt-0">
          <ProfileHeader imgUrl="corperProfileDesktop" />
        </div>
      </section>

      <section>
        <div class="container px-[1.875rem] mt-[7.5rem]">
          <div class="space-y-5">
            <div
              class="bg-white rounded-[1.25rem] shadow-[0_2px_45px_1px_rgba(7,157,68,0.1)] p-5"
            >
              <div
                class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1"
              >
                <h2 class="text-blackColor text-base">Academics History</h2>
                <button aria-label="open">
                  <img src="../assets/icons/plus.png" alt="" />
                </button>
              </div>

              <ul
                class="mt-5 pl-3 list-disc text-xs text-bannerBlendColor space-y-[0.625rem]"
              >
                <li>University of Nigeria, Nsukka . BSC</li>
                <li>Doyern Academy.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>

              <div
                class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1 mt-7"
              >
                <h2 class="text-blackColor text-base">Work Experience</h2>
                <button aria-label="open">
                  <img src="../assets/icons/plus.png" alt="" />
                </button>
              </div>

              <ul
                class="mt-5 pl-3 list-disc text-xs text-bannerBlendColor space-y-[0.625rem]"
              >
                <li>Robben Stores.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>
            </div>

            <div
              class="bg-white rounded-[1.25rem] shadow-[0_2px_45px_1px_rgba(7,157,68,0.1)] p-5"
            >
              <div
                class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1"
              >
                <h2 class="text-blackColor text-base">
                  Skills/Core Experience
                </h2>
                <button aria-label="open">
                  <img src="../assets/icons/plus.png" alt="" />
                </button>
              </div>

              <ul
                class="mt-5 pl-3 list-disc text-xs text-bannerBlendColor space-y-[0.625rem]"
              >
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
              </ul>

              <div
                class="flex justify-between border-b-[1px] border-solid border-jobCardBorderColor pb-1 mt-7"
              >
                <h2 class="text-blackColor text-base">Certifications</h2>
                <button aria-label="open">
                  <img src="../assets/icons/plus.png" alt="" />
                </button>
              </div>

              <ul class="mt-5 text-bannerBlendColor space-y-[0.625rem]">
                <li class="flex gap-x-1 items-center">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.32244C0 1.03979 1.08534 0 2.42418 0H16.9693C18.3082 0 19.3935 1.03979 19.3935 2.32244V5.97545C19.03 5.66379 18.6227 5.39814 18.1814 5.18805V2.32244C18.1814 1.68112 17.6387 1.16122 16.9693 1.16122H2.42418C1.75477 1.16122 1.21209 1.68112 1.21209 2.32244V11.6122C1.21209 12.2535 1.75477 12.7734 2.42418 12.7734H11.2213C11.3132 12.905 11.4112 13.0324 11.5149 13.1551V13.9346H2.42418C1.08534 13.9346 0 12.8949 0 11.6122V2.32244Z"
                      fill="#27302C"
                    />
                    <path
                      d="M20.0003 9.87042C20.0003 10.978 19.5379 11.982 18.7879 12.7151L18.7882 17.4183C18.7882 17.8968 18.218 18.1699 17.8185 17.8828L16.1216 16.6636C15.9061 16.5088 15.6098 16.5088 15.3943 16.6636L13.6974 17.8828C13.2979 18.1699 12.7277 17.8968 12.7277 17.4183V12.7148C11.9779 11.9817 11.5156 10.9779 11.5156 9.87042C11.5156 7.62578 13.415 5.80615 15.7579 5.80615C18.1009 5.80615 20.0003 7.62578 20.0003 9.87042ZM15.7579 13.9347C15.1069 13.9347 14.4912 13.7946 13.9398 13.5436V15.9668L15.4462 15.1009C15.6381 14.9906 15.8778 14.9906 16.0697 15.1009L17.5761 15.9668V13.5436C17.0251 13.7944 16.4086 13.9347 15.7579 13.9347ZM15.7579 12.7735C17.4315 12.7735 18.7882 11.4737 18.7882 9.87042C18.7882 8.26712 17.4315 6.96737 15.7579 6.96737C14.0844 6.96737 12.7277 8.26712 12.7277 9.87042C12.7277 11.4737 14.0844 12.7735 15.7579 12.7735Z"
                      fill="#27302C"
                    />
                    <path
                      d="M3.63672 4.06437C3.63672 3.74372 3.90806 3.48376 4.24276 3.48376H15.1516C15.4863 3.48376 15.7576 3.74372 15.7576 4.06437C15.7576 4.38503 15.4863 4.64498 15.1516 4.64498H4.24276C3.90806 4.64498 3.63672 4.38503 3.63672 4.06437Z"
                      fill="#27302C"
                    />
                    <path
                      d="M4.24276 9.28967C3.90806 9.28967 3.63672 9.54967 3.63672 9.87028C3.63672 10.1909 3.90806 10.4509 4.24276 10.4509H9.09113C9.42584 10.4509 9.69718 10.1909 9.69718 9.87028C9.69718 9.54967 9.42584 9.28967 9.09113 9.28967H4.24276Z"
                      fill="#27302C"
                    />
                  </svg>

                  <p class="whitespace-nowrap text-xs">
                    Microsoft certified Product Designer
                  </p>
                </li>
                <li class="flex gap-x-1 items-center">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.32244C0 1.03979 1.08534 0 2.42418 0H16.9693C18.3082 0 19.3935 1.03979 19.3935 2.32244V5.97545C19.03 5.66379 18.6227 5.39814 18.1814 5.18805V2.32244C18.1814 1.68112 17.6387 1.16122 16.9693 1.16122H2.42418C1.75477 1.16122 1.21209 1.68112 1.21209 2.32244V11.6122C1.21209 12.2535 1.75477 12.7734 2.42418 12.7734H11.2213C11.3132 12.905 11.4112 13.0324 11.5149 13.1551V13.9346H2.42418C1.08534 13.9346 0 12.8949 0 11.6122V2.32244Z"
                      fill="#27302C"
                    />
                    <path
                      d="M20.0003 9.87042C20.0003 10.978 19.5379 11.982 18.7879 12.7151L18.7882 17.4183C18.7882 17.8968 18.218 18.1699 17.8185 17.8828L16.1216 16.6636C15.9061 16.5088 15.6098 16.5088 15.3943 16.6636L13.6974 17.8828C13.2979 18.1699 12.7277 17.8968 12.7277 17.4183V12.7148C11.9779 11.9817 11.5156 10.9779 11.5156 9.87042C11.5156 7.62578 13.415 5.80615 15.7579 5.80615C18.1009 5.80615 20.0003 7.62578 20.0003 9.87042ZM15.7579 13.9347C15.1069 13.9347 14.4912 13.7946 13.9398 13.5436V15.9668L15.4462 15.1009C15.6381 14.9906 15.8778 14.9906 16.0697 15.1009L17.5761 15.9668V13.5436C17.0251 13.7944 16.4086 13.9347 15.7579 13.9347ZM15.7579 12.7735C17.4315 12.7735 18.7882 11.4737 18.7882 9.87042C18.7882 8.26712 17.4315 6.96737 15.7579 6.96737C14.0844 6.96737 12.7277 8.26712 12.7277 9.87042C12.7277 11.4737 14.0844 12.7735 15.7579 12.7735Z"
                      fill="#27302C"
                    />
                    <path
                      d="M3.63672 4.06437C3.63672 3.74372 3.90806 3.48376 4.24276 3.48376H15.1516C15.4863 3.48376 15.7576 3.74372 15.7576 4.06437C15.7576 4.38503 15.4863 4.64498 15.1516 4.64498H4.24276C3.90806 4.64498 3.63672 4.38503 3.63672 4.06437Z"
                      fill="#27302C"
                    />
                    <path
                      d="M4.24276 9.28967C3.90806 9.28967 3.63672 9.54967 3.63672 9.87028C3.63672 10.1909 3.90806 10.4509 4.24276 10.4509H9.09113C9.42584 10.4509 9.69718 10.1909 9.69718 9.87028C9.69718 9.54967 9.42584 9.28967 9.09113 9.28967H4.24276Z"
                      fill="#27302C"
                    />
                  </svg>

                  <p class="whitespace-nowrap text-xs">Google UX Certificate</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <SideProfile />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import SideProfile from "@/components/SideProfile.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";

export default {
  components: { Nav, SideProfile, ProfileHeader },
};
</script>
