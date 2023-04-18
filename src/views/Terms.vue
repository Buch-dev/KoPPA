<template>
  <section>
    <Nav />
    <div class="container px-[1.875rem] mt-32">
      <h1 class="text-2xl text-center text-blackColor md:text-5xl">Terms</h1>
      <div
        class="bg-jobCardBackgroundColor p-5 mt-10 md:px-20 md:pt-14 text-sm"
      >
        <div>
          <p
            class="text-bannerBlendColor text-sm leading-[22px] font-semibold text-left"
          >
            We run this website and permits its use according to the following
            terms and conditions:
          </p>
        </div>

        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Basic Terms
          </h2>
          <div>
            <ul class="list-decimal pl-8">
              <li>
                Using this website implies your acceptance of these conditions.
                If you do not fully accept them, your entry to this site will be
                considered unauthorized and you will have to stop using it
                immediately
              </li>

              <li>You must be 13 years or older to use this site.</li>
              <li>
                You are responsible for any activity that occurs under your
                screen name.
              </li>
              <li>You are responsible for keeping your account secure.</li>
              <li>
                You must not abuse, harass, threaten or intimidate other
                Kopaville users.
              </li>
              <li>
                You are solely responsible for your conduct and any data, text,
                information, screen names, graphics, photos, profiles, audio and
                video clips, links ("Content") that you submit, post, and
                display on the Kopaville service.
              </li>
              <li>
                You must not modify, adapt or hack Kopaville or modify another
                website so as to falsely imply that it is associated with
                Kopaville
              </li>
              <li>
                You must not create or submit unwanted email to any Kopaville
                members ("Spam").
              </li>
              <li>
                You must not transmit any worms or viruses or any code of a
                destructive nature.
              </li>
              <li>
                You must not, in the use of Kopaville, violate any laws in your
                jurisdiction (including but not limited to copyright laws).
              </li>
            </ul>
            <p class="mt-10">
              Violation of any of these agreements will result in the
              termination of your Kopaville account. While Kopaville prohibits
              such conduct and content on its site, you understand and agree
              that Kopaville cannot be responsible for the Content posted on its
              web site and you nonetheless may be exposed to such materials and
              that you use the Kopaville service at your own risk.
            </p>
          </div>
        </div>
        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            General Conditions
          </h2>
          <ul class="list-decimal pl-8">
            <li>
              We reserve the right to modify or terminate the KoPPA service for
              any reason, without notice at any time.
            </li>

            <li>
              We reserve the right to alter these Terms of Use at any time. If
              the alterations constitute a material change to the Terms of Use,
              we will notify you via internet mail according to the preference
              expressed on your account. What constitutes a "material change"
              will be determined at our sole discretion, in good faith and using
              common sense and reasonable judgment.
            </li>

            <li>
              We reserve the right to refuse service to anyone for any reason at
              any time. We may, but have no obligation to, remove Content and
              accounts containing Content that we determine in our sole
              discretion are unlawful, offensive, threatening, libelous,
              defamatory, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Use.
            </li>
            <li>
              KoPPA service makes it possible to post images and text hosted on
              KoPPA to outside websites. This use is accepted (and even
              encouraged!). However, pages on other websites which display data
              hosted on KoPPA must provide a link back to KoPPA.
            </li>
          </ul>
        </div>

        <div class="mt-7 space-y-5">
          <h2 class="text-blackColor text-xl font-semibold md:text-2xl">
            Copyright (What's Yours is Yours)
          </h2>

          <ul class="list-decimal pl-8">
            <li>
              We claim no intellectual property rights over the material you
              provide to the KoPPA service. Your profile and materials uploaded
              remain yours. You can remove your profile at any time by deleting
              your account. This will also remove any text and images you have
              stored in the system.
            </li>

            <li>
              We encourage users to contribute their creations to the public
              domain or consider progressive licensing terms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Terms",
  components: { Nav },
};
</script>
