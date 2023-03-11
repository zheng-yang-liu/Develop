import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import date from './utils/date'
//引入文件不写后缀时
//根据路径直接匹配后缀查找文件
//根据文件路径按照文件夹的形式处理文件路径然后在找的是index.js 
//以上两种都不行显示找不到
//以属性进追加(名字必须加$符号)
Vue.prototype.$date = date;
// 全局选择导入
import {num} from '@/utils/str';
Vue.prototype.$num = num;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
