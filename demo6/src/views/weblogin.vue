<template>
  <div>
    <div>账号：<input v-model="phone" type="text" placeholder="请输入账号 "/></div>
    <div>
      密码：<input v-model="code" type="text" placeholder="请输入验证码"/>

    </div>
    <div @click="login">登录</div>
  </div>
</template>

<script>
  import axios from "axios"
  export default{
    data(){
      return {
        phone:"",
        code:"",
        second:60,
        uid:"",
        is_send:false,
        setName:""//定时任务的名字
      }
    },
    methods:{
      login(){
        //发送请求
        let uid = this.uuid();
        axios.post("http://172.10.0.231:8181/user/login1",{
          username:this.phone,
          password:this.code,
          uid:uid
        },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }}).then(res=>{
          if(res.data.code == "00000"){
            window.open("http://172.10.0.231:8181/#/portal/index/common?uid="+uid+"&token="+res.data.info.token);
          }else{
            this.$message.error(res.data.msg);
          }
        })

      },
      uuid() {
          var s = [];
          var hexDigits = "0123456789abcdef";
          for (var i = 0; i < 36; i++) {
              s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }
          s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
          s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
          // s[8] = s[13] = s[18] = s[23] = "-";

          var uuid = s.join("");
          return uuid;
      }
  }
  }
</script>

<style>
</style>
