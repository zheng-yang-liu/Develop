<template>
    <div>
        <div class="news-item">
            <div>{{num}}{{childName}}这是一个新闻(父值的改变不印象子)</div>
            <!-- <div style="color:green">{{num}}{{name}}父值的改变影响子</div> -->
            <div>2023-03-22</div>
            <div @click="childName='李四'">更改childName</div>
        </div>
    </div>
</template>
<script>
    export default{
        // props:{
        //     name:String,
        //     num:Number
        // },
        // props:[
        //     "name"
        // ],
        data(){
            return{
                // childName:this.name,
                childName:"",
                num:""
            }
        },
        methods:{
            inti(name,num){
                console.log(name);
                console.log(num);
            }
        }
    }
</script>


<style>
    .news-item{
        border-bottom: 1px solid #efefef;
        padding: 5px 0px;
    }
    .news-item div:first-of-type{
        font-size: 14px;
    }
    .news-item div:last-of-type{
        font-size: 12px;
        color: #999;
        text-align: right;
    }
</style>