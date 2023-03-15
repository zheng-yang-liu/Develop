<template>
    
        <div class="index">
            <div>个人中心</div>
            <div>张三的个人信息</div>
            <div class="user-nav">
                <router-link to="/user/info">基本信息</router-link>
                <router-link to="/user/like">我的喜欢</router-link>
                <router-link to="/user/read">我的浏览</router-link>
            </div>
            <router-view></router-view>
        </div>
</template>
<style>
    .index{
        width: 100%;
        height: 400px;
        background-color: yellow;
        font-size: 16px;
    }
    .user-nav{
        margin-top: 10px;
    }
    .user-nav a{
        font-size: 12px;
        margin-right: 10px;
    }
</style>