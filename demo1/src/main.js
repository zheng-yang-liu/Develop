import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入文件不写后缀时
//根据路径直接匹配后缀查找文件
//根据文件路径按照文件夹的形式处理文件路径然后在找的是index.js 
import data from './utils/data'

createApp(App).use(store).use(router).mount('#app')
