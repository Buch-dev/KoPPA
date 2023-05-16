<template>
  <section>
    <Nav />
    <div class="container px-[1.875rem] mt-32">
      <h1 class="text-2xl text-center text-blackColor md:text-5xl">About</h1>
      <div class="bg-jobCardBackgroundColor p-5 mt-10 md:px-20 md:pt-14">
        <div>
          <p class="text-bannerBlendColor text-sm leading-[22px] text-left">
            KoPPA uses cutting-edge technology and a user centered focus in a
            B2B2C model to help users achieve exactly what they may intend. The
            harrowing reality of displacement in the Nigerian work force, where
            graduates of accounting, for example, find themselves in schools
            teaching, is a remote cause of unemployment. Many graduates thus
            become unemployable and unfit for most work places since their
            skills haven’t be rightly applied. We offer a solution that uses
            machine learning to match the right candidates to the right work
            place, and offer matching recommendations to hiring teams. No one
            does it better.
          </p>
        </div>

        <div class="mt-7">
          <h2 class="text-blackColor text-xl md:text-2xl">Mission</h2>
          <p
            class="mt-5 text-bannerBlendColor text-sm leading-[22px] text-left"
          >
            Our mission at KoPPA is to connect fresh college graduates
            participating in the NYSC scheme with reputable employers,
            facilitating their transition into the professional workforce and
            providing valuable opportunities for career growth and development.
          </p>
        </div>
        <div class="mt-7">
          <h2 class="text-blackColor text-xl md:text-2xl">Vision</h2>
          <p
            class="mt-5 text-bannerBlendColor text-sm leading-[22px] text-left"
          >
            Our vision at KoPPA is to be the leading platform that empowers
            Nigerian youth by bridging the gap between education and employment,
            ensuring a smooth transition from academia to the professional
            world. We strive to create a dynamic ecosystem where talented
            graduates can find meaningful one-year employment opportunities and
            gain the necessary skills and experience to excel in their chosen
            fields.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container px-[1.875rem] mt-7"></div>
  </section>
  <section>
    <div class="container px-[1.875rem] mt-7"></div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "About",
  components: { Nav },
};
</script>
