<template>
    <div>
        <div>
            <div class="dingbu-box">
                <img class="dingbu-box-img" src="../assets/image/dingbu.png" alt="">
            </div>
            <div class="wenzi-box">
                <div class="wenzi-box-1">您好！欢迎光临众智电子平台</div>
                <div class="wenzi-box-2">
                    <img class="wenzi-box-2-img" src="../assets/image/laba.png" alt="">
                    系统公告(9)
                </div>
                <div class="wenzi-box-3">系统公告文字展示系统公告文字展示系统公告</div>
                <div class="wenzi-box-4">
                    <img class="wenzi-box-4-img" src="../assets/image/dianhua.png" alt="">
                    400-044-044
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    .dingbu-box-img {
        width: 100%;
        height: 74px;
    }
    .wenzi-box{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid gainsboro;
        display: flex;
        /* (值为盒子的高度) */
        line-height: 30px;
        font-size: 14px;
    }
    .wenzi-box-1{
        margin-left: 30px;
        color: gray;
        margin-right: 20px;

    }
    .wenzi-box-2{
        color: rgb(229, 92, 96);
        display: flex;
        align-items: center;
        margin-right: 20px;

    }
    .wenzi-box-2-img{
        width: 20px;
        height: 20px;
    }
    .wenzi-box-3{
        color: rgb(229, 92, 96);
        margin-right: 20px;

        max-width: 210px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .wenzi-box-4{
        
        display: flex;
        align-items: center;
        color: rgb(229, 92, 96);
        margin-left: auto;
        margin-right: 30px;

    }
    .wenzi-box-4-img{
        width: 20px;
        height: 20px;
    }
</style>