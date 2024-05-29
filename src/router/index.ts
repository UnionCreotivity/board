import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import TopPage from "@/views/Top/TopPage.vue";
import LandmarkPage from "@/views/landmark/LandmarkPage.vue";
import MidtownPage from "@/views/midtown/MidtownPage.vue";
import NewsPage from "@/views/news/NewsPage.vue";
import DesignPage from "@/views/design/DesignPage.vue";
import LifeFunctionPage from "@/views/lifefunction/LifeFunctionPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/life",
      component: LifeFunctionPage,
    },
    {
      path: "/top",
      component: TopPage,
    },
    {
      path: "/land",
      component: LandmarkPage,
    },
    {
      path: "/mid",
      component: MidtownPage,
    },
    {
      path: "/news",
      component: NewsPage,
    },
    {
      path: "/design",
      component: DesignPage,
    },
  ],
});

export default router;
