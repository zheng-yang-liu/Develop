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
      age:20,
      userID:1
    }

  },
  getters: {
    // 针对数据进行二次计算
    // 名称(state){
      // return 显示的值
    // }
    userID(state){
      return state.userinfo.userID+1000
    },
    // 传入的值来选择传出的值
    setAge(state){
      return (num)=>{
        let newage = state.age+num;
          return newage
      }
    }


  },
  // $store.commit(tape函数名称,改变的值)
  // 变量的修改只能应用以该页面刷新便会原样
  mutations: {
    // 操作数据 state
    // 同步操作
    // 用来改变state的值
    // 名称(state,传参(可有可无)){
      // 函数体
    // }
    setName(state,name){
      state.name = name
    }

  },
  actions: {
    // 操作数据 state
    // 异步操作
  },
  modules: {
    // 
  }
})
