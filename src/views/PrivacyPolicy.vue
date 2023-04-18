<template>
  <section>
    <Nav />
    <div class="container px-[1.875rem] mt-32">
      <h1 class="text-2xl text-center text-blackColor md:text-5xl">Policy</h1>
      <div class="bg-jobCardBackgroundColor p-5 mt-10 md:px-20 md:pt-14">
        <div>
          <p
            class="text-bannerBlendColor text-sm font-semibold leading-[22px] text-left"
          >
            When you use our services, you’re trusting us with your information.
            We understand this is a big responsibility and work hard to protect
            your information and put you in control.
          </p>
        </div>

        <div class="mt-7">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Information we collect
          </h2>
          <p class="mt-5 text-bannerBlendColor text-sm text-left">
            When you use our services, you’re trusting us with your information.
            We understand this is a big responsibility and work hard to protect
            your information and put you in control.
          </p>
        </div>
        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Things you create or provide to us
          </h2>
          <p class="mt-5 text-bannerBlendColor text-sm text-left">
            venenatis nulla in pretium pulvinar. Nulla augue sit metus vulputate
            id. Suspendisse id nisl vel vulputate arcu. Urna id lectus amet
            venenatis dignissim ipsum dictum pretium integer. Scelerisque
            phasellus dolor donec mi sem facilisi est risus. Proin sit mauris
            sollicitudin pretium volutpat volutpat turpis.
          </p>
        </div>
        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Information we collect as you use our services
          </h2>
          <p>Your apps, browsers & devices</p>
          <p class="mt-5 text-bannerBlendColor text-sm text-left">
            venenatis nulla in pretium pulvinar. Nulla augue sit metus vulputate
            id. Suspendisse id nisl vel vulputate arcu. Urna id lectus amet
            venenatis dignissim ipsum dictum pretium integer. Scelerisque
            phasellus dolor donec mi sem facilisi est risus. Proin sit mauris
            sollicitudin pretium volutpat volutpat turpis.
          </p>
        </div>
        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Your Activity
          </h2>
          <div class="text-sm">
            <p>
              We collect information about your activity in our services, which
              we use to do things like recommend a YouTube video you might like.
              The activity information we collect may include:
            </p>
            <ul class="list-decimal pl-8">
              <li>Terms you search for</li>
              <li>Videos you watch</li>
              <li>Voice and audio information</li>
              <li>Purchase activity</li>

              <li>People with whom you communicate or share content</li>
              <li>
                Activity on third-party sites and apps that use our services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "PrivacyPolicy",
  components: { Nav },
};
</script>
