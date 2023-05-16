<template>
  <Nav />
  <div class="md:container lg:px-11">
    <div
      class="md:flex md:gap-x-24 md:bg-jobCardBackgroundColor md:mt-[7.5rem]"
    >
      <div class="pt-14 pb-[7.5rem] md:w-2/3">
        <section>
          <div class="container px-[1.875rem] mt-[7.5rem] md:mt-0">
            <ProfileHeader
              name="Hack Academy"
              imgUrl="company-profile-pic-desktop"
            />
          </div>
        </section>
        <section>
          <div class="container px-[1.875rem] mt-[7.5rem]">
            <CompanyForm />
          </div>
        </section>
      </div>
      <SideProfile />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ProfileHeader from "@/components/ProfileHeader.vue";
import SideProfile from "@/components/SideProfile.vue";
import CompanyForm from "@/components/CompanyForm.vue";
export default {
  name: "CompanyProfile",
  components: { ProfileHeader, SideProfile, CompanyForm, Nav },
};
</script>
