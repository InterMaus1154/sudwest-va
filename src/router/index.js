import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/pages/homepage/HomePage.vue";

const routes = [
  {
    path: '/',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behaviour: 'smooth'
      }
    }
    return {top: 0}
  }
});

export default router;
