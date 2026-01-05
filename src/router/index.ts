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
    component: () => import(/* webpackChunkName: "MenuAdmin" */ '@/modules/menu/layout/menuLayout.vue'),
    beforeEnter: isAuthenticatedGuard,
    children: [
      {
        path: 'create',
        name: 'CrearProducto', 
        component: () => import(/* webpackChunkName: "CrearProducto" */ '@/modules/menu/views/CrearProducto.vue'),
        beforeEnter: isAuthenticatedGuard
      },

      {
        path: 'productos',
        name: 'ListarProductos',
        component: () => import(/* webpackChunkName: "ListarProductos" */ '@/modules/menu/views/ListarProductos.vue'),
        beforeEnter: isAuthenticatedGuard
      },
    ]
  },

  {
    path: '/admin/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "Inventario" */ '@/modules/inventory/layout/InventoryLayout.vue'),
    beforeEnter: isAuthenticatedGuard,
    children: [
      {
        path: 'create',
        name: 'CrearInventario', 
        component: () => import(/* webpackChunkName: "CrearInventario" */ '@/modules/inventory/views/Inventario.vue'),
        beforeEnter: isAuthenticatedGuard
      },

      {
        path: 'get',
        name: 'ListarInventarios',
        component: () => import(/* webpackChunkName: "ListarInventarios" */ '@/modules/inventory/views/ListarInventarios.vue'),
        beforeEnter: isAuthenticatedGuard
      },

      {
        path: 'order',
        name: 'RegistrarVenta',
        component: () => import(/* webpackChunkName: "RegistrarVenta" */ '@/modules/order/views/RegistrarVenta.vue'),
        beforeEnter: isAuthenticatedGuard
      },
    ]
  },

  {
    path: '/admin/reservations',
    name: 'Reservation',
    component: () => import(/* webpackChunckName: "Reservation" */ '@/modules/reservation/views/Reservation.vue'),
    beforeEnter: isAuthenticatedGuard
  },

  {
    path: '/admin/users',
    name: 'Usuarios',
    component: () => import(/* webpackChunckName: "Usuarios" */ '@/modules/users/layout/usuarioLayout.vue'),
    beforeEnter: isAuthenticatedGuard,

    children: [
      {
        path: 'form',
        name: 'RegistrarEmpleado', 
        component: () => import(/* webpackChunkName: "RegistrarEmpleado" */ '@/modules/users/views/RegistrarEmpleado.vue'),
        beforeEnter: isAuthenticatedGuard
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
