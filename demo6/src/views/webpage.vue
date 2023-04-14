<template>
    <div>
        <div>
            装备领域:
            <span v-for="item in lingyu" :key="item.id" 
                @click="changelingyu(item.name)"
                :style="item.name==lingyuName?'color:red':''"
                >{{ item.name }}</span>
        </div>
        <div>
            装备类型:
            <span @click="changeleixing('')" :style="leixing==''?'color:red':''">全部</span>
            <span @click="changeleixing(1)" :style="leixing==1?'color:red':''">单一</span>
            <span @click="changeleixing(2)" :style="leixing==2?'color:red':''">成套</span>
            <span @click="changeleixing(3)" :style="leixing==3?'color:red':''">二手</span>
        </div>
        <div>
            发货地址:
            <span v-for="item in dizhi" :key="item.value" 
            @click="changedizhi(item.value)"
            :style="item.value==value?'color:red':''"
            >{{ item.label}}</span>
        </div>
        <div>
            商家筛选:
            <span @click="changeshangjia(0)" :style="type==0?'color:red':''">全部商家</span>
            <span @click="changeshangjia(1)" :style="type==1?'color:red':''">平台认证商家</span>
            <span @click="changeshangjia(2)" :style="type==2?'color:red':''">VIP商家</span>
        </div>
        <div>
            排序类型:
            <span @click="changepaixu('')" :style="sort==''?'color:red':''">默认排序</span>
            <span @click="changepaixu(1)" :style="sort==1?'color:red':''">最新发布</span>
            <span @click="changepaixu(2)" :style="sort==2?'color:red':''">人气排序</span>
        </div>

        <div class="list">
            <div class="item" v-for="item in list" :key="item.id">
                <img :src="item.pic" />
                <div>{{ item.gufei_name }}</div>
            </div>
        </div>
        <!-- 分页规则 -->
        <div>
			<span @click="changepage(1)">首页</span>
			<span v-if="page == 1">上一页</span>
			<span v-else @click="changepage(page-1)">上一页</span>
            <template v-if="total_page > 5">
                <span v-if="page <= 3 && total_page>=5">
                    <a v-for="item in 5" @click="changepage(item)"  :style="page==item?'color:red':''">{{item}}</a>
                </span>
                <span v-if="page >3 && page < total_page-2">
                    <a v-for="item in 5" @click="changepage(page - 3 + item)" :style="page==(page - 3 + item)?'color:red':''">{{ page - 3 + item }}</a>
                </span>
                <span v-if="page >=total_page-2">
                    <a v-for="item in 5" @click="changepage(total_page-5+item)" :style="page==(total_page-5+item)?'color:red':''"> {{ total_page-5+item }}</a>
                </span>
            </template>
            <span v-else >
                <a v-for="item in total_page" @click="changepage(item)" :style="page==item?'color:red':''">{{ item }}</a>
            </span>
			
			<span v-if="page == total_page">下一页</span>
			<span v-else @click="changepage(page+1)">下一页</span>

			<span @click="changepage(total_page)">尾页</span>
		</div>

    </div>
</template>


<script>
    import axios from "axios";
    import { regionData } from "element-china-area-data";//引入
    export default{
        data(){
            return {
                lingyu:[],
                dizhi:regionData,
                list:[],
                page:1,//当前页数
				total_page:0,//总页数
                lingyuName:'',
                leixing:'',
                value:'',
                type:'',
                sort:'',

            }
        },
        created(){
            // 请求数据
            axios.post("http://api.88gcc.cn/index.php/api/Allcategory/catName",{
                pid:31
            }).then(res=>{
                if(res.data.code == 1){
                    this.lingyu=res.data.data[0].class;
                }else{
                    this.$message.error(res.data.msg)
                }
            })
        },
        mounted(){
            //请求图片数据
            //获取页面的基础数据
            this.page=1;
            this.lingyuName='';
            this.leixing='';
            this.value='';
            this.type='';
            this.sort='';
            this.getData();
            console.log(this.dizhi)
			
        },
        methods:{
            getData(){
                -````
            },
            // 改变页数改变数据
            changepage(page){
                this.page = page
                this.getData();
            },
            // 改变领域改变数据
            changelingyu(name){
                this.lingyuName=name;
                this.page=1;
                this.getData();
            },
            // 改变装备类型数据
            changeleixing(leixing){
                this.leixing=leixing;
                this.page=1;
                this.getData();
            },
            // 改变地址改变数据
            changedizhi(value){
                this.value=value;
                console.log(this.value);
                this.page=1;
                this.getData();
            },
            // 改变商家改变数据
            changeshangjia(type){
                this.type=type;
                this.page=1;
                this.getData();
            },
            // 改变排序改变数据
            changepaixu(sort){
                this.sort=sort;
                this.page=1;
                this.getData();
            }
            
        }
    }
</script>



<style>
    span{
            margin-right:10px
        }
    .list{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    .item{
        margin: 10px;
        padding: 10px;
        border: 1px solid #999;
    }
    .item img{
        width: 100px;
        height:100px;
    }
</style>