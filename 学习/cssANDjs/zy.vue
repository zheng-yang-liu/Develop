<template>
    <div>
        <div>用户信息</div>
        <div>用户id:{{ this.user.id }}</div>
        <div>用户名称:{{ this.user.nama }}</div>
        <div>用户性别:{{ this.user.sex }}</div>
        <div>用户邮箱:{{ this.user.email }}</div>


    </div>
</template>

<script>
    export default{
        data(){
            return {
                users:[
                    {id:1,name:'用户1',sex:'男',email:'1@qq.com'},
                    {id:2,name:'用户2',sex:'男',email:'2@qq.com'},
                    {id:3,name:'用户3',sex:'男',email:'3@qq.com'},
                    {id:4,name:'用户4',sex:'男',email:'4@qq.com'},
                ],
                user:{},
            }
        },
        created(){
            //打印访问参数
            console.log(this.$route.params.id);
            var index1 = this.$route.params.id;
            console.log(index1);
            
            // this.users.map((item,index)=>{
            //     if(item.id == index1){
            //         this.user=users[index]
            //     }

            // });
            // 输出错误信息
            if(this.$route.params.id>4){
                this.user={id:0,name:'无此用户',sex:'男',email:''}
            }else{
                // 确定用户
                this.user=this.users[parserInt(this.$route.params.id)-1]
            }
        }
    }
    
</script>    

<style>

</style>
