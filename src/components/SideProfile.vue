<template>
  <div
    class="hidden md:flex md:flex-col md:w-1/3 bg-[#e1efec] px-5 pt-14 space-y-5"
  >
    <div class="bg-white rounded-medium p-[3.125rem]">
      <ul class="space-y-8">
        <li>
          <router-link to="/user">Profile</router-link>
        </li>
        <li>Notifications</li>
        <li>Settings</li>
        <li>Verification</li>
        <li>Change Password</li>
        <li>Referral</li>
      </ul>
    </div>
    <div class="bg-white rounded-medium p-[3.125rem]">
      <ul class="space-y-8">
        <li>
          <router-link to="/" @click="logOut">log out</router-link>
        </li>
        <li>Delete Account</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "SideProfile",
  setup() {
    const store = useStore();

    const logOut = () => {
      store.dispatch("signOut");
    };

    return { logOut };
  },
};
</script>
