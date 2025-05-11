import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Kontak from '../pages/kontak.vue'
import Armada from '../pages/armada.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
