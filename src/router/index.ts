import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import FloorPage from "@/views/floor/FloorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/floor",
      component: FloorPage,
    },
  ],
});

export default router;
