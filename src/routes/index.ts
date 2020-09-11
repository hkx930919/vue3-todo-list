import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import(/* chunkName home */ "@/views/home/index.vue"),
    meta: {
      showBar: true
    }
  },
  {
    path: "/timeline",
    component: () => import(/* chunkName timeline */ "@/views/timeline/index.vue"),
    meta: {
      showBar: true
    }
  },
  {
    path: "/todo-detail",
    component: () => import(/* chunkName todo-detail */ "@/views/todo-detail/index.vue")
  }
];
const router = createRouter({
  history: routerHistory,
  routes
});
export default router;
