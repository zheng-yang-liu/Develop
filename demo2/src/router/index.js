import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/jsmk.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      title:'这是首页'
    },
    component: HomeView
    // component:() => import("../views/jsmk.vue")
  },
  {
    // path: '/css/:参数的名字',
    path: '/css',
    name: 'css',
    // component: HomeView
    component:() => import("../views/css.vue")
  },
  {
    path: '/zymo/:id',
    name: 'zy',
    // component: HomeView
    component:() => import("../views/zymo.vue")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
