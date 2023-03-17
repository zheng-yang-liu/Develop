<template>
    <div>
        <div @click="tiaozhuan()">点击跳转</div>
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
            
        },
        methods:{
            tiaozhuan(){
                //跳转页面(字符串，对象)
                // this.$router.push("/about");
                // this.$router.push("/user/1");
                // this.$router.push("/zymo/1?id=xxx");
                //对象
                // {name:"给路由对象定义的name的值"}
                // this.$router.push({name:"css"});
                //动态路由
                // {name:"",params:{定义的变量名称:变量的值}}
                // this.$router.push({
                //     name:"zy",
                //     params:{
                //         id:1
                //     }
                // });
                
                //get方式传参：？&
                // {name:"",params:{},query:{}}
                // this.$router.push({
                //     name:"zy",
                //     params:{
                //         id:1
                //     },
                //     query:{
                //         id:1,
                //         name:"张三"
                //     }
                // })
                // {path:"",query:{}}
                // this.$router.push({path:"/zymo/1"});
                // push的传参值和to里面是一样的
                // this.$router.push({path:"/css"});
                // this.$router.push({path:"/user/1"});
                this.$router.push({path:"/zymo/1",query:{id:1,name:"张三"}});
		
            }
        }
                
    }
</script>    

<style>

</style>
