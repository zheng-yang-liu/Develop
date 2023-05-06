<template>
    <div class="box">

        <!-- 最外层盒子 -->
        <div class="box_box">
<!-- 让class为class="box_box"这个的盒子在class="box"这个盒子的水平中间的css代码 -->
            <!-- 品牌图标 -->
            <div class="left_img_box">
                <!-- 品牌图片 -->
                <img src="../img/log2.png" class="left_img_box_img">
            </div>
            <!-- 中间输入框 -->
            <div class="center_input_box">
                <!-- 输入框 -->
                <input type="text" class="center_input_box_input">
                <!-- sousuo按钮 -->
                <button class="center_input_box_sousuo">
                    <img src="../img/搜索.png" alt="">
                    搜索
                </button>
            </div>
            <!-- 登录和注册的按钮 -->
            <div class="center_button">
                <button class="center_button_one">免费注册</button>
                <button class="center_button_two">去登陆</button>
            </div>
            

            <!-- 右侧购物车图标 -->
            <div class="right_img">
                <img src="../img/购物车@2x.png" class="right_img_img">
            </div>
        </div>
        
    </div>
</template>
<!-- scoped一个组件的样式只适用于这个组件 -->
<style scoped>
    /* 最外层盒子 */
    .box{
        display: flex;
        justify-content: center;
    }
    /* 外层盒子 */
    .box_box{
        width: 960px;
        height: 60px;
        display: flex;
        align-items: center;
        /* background-color: antiquewhite; */


    }
    .left_img_box_img{
        width: 100px;
        height: 50px;
    }
    /* 中间输入框 */
    .center_input_box{
        display: flex;
        margin-left:150px;
    }
    .center_input_box_input{
        height: 45px;
        width: 250px;
        border: 2px solid red;
        /* box-sizing: border-box; */
        /* 设置左上和左下圆角css代码 */
        border-top-left-radius: 5px; 
        border-bottom-left-radius: 5px;
    }.center_input_box_sousuo{
        /* 内容居中对齐 */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 49px;
        border: 2px solid red;
        /*不设置左边框 */
        border-left: none; 
        background-color: red;
        /* 设置右上和右下圆角css代码 */
        border-top-right-radius: 5px; 
        border-bottom-right-radius: 5px;
    }
    /* 给.center_input_box_sousuo和.center_input_box_input设置红色边框 */
    /* 登录和注册的按钮 */
    .center_button{
        display: flex; 
        flex-direction: column; 
        width: 80px;
        margin-left: 15px;
    }
    .center_button_one{
        width: 100%; /* 设置宽度为100% */
        height: 23px;
        background-color: rgba(255,0,0,0.1);
        border: none;
        border-radius: 3px;
        margin-bottom: 2px;

    }
    .center_button_two{
        width: 100%; /* 设置宽度为100% */
        height: 23px;
        background-color: red;
        border: none;
        border-radius:3px;

    }
    /* 设置center_button_two和center_button_one上下排列 */
    /* 右侧购物车图标 */
    .right_img{
        margin-left: auto;
        margin-right: 50px;
    }
    .right_img_img{
        width: 20px;
        height: 20px;
    }
    
</style>