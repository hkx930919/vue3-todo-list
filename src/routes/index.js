import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home";
import TodoList from "@/views/todoList";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/todoList/:type",
      component: TodoList
    }
  ]
});
export default router;
