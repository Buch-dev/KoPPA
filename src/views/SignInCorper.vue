<template>
  <section>
    <SignIn
      message="Not a corper? sign in as an employer"
      path="signin-company"
    />
  </section>
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  name: "SignInCorper",
  components: { SignIn },
};
</script>
