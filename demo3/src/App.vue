<template>
  <div id="app">
    <div class="header">网页头部</div>
    <div class="nav">
      <router-link to="/">网站首页</router-link>
      <router-link to="/news">网站新闻</router-link>
      <router-link to="/user">个人中心</router-link>
    </div>
    <router-view></router-view>
    <div class="footer">网页尾部</div>
    
  </div>
</template>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}

  .header{
    widows: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: green;
  }
  .footer{
    widows: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: green;
  }
  .nav a{
  margin-right: 20px;
  }
</style>
