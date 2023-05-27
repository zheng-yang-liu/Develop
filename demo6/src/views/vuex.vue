<template>
    <div>
        <h1>Vuex状态管理 </h1>
        <div>全局调用:{{$store.state.name}}</div>
        <div>局部调用:{{name}}{{userinfo.age}}</div>

        <h2>getters</h2>
        <div>全局调用:{{$store.getters.userID}}</div>
        <div>局部调用:{{userID}}</div>
        <h3>带参数</h3>
        <div>全局调用:{{$store.getters.setAge(10)}}</div>
        <div>局部调用:{{setAge(10)}}</div>

    </div>

</template>

<script>
    import {mapState,mapGetters} from "vuex"
    export default {
        data(){
            return{
                
            }
        },
        created(){
            console.log("使用生命周期函数调用state"+this.$store.state.name);
            console.log("使用生命周期函数调用getters"+this.$store.getters.userID);
            console.log("返回函数题经行返回值"+this.$store.getters.setAge(10));
            // $store.commit(tape函数名称,改变的值)
            this.$store.commit('setName','李四') 
        },
        // 自定义函数位置
        methods:{
            
        },
        computed:{//计算属性
            //拓展运算符
            ...mapState(['name', 'userinfo']),
            ...mapGetters(['userID','setAge'])
        },
        
    }
</script>

<style lang="scss" scoped>

</style>