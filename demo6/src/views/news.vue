<template>
    <div>

        <div class="newslist">

            <div class="news-list">
                <!-- <newslist v-slot:user="scope"> -->
                <newslist v-slot:user={userinfo,num}>
                    {{ userinfo.name }}
                    {{ num }}
                    <!-- 访问子组件中的数据 -->
                </newslist>

                
                    <!-- <div>这没有使用具名插槽的内容</div> -->
                    <!-- <template v-slot:header>
                        <div>具名插槽</div>
                    </template> -->
                    <!-- <div>这没有使用具名插槽的内容</div> -->
                    <!-- <template v-slot:central>
                        <div>具名插槽</div>
                    </template> -->
                    <!-- <div>这没有使用具名插槽的内容</div> -->
                    <!-- <template v-slot:bottom>
                        <div>具名插槽</div>
                    </template> -->
                    <!-- <div>这没有使用具名插槽的内容</div> -->
                    <!-- <template v-slot:default >
                        <div>具名插槽(当使用v-slot:default的template属性时其他内容无法显示)</div>
                    </template> -->




                    <!-- <div style="color:red" @click="getclick">
                        这是一个div:::{{ num }}
                    </div> -->
                
            </div>
        </div>
        <div @click="getinfo">获取值</div>
    </div>
</template>
<script>
    import newslist from'@/components/newslist.vue'
    export default{
        data(){
            return{
                num:'father'
            }
        },
        components:{
            newslist
        },
        methods:{
            getinfo(){
                console.log(this.$refs);
            },
            getclick(){
                console.log('father')
            }
        }
    }
</script>

<style>
    .title{
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
    .newslist{
        width: 100%;
        border: 1px solid #999;
        border-radius: 5px;
        padding: 5px;
        /* box-sizing: content-box; */
        /* 使盒子显示全部的width站位 */
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .newslist-title{
        font-size: 16px;
        margin-bottom: 5px;
    }
    
</style>