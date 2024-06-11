import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import TopPage from "@/views/Top/TopPage.vue";
import LandmarkPage from "@/views/landmark/LandmarkPage.vue";
import MidtownPage from "@/views/midtown/MidtownPage.vue";
import NewsPage from "@/views/news/NewsPage.vue";
import DesignPage from "@/views/design/DesignPage.vue";
import FloorPage from "@/views/floor/FloorPage.vue";
import LifeFunctionPage from "@/views/lifefunction/LifeFunctionPage.vue";
import CalculatorPage from "@/views/calculator/CalculatorPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: "/floor",
      component: FloorPage,
    },
    {
      path: "/calc",
      component: CalculatorPage,
    },
  ],
});

export default router;
