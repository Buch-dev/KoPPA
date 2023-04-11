<template>
  <section>
    <Nav />
    <div class="container px-[1.875rem] mt-32">
      <h1 class="text-2xl text-center text-blackColor md:text-5xl">About</h1>
      <div class="bg-jobCardBackgroundColor p-5 mt-10 md:px-20 md:pt-14">
        <div>
          <p class="text-bannerBlendColor text-sm leading-[22px] text-left">
            Lorem ipsum dolor sit amet consectetur. Sagittis est cras consequat
            velit sagittis nisi elementum. Ultrices et potenti netus turpis
            magna tincidunt. Habitasse pellentesque lobortis tortor adipiscing
            euismod a. Viverra vehicula ullamcorper pretium egestas. Varius quam
            egestas massa mattis in magna elit habitasse pharetra. Risus sit ut
            hendrerit semper aenean tortor aliquet tincidunt ridiculus. Nisi
            hendrerit in molestie elit eget tristique. Diam neque vitae tempus
            lectus.
          </p>
        </div>

        <div class="mt-7">
          <h2 class="text-blackColor text-xl md:text-2xl">Mission</h2>
          <p class="mt-5 text-bannerBlendColor text-sm text-left">
            Turpis ultrices amet congue ac. Id sapien tellus blandit egestas
            tristique. Malesuada praesent tempus malesuada id ornare netus non.
            Est in tincidunt platea fringilla venenatis lectus nunc. Massa amet
            mattis facilisis dictumst. Non fusce id tristique donec mattis
            condimentum pellentesque. Eu vitae diam sit morbi ut vivamus. Sem
            mauris ornare
          </p>
        </div>
        <div class="mt-7">
          <h2 class="text-blackColor text-xl md:text-2xl">Vision</h2>
          <p class="mt-5 text-bannerBlendColor text-sm text-left">
            venenatis nulla in pretium pulvinar. Nulla augue sit metus vulputate
            id. Suspendisse id nisl vel vulputate arcu. Urna id lectus amet
            venenatis dignissim ipsum dictum pretium integer. Scelerisque
            phasellus dolor donec mi sem facilisi est risus. Proin sit mauris
            sollicitudin pretium volutpat volutpat turpis.
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
