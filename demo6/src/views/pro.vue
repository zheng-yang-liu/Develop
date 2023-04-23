<template>

    <div class="box">
        <div class="list">
            <!-- 追加数据 -->
            
            <el-button type="primary" @click="addData">添加</el-button>


            <!-- 信息列表 -->
            <div>
                <el-table :data="list" style="width: 1000px" stripe>
                    <!-- <el-table-column prop="name" label="项目名称"></el-table-column> -->
                    <el-table-column
                        prop="leaderUserId"
                        label="主键ID"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="项目名称"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="leaderUserName"
                        label="项目负责人"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="projectNo"
                        label="项目编号"
                        width="180"
                        >
                    </el-table-column>


                    <el-table-column
                        prop="status"
                        label="状态"
                        width="180"
                        >
                        <template slot-scope="scope">
                            {{ scope.row.status ==0 ? '启用' : '禁用' }}
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="address"
                        label="操作">
                    </el-table-column>
                </el-table>
            </div>
            <!-- 分页 -->
            <div class="pagination">
                <!-- el-element-ui分页 -->
                <!-- :page-size="pageSize"页显示多少条 -->
                <!-- :total="total"  总条数-->
                <el-pagination
                    :background="true"
                    :page-size="pageSize"
                    :page-sizes="[1, 10, 50, 100]"
                    :total="total"
                    layout="total,slot,sizes,prev,pager,next,jumper"
                    @size-change="changesize"
                    @current-change="changepage"
                >
                </el-pagination>
            </div>
            
        
        </div>
        <add ref="add" @getlist="page=1,getData()"></add>
    </div>
</template>


<script>
    import axios from 'axios'
    import add from '../components/add.vue'
    export default {
        components:{
            add
        },
        data(){
            return {
                list:[],
                page:1,
                total:0,
                pageSize:1,

            }
        },
        created(){
            this.getData();
        },
        methods:{
            // 请求参数
            getData(){
                let token =localStorage.getItem('token');
                // console.log(token);
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
                }).then(res=>{
                    if(res.data.code == 401){
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }else if(res.data.code == 200){
                        // console.log(res);
                        this.list = res.data.rows;
                        // 获取总页数
                        this.total = res.data.total;
                        // console.log(this.total);
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                },

            changesize(e){
                this.pageSize=e;
                this.page=1;
                this.getData();
            },
            changepage(page){
                this.page = page
                this.getData();
            },
            // 添加参数
            addData(){
                this.$refs.add.info();
                
            }
        }
    }

</script>


<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    .box{
        height: 100vh;;
        width:100vw;
        display: flex;
        justify-content: center;
    }

    .pagination{
        margin-top: 20px;
        float: right;
    }

</style>