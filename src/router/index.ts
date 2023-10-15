import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from '@/router/constant';

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.TodoList,
    name: 'TodoList',
    component: () => import('@/views/TodoList.vue'),
  },
  {
    path: Routes.Backlog,
    name: 'Backlog',
    component: () => import('@/views/Backlog.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
