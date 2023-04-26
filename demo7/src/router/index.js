import Vue from 'vue'
import VueRouter from 'vue-router'
import VueData from '../views/VueData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VueData',
    component: VueData
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
