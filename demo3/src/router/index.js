import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:()=>import("@/views/index.vue")
  },
  {
    path: '/news',
    component:()=>import("@/views/news.vue")
  },
  {
    path: '/user',
    component:()=>import("@/views/user.vue"),
    children:[
      {
        path:"info",
        component:()=>import("@/views/user/info.vue")
      },
      {
        path:"like",
        component:()=>import("@/views/user/like.vue")
      },{
        path:"read",
        component:()=>import("@/views/user/read.vue")
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
