import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/components/Home.vue"),
        }
  ],
});
export default router;
