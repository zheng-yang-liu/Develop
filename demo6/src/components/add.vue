<template>
    <div>

        <el-dialog
            title="添加"
            :visible.sync="dialogVisible"
            width="500px"
            >
            




            <el-form ref="form" :model="form" size="mini" label-width="100px">
                <el-form-item label="项目名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="项目负责人">
                    <el-select v-model="form.leaderUserId" placeholder="请选择">
                    <el-option
                        v-for="item in userList"
                        :value="item.userId"
                        :label="item.nickName"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                



                <el-form-item label="项目编号">
                    <el-input v-model="form.projectNo"></el-input>
                </el-form-item>


                <el-form-item label="项目开始时间">
                    <el-date-picker
                        v-model="form.projectStartDate"
                        type="date"
                        placeholder="项目开始时间">
                        </el-date-picker>
                </el-form-item>

                <el-form-item label="项目结束时间">
                    <el-date-picker
                        v-model="form.projectEndDate"
                        type="date"
                        placeholder="项目结束时间">
                        </el-date-picker>
                </el-form-item>
                <el-form-item label="执行开始时间">
                    <el-date-picker
                        v-model="form.implementStartDate"
                        type="date"
                        placeholder="执行开始时间">
                        </el-date-picker>
                </el-form-item>
                <el-form-item label="执行结束时间">
                    <el-date-picker
                        v-model="form.implementEndDate"
                        type="date"
                        placeholder="执行结束时间">
                        </el-date-picker>
                </el-form-item>

                <template>
                    状态:
                    <el-radio v-model="form.status" label="0">启用</el-radio>
                    <el-radio v-model="form.status" label="1">禁用</el-radio>
                </template>
                
            
            
            </el-form>


<!-- implementEndDate:执行结束时间
implementStartDate:执行开始时间
leaderUserId:项目负责人
name:项目名称
projectEndDate:项目结束时间
projectNo:项目编号
projectStartDate:项目开始时间
status:状态(0-正常,1-禁用) -->




            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="pushData">确 定</el-button>
            </span>
        </el-dialog>



    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return {
                dialogVisible:false,
                form:{},
                userList:[]

            }
        },
        created(){

        },
        methods:{
            info(){
                this.dialogVisible  = true;
                let token =localStorage.getItem('token');
                // 请求项目负责人的数据
                axios.get('http://49.233.9.167:3002/system/user/getSelectList',{
                headers:{
                        Authorization:token,
                    }
                }).then(res=>{
                    if(res.data.code == 401){
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }else if(res.data.code == 200){
                        console.log(res.data.data);
                        this.userList=res.data.data;
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
            },
            // 传递数据
            pushData(){
                let token =localStorage.getItem('token');
                axios.post('http://49.233.9.167:3002/order/project',{
                    implementEndDate:this.form.implementEndDate,

                    implementStartDate:this.form.implementStartDate,
                    leaderUserId:this.form.leaderUserId,
                    name:this.form.name,
                    projectEndDate:this.form.projectEndDate,
                    projectNo:this.form.projectNo,
                    projectStartDate:this.form.projectStartDate,
                    status:this.form.status ,
                },{
                    headers:{
                        Authorization:token,
                    }
                }).then(res=>{
                    if(res.data.code == 401){
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }else if(res.data.code == 200){
                        this.dialogVisible=false;
                        this.form={};
                        this.$emit("getlist");
                        // this.$refs.add.$emit('getlist');
                    }else{
                        this.$message.error(res.data.msg)
                    }
                });
                

            }
        }
    }

</script>