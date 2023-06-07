import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'publish',
    component: () => import('../views/publish.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: 'register',
    component: () => import('../views/register.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
