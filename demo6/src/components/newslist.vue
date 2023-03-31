<template>
    <div>
        <!-- <div class="news-item">
            <div>这是一个新闻</div>

            <slot>这是一个后备内容(当没有传递内容时显示)</slot>
        </div> -->
        <!-- <div>头部</div>
        <slot name="header"></slot>
        <div>中部</div>
        <slot name="central"></slot>
        <div>尾部</div>
        <slot name="bottom"></slot> -->
        <!-- 他的默认名字为default -->
        <!-- slot传值user的代码 -->
        <slot name="user" v-bind:userinfo="user" v-bind:num="1">
            {{ user.name }}
        </slot>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                num:'child',
                user:{
                    name:'张三',
                    age:'20',
                }
            }
        },
        methods:{
            getclick(){
                console.log('child')
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