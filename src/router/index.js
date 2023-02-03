import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

/* Layout */
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/overview/index.vue"),
        name: "Overview",
      },
      {
        path: "/Abnormal_item",
        component: () => import("@/views/Abnormal_item/item.vue"),
        name: "Abnormal_item",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
