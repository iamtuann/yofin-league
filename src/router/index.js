import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    alias: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/clubs",
    name: "ListClub",
    component: () => import("../views/Clubs.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router