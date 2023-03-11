<template>
    <div>
        
    </div>
</template>
<script>
    //单文件入
    // import date from "@/utils/date.js"

    // main.js文件进行引入
    import {get} from '@/utils/str'
    

    export default {
        mounted() {
            
            // console.log(date.day());
            console.log(get());
            console.log('全局选择导入');

            console.log(this.$date.day());
            console.log(this.$num());
            // 查看全部的路由信息
            console.log(this.$router);
            //获取当前访问页面的路由信息
            console.log(this.$route);
            
        }
    }
</script>    

<style>

</style>
