import { createRouter, createWebHistory } from 'vue-router'
// User
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Kontak from '../pages/kontak.vue'
import Armada from '../pages/armada.vue'

// Admin
import Login from '../admin/components/login.vue'
import Dashboard from '../admin/dashboard.vue'
import User from '../admin/pages/user/index.vue'
import Mobil from '../admin/pages/mobil/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Kontak',
    component: Kontak
  },
  {
    path: '/armada',
    name: 'Armada',
    component: Armada
  },

  // admin page =

  {
    path: '/login-admin',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin-dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin-user',
    name: 'User',
    component: User
  },
  {
    path: '/admin-mobil',
    name: 'Mobil',
    component: Mobil
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
