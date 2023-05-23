<template>
    <div>
        <h1>测试组件数据传递--父组件</h1> 
        <div @click="getChidData">点击获取子组件的数据</div>
        {{user}}
        <button @click="getMethods">点击我使用子组件的dianji事件</button>
        <ceshidata ref="childData"></ceshidata>
        
    </div>
</template>

<script>
    import ceshidata from "@/components/ceshidata"
    export default {
        data(){
            return{
                user:{}
            }
        },
        components:{
            ceshidata
        },
        methods:{
            getChidData(){
                let childDataUser = this.$refs.childData.childUser;
                console.log(childDataUser);
                this.user = childDataUser;
            },
            getMethods(){
                this.$refs.childData.childDianji();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>