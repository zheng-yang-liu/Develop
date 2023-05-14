// 封装axios
import axios from "axios"
import router from "@/router"
import elementUI from "element-ui"

// 实例化
//创建一个axios实例如果在5秒内未响应，请求被取消
const a= axios.create({
    timeout:5*1000
})

// 拦截请求发出
a.interceptors.request.use(config=>{
    console.log(config);
    // 改变头信息
    let token =localStorage.getItem('token');
    if(token){
        config.headers.Authorization=token;
    } 

    return config
})

// 拦截返回值
a.interceptors.response.use(sucess=>{
    if(sucess.data.code == 401){
        router.push('/')
        return Promise.resolve("请登录");//返回的是错误的值catch
    }else if(sucess.data.code == 200){
        return Promise.resolve(sucess.data);
    }else{
        elementUI.Message.error("接口请求失败");
        return Promise.reject(sucess.data.msg);
    }

},error=>{
    // 接口请求不同通过
    elementUI.Message.error("接口错误,请重试");
    return Promise.reject("接口请求错误");
})




export default a;