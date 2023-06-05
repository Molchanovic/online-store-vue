import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ui-kit",
    meta: { layout: "main" },
    component: () => import("../views/MainUiKit.vue"), //*Динамический импорт компонента в роутере
  },
  {
    path: "/basket",
    name: "basket",
    meta: { layout: "empty" },
    component: () => "../views/Basket.vue",
  },
  {
    path: "/button",
    name: "button",
    meta: { layout: "main" },
    component: () => "../views/Button.vue",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
