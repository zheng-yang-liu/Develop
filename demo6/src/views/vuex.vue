<template>
    <div>
        <div>
            这是Vuex的一个实例
        </div>
        <div>全局使用</div>
        <div>{{$store.state.name}}</div>
        <div>{{$store.state.userinfo.name}}</div>
        <div></div>
        <div>第三种方法</div>
        <div>{{userinfo.name}}</div>
        <div>{{userinfo.age}}</div>

    </div>

</template>

<script>
    import {mapState} from "vuex"
    export default {
        data(){
            return{
                
            }
        },
        computed:{//计算属性
            //拓展运算符
            ...mapState(['name', 'userinfo'])

        },
        created(){
            console.log("第二种方法"+this.$store.state.name);
        }
    }
</script>

<style lang="scss" scoped>

</style>