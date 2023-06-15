import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ui-kit",
    meta: { layout: "main" },
    component: () => import("../views/MainUiKit.vue"), //*Динамический импорт компонента в роутере
  },
  {
    path: "/checkbox",
    name: "checkbox",
    meta: { layout: "main" },
    component: () => import("../views/CheckBox.vue"),
  },
  {
    path: "/button",
    name: "button",
    meta: { layout: "main" },
    component: () => import("../views/ButtonPage.vue"),
  },
  {
    path: "/progressbar",
    name: "progressbar",
    meta: { layout: "main" },
    component: () => import("../views/ProgressBar.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
