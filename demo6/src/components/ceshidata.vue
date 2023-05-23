<template>
    <div>
        <h1>测试组件数据传递--子组件</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                childUser:{
                    name:'zhangsan',
                    age:20
                }
            }
        },
        methods:{
            childDianji(){
                this.$message.success("我是子组件的dianji事件");
                // this.$message.error("我是子组件的dianji事件")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>