<template>
    <div>
        <div :class="isclass?'one':'two'" @click="isclass=!isclass;">点击我改变我的背景颜色</div>
        <router-link to="/ceshi">点击我进行跳转</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                sty:'one',
                isclass:true
            }
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .one{
        background-color:red;
        width:100px;
        height:100px;
        
    }
    .two{
        background-color:green;
        width:100px;
        height:100px;
    }
    div{
        
    }
</style>