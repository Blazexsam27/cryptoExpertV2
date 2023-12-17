import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Analysis from "../views/Analysis.vue";
import News from "../views/News.vue";
import Learn from "../views/Learn.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/analysis",
      name: "analysis",
      component: Analysis,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/learn",
      name: "learn",
      component: Learn,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
