<template>
    <div>
        <h1>我是组件的内容</h1>
        <slot name="header" :data='SlotDta' :data2='SlotDta2'></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                SlotDta:'我是子组件传递的内容',
                SlotDta2:'我是子组件传递的内容2'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>