<template>
  <section>
    <SignIn
      message="Not an employer? sign in as a corper"
      path="signin-corper"
    />
  </section>
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  name: "SignInCompany",
  components: { SignIn },
};
</script>
