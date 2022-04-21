import { createRouter, createWebHistory } from "vue-router";
import RegistrationCandidate from "@/views/RegistrationCandidate.vue";
import Login from "@/views/UserLogin.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new-candidate",
      name: "new-candidate",
      component: RegistrationCandidate,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
