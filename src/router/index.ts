import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login-admin',
    component: () => import(/* webpackChunkName: "Login" */ '@/modules/users/views/Login.vue')
  },

  {
    path: '/admin/home',
    name: 'HomeAdministrador',
    component: () => import(/* webpackChunkName: "HomeAdmin" */ '@/modules/users/views/HomeAdmin.vue'),
    beforeEnter: isAuthenticatedGuard
  },

  {
    path: '/admin/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "MenuAdmin" */ '@/modules/menu/views/Menu.vue')
  },

  {
    path: '/admin/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "Inventario" */ '@/modules/inventory/views/Inventario.vue')
  },

  {
    path: '/admin/reservations',
    name: 'Reservation',
    component: () => import(/* webpackChunckName: "Reservation" */ '@/modules/reservation/views/Reservation.vue')
  },

  {
    path: '/admin/users',
    name: 'Usuarios',
    component: () => import(/* webpackChunckName: "Usuarios" */ '@/modules/users/views/Usuarios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
