<template>
    <div>
        <div>
            手机号:
            <input v-model="phone" type="text" placeholder="请输入手机号">
        </div>
        <div>
            验证码:
            <input v-model="code" type="text" placeholder="请输入验证码">
            <span v-if="is_send">{{ second }}S</span>
            <span v-else @click="sendmsg">发送验证码</span>
        </div>
        <div @click="long">登录</div>

    </div>
</template>


<script>
    import axios from "axios"
    export default {
        data(){
            return{
                phone:"",
                code:"",
                is_send:false,
                second:10
            }
        },
        methods:{
            long(){
                // 验证表单
                if(this.phone==""){
                    return this.$message.error("请输入手机号")
                }
                if(/^1\d{10}$/.test(this.phone)==false){
                    return this.$message.error("请输入正确的手机号")
                }
                if(this.code == ""){
                    return this.$message.error("请输入验证码")
                }
                // 请求连接
                axios.post("http://49.233.9.167:3002/app/customerUser/phoneLogin",{
                    phone:this.phone,
                    code:this.code,
                    miniAppCode:"1"
                }).then(res=>{
                    if(res.data.code == 200){
                        
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
            },
            sendmsg(){
                // 验证表单
                if(this.phone==""){
                    return this.$message.error("请输入手机号")
                }
                if(/^1\d{10}$/.test(this.phone)==false){
                    return this.$message.error("请输入正确的手机号")
                }
                // 请求接口
                axios.post("http://49.233.9.167:3002/app/customerUser/smsCode",{
                    phone:this.phone
                }).then(res=>{
                    if(res.data.code == 200){
                        // this.$message.success("发送成功");
                        this.is_send= true;
                        this.second=10;
                        // 秒数开始倒计时
                        // let name= setInterval(()=>{
                        //     this.second--;
                        //     if(this.second==0){
                        //         // 停止倒计时
                        //         clearInterval(name)
                        //         this.is_send=false;
                        //     }
                        // },1000);
                        this.dumiao();
                    }else{
                        this.$message.error(res.data.msg);
                    }
                })
            },
            dumiao(){
                setTimeout(()=>{
                    this.second--;
                    if(this.second > 0){
                        this.dumiao();
                    }else{
                        this.is_send=false;
                    }
                },1000)
            }
            
        }
    }
</script>