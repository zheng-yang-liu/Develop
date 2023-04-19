<template>
    <div v-if="info.data">
        <div style="display: flex;margin-bottom: 10px;">
            <div class="city" v-for="(item,index) in list" :key="index">
                <div 
                    @click="genghuan(item.city_id,index)" 
                    :class="{ 'active': index === activeIndex }"
                >
                {{ item.city }}</div>
            </div>
        </div>
        
        <div>当前城市：{{ info.cityInfo.city }}</div>
        <div>最新的更新日期：{{ info.time }}</div>
        <div>七天的天气预报</div>
        <div class="list">
            <div class="item" v-for="(item,index) in info.data.forecast" v-if="index<7">
                <div>日期:{{ item.ymd}}</div>
                <div>星期:{{ item.week}}</div>
                <div>high:{{ item.high}}</div>
                <div>low:{{ item.low}}</div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return{
                info:{},
                list:[
                    {city:"天津市",city_id:"101030100"},
                    {city:"北京",city_id:"101010100"},
                    {city:"重庆",city_id:"101040100"},
                ],
                activeIndex: 0
            }
        },
        created(){
            axios
            .get("http://t.weather.sojson.com/api/weather/city/101030100")
            .then(res=>{
                if(res.data.status==200){
                    this.info=res.data;
                }else{
                    console.log(res.message);
                }
            })
            .catch(res=>{
                console.log(res);
            })
        },
        mounted(){
            // axios.get/post(API接口连接).then(res=>{
                // 请求成功返回数据
            // }).catch(res=>{
                // 失败的后的返回值
            // })
        },
        methods:{
            genghuan(city_id,index){
                this.activeIndex = index;
                axios
                .get("http://t.weather.sojson.com/api/weather/city/"+city_id)
                .then(res=>{
                    if(res.data.status==200){
                        this.info=res.data;
                    }else{
                        console.log(res.message);
                    }
                })
                .catch(res=>{
                    console.log(res);
                })
            }
        }
            
    }
</script>

<style>
.city{
    margin-right: 10px;
    box-sizing: border-box;
}
.active {
    color: red;
}
.list{
    width: 900px;
    display: flex;
    /* 一行元素占满后自动换行的css代码 */
    flex-wrap: wrap;

}
.item{
    padding: 10px;
    width: 200px;
    height:100px;
    margin: 20px;
    border: 1px solid gray;
    box-sizing: border-box;
}
</style>