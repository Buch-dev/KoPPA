import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutView from "../views/AboutView.vue";
import SignInCorper from "@/views/SignInCorper.vue";
import SignInCompany from "@/views/SignInCompany.vue";
import CreateCompanyAcct from "@/views/CreateCompanyAcct.vue";
import NotFoundVue from "@/views/NotFound.vue";

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
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/job-listings",
    name: "JobListings",
    component: () => import("../views/JobListings.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("../views/Resources.vue"),
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
  },
  {
    path: "/company",
    name: "Company",
    component: () => import("../views/CompanyProfile.vue"),
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

export default router;
