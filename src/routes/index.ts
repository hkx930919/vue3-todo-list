import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routerHistory = createWebHistory();
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import(/* chunkName home */ "@/views/home/index.vue")
  },
  {
    path: "/timeline",
    component: () => import(/* chunkName timeline */ "@/views/timeline/index.vue")
  }
];
const router = createRouter({
  history: routerHistory,
  routes
});
export default router;
