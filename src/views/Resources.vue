<template>
  <section>
    <Nav />
    <ResourcesHero />
  </section>
  <section class="bg-[#21513b99] md:bg-empowerBackgroundColor">
    <ResourcesDownload />
  </section>
  <section>
    <ResourcesStates />
  </section>
  <section class="bg-empowerBackgroundColor">
    <ResourcesCertificate />
  </section>
</template>

<script>
import ResourcesHero from "@/components/ResourcesHero.vue";
import ResourcesDownload from "@/components/ResourcesDownload.vue";
import ResourcesStates from "@/components/ResourcesStates.vue";
import ResourcesCertificate from "@/components/ResourcesCertificate.vue";

import Nav from "@/components/Nav.vue";
import StateCard from "@/components/StateCard.vue";

export default {
  name: "Resources",
  components: {
    ResourcesHero,
    ResourcesDownload,
    ResourcesStates,
    ResourcesCertificate,
    StateCard,
    Nav,
  },
};
</script>
