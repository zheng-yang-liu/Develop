<template>
    <div class="back">
        <div class="box">
            <div class="box_box">
                <div class="code">
                    <el-input
                        placeholder="请输入账号"
                        v-model="admin"
                        clearable>
                    </el-input>
                </div>
                <div class="password">
                    <el-input 
                        placeholder="请输入密码" 
                        v-model="password" 
                        show-password></el-input>
                </div>
                
                
                <div class="yzm">
                    <el-input
                        placeholder="请输入验证码"
                        v-model="code"
                        clearable>
                    </el-input>
                    <img 
                        @click="changeimg()" 
                        :src="'data:image/gif;base64,'+img_src" 
                        class="yzm_img">
                </div>
                <div class="jzmm">
                    <el-radio 
                    v-model="radio" 
                    label="1">记住密码</el-radio>
                </div>
                <el-button 
                    class="my-btn" 
                    type="primary" 
                    @click="qingqiu()">登录</el-button>
            </div>
        </div>
        
        
    </div>
</template>

<script>
    // import axios from 'axios'
    import request from '@/utils/request'
    
    export default{
        data(){
            return{
                admin:'',
                code:'',
                password:'',
                img_src:'',
                radio:0,
                uuid:'',
            }
        },
        created(){
            this.getimg();

        },
        
        mounted() {
            document.addEventListener('keydown', this.handleEnterKey)
        },
        beforeDestroy() {
            document.removeEventListener('keydown', this.handleEnterKey)
        },




        methods:{
            getimg(){
                request.get('http://49.233.9.167:3002/code')
                .then(res=>{
                    // console.log(res);
                    // console.log(res.data.data.img);
                    // console.log(res.data.data.uuid);
                    this.uuid=res.data.uuid
                    this.img_src=res.data.img
                });
            },
            changeimg(){
                this.getimg();
            },
            handleEnterKey(event) {
                if (event.keyCode === 13) {
                // 处理回车键按下时要执行的代码
                    this.qingqiu();
                }
            },
            qingqiu(){
                request.post('http://49.233.9.167:3002/auth/login',{
                    // code：验证码 
                    code:this.code,
                    // password：密码
                    password:this.password,
                    // username：用户名
                    username:this.admin,
                    // uuid：uuid，由上述接口返回
                    uuid:this.uuid,
                })
                .then(res=>{
                    // 存储本地token
                    localStorage.setItem('token',res.data.access_token);
                    // 跳转到其他项目
                    this.$router.push("/pro")
                })
                // 重新赋值
                // this.admin=''
                // this.code=''
                // this.password=''
            }
            
        },
        

    }
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    .back{
        height:100vh; 
        width:100vw;
        display: flex;
        /* 水平居中 */
        justify-content: center; 
         /* 垂直居中 */
        align-items: center;
    }
    .box_box{
        /* 文字居中 */
        /* text-align: center; */
        /* background-color: #fff; */
        /* border-radius: 20px;
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%); */
        width: 300px;
        height: 350px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }
    .code{
        margin-bottom: 10px
    }
    .password{
        margin-bottom: 10px
    }
    .yzm{
        display: flex;
        margin-bottom: 10px
    }
    .yzm_img{
        width: 150px;
        height: 38px;
        margin-left: 10px
    }
    .my-btn {
        width: 300px;
    }
    .jzmm{
        margin-bottom: 10px;
    }
</style>