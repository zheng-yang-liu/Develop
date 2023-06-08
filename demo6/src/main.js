import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 element 组件库
import ElementUI from 'element-ui'
// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// 创建一个 Vue 过滤器来格式化 
// 使2023 - 06 - 07T07: 01: 56.000Z这样格式的日期转化成2023 - 06 - 07 07: 01: 56这样格式的
Vue.filter('dateFormat', function (value) {
  if (!value) return ''

  const date = new Date(value)
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
})

// 使用store
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
