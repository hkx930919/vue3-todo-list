import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();
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
