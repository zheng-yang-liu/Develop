import { createRouter, createWebHistory } from 'vue-router'
import css from '../views/jsmk.vue'

const routes = [
  {
    path: '/',
    name: 'css',
    component: css
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
