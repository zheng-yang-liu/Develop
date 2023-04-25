所需文件
1、wlogin.vue:登录页面
2、pro.vue:数据管理页面
3、add.vue:添加数据组件




# 需要的接口url链接
## 1、wlogin.vue:登录页面

    http://49.233.9.167:3002/code  GET请求   返回所需的数据

        img     是显示的验证码图片
        uuid    是登录接口需要传输的参数(来判断验证吗是否正确)

    http://49.233.9.167:3002/auth/login  POST请求   传递验证数据并判断验证码是否输入的正确

        // code：验证码 
        code:this.code,

        // password：密码
        password:this.password,

        // username：用户名
        username:this.admin,

        // uuid：uuid，由上述接口返回
        uuid:this.uuid,

        返回成功后把用户信息存储到浏览器本地便于后续页面验证数据的存在
            // 存储本地token
            localStorage.setItem('token',res.data.data.access_token);



## 2、pro.vue:数据管理页面

    http://49.233.9.167:3002/order/project/list     使用GET传参的形式

        GET传参的例子
        在params:{key:value}中写参数会自动转化成拼接的形式
        在headers:{key:value}中写的参数会传入到在header头里简化get传参的链接文本
        axios.get('http://49.233.9.167:3002/order/project/list',{
                    params:{
                        // 实际的get传参
                        pageNum:this.page,
                        pageSize:this.pageSize,
                        name:''
                    },
                    headers:{
                        Authorization:token,
                    }
                })


## 3、add.vue:添加数据的组件

    http://49.233.9.167:3002/system/user/getSelectList      GET传参     请求项目负责人的数据

    http://49.233.9.167:3002/order/project      post传参    向数据库传递数据
        implementEndDate:执行结束时间
        implementStartDate:执行开始时间
        leaderUserId:项目负责人
        name:项目名称
        projectEndDate:项目结束时间
        projectNo:项目编号
        projectStartDate:项目开始时间
        status:状态(0-正常,1-禁用)

# 父组件和子组件之间传递数据和进行函数调用的方法

    在父组件中使用子组件的属性(变量)和方法
        父组件:
            <add ref="add" @getlist="page=1,getData()"></add>
            使用属性
                this.$refs.add.属性名;
            使用方法
                this.$refs.add.方法名();
        子组件:
            定义相应的
                属性名
                方法名

    在子组件中使用父组件的属性和方法
        父组件:
            使用方法
                <add ref="add" @方法名="page=1,getData()"></add>
            使用属性
                <child-component :变量名="变量值"></child-component>
        子组件:
            使用方法
                this.$emit("方法名");
            使用属性
                <div>{{ msg }}</div>
                export default {
                    props: ['变量名']
                }
                或者
                    export default {
                        props: {
                            parentVariable: String
                        }
                    }

        


