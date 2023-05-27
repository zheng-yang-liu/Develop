import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bind',
    component:()=> import("../views/bind.vue")
  },
  {
    path: '/ceshi',
    name: 'ceshi',
    component:()=> import("../views/ceshi.vue")
  },
  {
    path: '/weblogin',
    name: 'weblogin',
    component:()=> import("../views/weblogin.vue")
  },
  {
    path: '/pro',
    name: 'pro',
    component:()=> import("../views/pro.vue")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
