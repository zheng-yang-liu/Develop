import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
Vue.prototype.$http = axios



//加载 element 组件库
import ElementUI from 'element-ui'
//加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
