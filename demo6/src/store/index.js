// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义的数据
    name: '张三',
    age:10,
    userinfo:{
      name: '王五',
      age:20
    }

  },
  getters: {
    // 针对数据进行二次计算
  },
  mutations: {
    // 操作数据 state
    // 同步操作
  },
  actions: {
    // 操作数据 state
    // 异步操作
  },
  modules: {
    // 
  }
})
