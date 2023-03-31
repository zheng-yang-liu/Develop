<template>
	<div id="model" v-if="visible">
		<div class="model-content">
			<input type="text" v-model="title" placeholder="请输入标题"/>
			<div>
				<div @click="close">关闭</div>
				<div @click="submit">提交</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			visible:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				title:"",
				showmodel:false,
				key:-1
			}
		},
		watch:{
			visible(newvalue,oldvalue){
				if(newvalue == false){
					this.title = "";
					this.key=-1;
				}
			}
		},
		methods:{
			close(){
				// this.showmodel = false;
				//调用父组件的关闭
				this.$emit("close");
			},
			submit(){
				if(this.key==-1){
					this.$emit("add",this.title)
				}else{
					this.$emit("edit",{title:this.title,key:this.key})
				}
				
				this.title =""
			}
		}
	}
</script>

<style>
	#model{
        /* 定位头部导航栏，固定头部在最上方的位置 */
		position: fixed;
		top: 0px;
		left: 0px;
		right:0px;
		bottom:0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}
	.model-content{
		width: 400px;
		height: 300px;
		background-color: #fff;
        /* 定位 使之能在页面居中*/
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
        
	}
</style>