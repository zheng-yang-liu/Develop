<template>
    <div>
        <div class="title">新闻列表</div>
        <div class="newslist">
            <div class="newslist-title">最新新闻</div>
            <div class="news-list">
                <newslist ref="info"></newslist>
            </div>
        </div>
        <div @click="getinfo">获取值</div>
    </div>
</template>
<script>
    import newslist from'@/components/newslist.vue'
    export default{
        components:{
            newslist
        },
        methods:{
            getinfo(){
                console.log(this.$refs);
            }
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