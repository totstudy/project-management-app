import { createWebHistory, createRouter } from "vue-router";
import { useAuth } from "./composable/useAuth";
import AppTop from './pages/AppTop.vue';

const { isAuthenticated, check } = useAuth();
const router = createRouter({
  routes: [
    {
      path: "/",
      redirect: "/auth",
    },
    {
      path: "/auth",
      redirect: "/auth/login",
      meta: { requiresAuth: false },
      component: () => import("./pages/Auth.vue"),
      children: [
        {
          path: "/auth/login",
          name: "login",
          meta: { requiresAuth: false },
          component: () => import("./components/auth/Login.vue"),
        },
        {
          path: "/auth/register",
          name: "register",
          meta: { requiresAuth: false },
          component: () => import("./components/auth/Register.vue"),
        },
      ],
    },
    {
      path: "/auth",
      redirect: "/auth/logout",
      meta: { requiresAuth: false },
      component: () => import("./pages/Auth.vue"),
      children: [
        {
          path: "/auth/logout",
          name: "logout",
          meta: { requiresAuth: true },
          component: () => import("./components/auth/Logout.vue"),
        },
      ],
    },
    {
      path: '/',
      name: 'AppTop',
      component: AppTop,
    },
    {
      path: '/project/projectlist',
      name: 'projectList',
      meta: { requiresAuth: true },
      component: () => {
        return import('./pages/project/ProjectList.vue');
      },
    },
    {
      path: '/project/detail/:id',
      name: 'projectDetail',
      meta: { requiresAuth: true },
      component: () => {
        return import('./pages/project/ProjectDetail.vue')
      },
      props: (routes) => {
        const idNum = Number(routes.params.id);
        return {
          id: idNum
        };
      }
    },
    {
      path: '/project/add',
      name: 'projectAdd',
      meta: { requiresAuth: true },
      component: () => {
        return import('./pages/project/ProjectAdd.vue');
      }
    },
  ],
  history: createWebHistory(),
});

export default router;
