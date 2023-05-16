import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutView from "../views/AboutView.vue";
import SignInCorper from "@/views/SignInCorper.vue";
import SignInCompany from "@/views/SignInCompany.vue";
import CreateCompanyAcct from "@/views/CreateCompanyAcct.vue";
import NotFoundVue from "@/views/NotFound.vue";
import FaqVue from "@/views/Faq.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Terms from "@/views/Terms.vue";
import ContactUsViewVue from "@/views/ContactUsView.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView"),
    meta: {
      authIsRequired: true,
    },
  },

  {
    path: "/job-listings",
    name: "JobListings",
    component: () => import("../views/JobListings.vue"),
    meta: {
      authIsRequired: true,
    },
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("../views/Resources.vue"),
    meta: {
      authIsRequired: true,
    },
  },
  {
    path: "/create-corper-acct",
    name: "CreateCorperAcct",
    component: () => import("../views/CreateCorperAcct.vue"),
  },
  {
    path: "/create-company-acct",
    name: "create-company-acct",
    component: CreateCompanyAcct,
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/UserProfile.vue"),
    meta: {
      authIsRequired: true,
    },
  },
  {
    path: "/company",
    name: "Company",
    component: () => import("../views/CompanyProfile.vue"),
    meta: {
      authIsRequired: true,
    },
  },
  {
    path: "/signin-corper",
    name: "signin-corper",
    component: SignInCorper,
  },
  {
    path: "/signin-company",
    name: "signin-company",
    component: SignInCompany,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FaqVue,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/contact-us",
    name: "contact",
    component: ContactUsViewVue,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "text-signUpCorperBtn font-medium",
});

const isAuthenticated = () => localStorage.getItem("koppa-token");

const canUserAccess = (to) => {
  if (
    !isAuthenticated() &&
    to.meta.authIsRequired &&
    to.name !== "signin-corper"
  ) {
    return false;
  }

  return true;
};

router.beforeEach(async (to, from) => {
  const canAccess = await canUserAccess(to);

  if (isAuthenticated() && to.name === "signin-corper") {
    return {
      name: "home",
    };
  }

  if (isAuthenticated() && to.name === "signin-company") {
    return {
      name: "Company",
    };
  }
  if (!canAccess) {
    // if (isAuthenticated() && to.name === "log-out") {
    //   userStore.logOut();

    //   return {
    //     name: "sign-in",
    //   };
    // }

    return {
      name: "signin-corper",
    };
  }
});

export default router;
