import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

const routes = [
  {
    path: "",
    alias: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { layout: DefaultLayout }
  },
  {
    path: "/clubs",
    name: "ListClub",
    component: () => import("../views/Clubs.vue"),
    meta: { layout: DefaultLayout }
  },  
  {
    path: "/rank",
    name: "Rank",
    component: () => import("../views/Rank.vue"),
    meta: { layout: DefaultLayout }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router