import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "@/views/home/index.vue";
import TodoList from "@/views/todoList/index.vue";

const routerHistory = createWebHistory();
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/todoList/:type",
    component: TodoList
  }
];
const router = createRouter({
  history: routerHistory,
  routes
});
export default router;
