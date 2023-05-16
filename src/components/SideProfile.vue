<template>
  <div
    class="hidden md:flex md:flex-col md:w-1/3 bg-[#e1efec] px-5 pt-14 space-y-5"
  >
    <div class="bg-white rounded-medium p-[3.125rem]">
      <ul class="space-y-8">
        <li>
          <router-link to="/user">Profile</router-link>
        </li>
        <li class="cursor-pointer" @click="notificationModal = true">
          Notifications
        </li>
        <li @click="handleNotAvailableModalOpen" class="cursor-pointer">
          Settings
        </li>
        <li @click="handleNotAvailableModalOpen" class="cursor-pointer">
          Verification
        </li>
        <li @click="handleNotAvailableModalOpen" class="cursor-pointer">
          Change Password
        </li>
        <li @click="handleNotAvailableModalOpen" class="cursor-pointer">
          Referral
        </li>
      </ul>
    </div>
    <div class="bg-white rounded-medium p-[3.125rem]">
      <ul class="space-y-8">
        <li>
          <router-link to="/" @click="logOut">log out</router-link>
        </li>
        <li @click="handleNotAvailableModalOpen" class="cursor-pointer">
          Delete Account
        </li>
      </ul>
    </div>
  </div>

  <div class="fixed">
    <NotAvailableModal
      v-if="notAvailable"
      :closeModal="handleNotAvailableModalClose"
    />
    <div v-else></div>
  </div>

  <div class="fixed">
    <Modal
      v-if="notificationModal"
      :closeModal="() => (notificationModal = false)"
    />
    <div v-else></div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import NotAvailableModal from "./NotAvailableModal.vue";
import Modal from "./Modal.vue";
export default {
  name: "SideProfile",
  components: { NotAvailableModal, Modal },
  setup() {
    const store = useStore();
    const notAvailable = ref(false);
    const notificationModal = ref(false);

    const handleNotAvailableModalClose = () => {
      notAvailable.value = false;
    };
    const handleNotAvailableModalOpen = () => {
      notAvailable.value = true;
    };

    const logOut = () => {
      store.dispatch("signOut");
    };

    return {
      logOut,
      handleNotAvailableModalClose,
      handleNotAvailableModalOpen,
      notAvailable,
      notificationModal,
    };
  },
};
</script>
