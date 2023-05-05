import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component:()=> import("../views/vuex.vue")
  },
  {
    path: '/news',
    name: 'news',
    component:()=> import("../views/news.vue")
  },
  {
    path: '/list',
    name: 'list',
    component:()=> import("../views/list.vue")
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
