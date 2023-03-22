<template>
    <div>
        <div class="title">首页</div>
        <div class="newslist">
            <div class="newslist-title">最新新闻</div>
            <div class="news-list">
                <newslist></newslist>
            </div>
        </div>
        <div class="newslist">
            <div class="newslist-title">推荐新闻</div>
            <div class="news-list">
                <newslist></newslist>
            </div>
        </div>
        <router-link to="/news">更多新闻》</router-link>
        
    </div>
</template>
<script>
    import newslist from'@/components/newslist.vue'
    export default{
        components:{
            newslist
        }
    }
</script>

<style>
    .title{
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
    .newslist{
        width: 100%;
        border: 1px solid #999;
        border-radius: 5px;
        padding: 5px;
        /* box-sizing: content-box; */
        /* 使盒子显示全部的width站位 */
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .newslist-title{
        font-size: 16px;
        margin-bottom: 5px;
    }
    
</style>