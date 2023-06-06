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
    component: () => import ("../views/BasketPage.vue"),
  },
  {
    path: "/button",
    name: "button",
    meta: { layout: "main" },
    component: () => import ('../views/ButtonPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
