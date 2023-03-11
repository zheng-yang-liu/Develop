<template>
    <div>
        <div>用户信息</div>
        <div>用户id:{{ this.user.id }}</div>
        <div>用户名称:{{ this.user.name }}</div>
        <div>用户性别:{{ this.user.sex }}</div>
        <div>用户邮箱:{{ this.user.email }}</div>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {
                users: [
                    {id:1,name:'用户1',sex:'男',email:'1@qq.com'},
                    {id:2,name:'用户2',sex:'男',email:'2@qq.com'},
                    {id:3,name:'用户3',sex:'男',email:'3@qq.com'},
                    {id:4,name:'用户4',sex:'男',email:'4@qq.com'},
                ],
                user:{}
            }
        },
        created(){
            //打印路由id
            console.log(this.$route.params.id);
            //输出存在的真确人的信息
            console.log('路由id'+this.$route.params.id);
            console.log('数组长度'+this.users.length);
            if(this.$route.params.id>this.users.length){
                this.user={id:0,name:'无此用户',sex:'男',email:''}
            }else{
                this.users.map((item,index)=>{
                    if(item.id==this.$route.params.id){
                        this.user=this.users[index]
                    }
                });
            }
            //箭头函数
            const add = (x, y) => x + y;
            console.log(add(2,2))
            // find函数

            // array.find(function(元素, 下标, 目标数组) {
            // 返回条件的逻辑
            // });
            // array：要操作的数组。
            // function：一个函数，用于测试数组的每个元素是否符合条件。
            // currentValue：当前正在处理的元素。
            // index：当前正在处理的元素的索引。
            // array：调用 find 方法的数组。
            // thisArg：可选参数，函数执行时使用的this值。


            const numbers = [1, 2, 3, 6, 5];

            const result = numbers.find(function(number) {
            return number > 3;
            });

            console.log(result); // 6
        }
    }
</script>    

<style>

</style>
