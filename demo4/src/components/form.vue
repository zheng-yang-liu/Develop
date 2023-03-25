<template>
	<div id="model" v-if="showmodel">
		<div class="model-content">
			<input type="text" v-model="title" placeholder="请输入标题"/>
			<div @click="close">关闭</div>
			<div>提交</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:"",
				showmodel:false
			}
		},
		methods:{
			close(){
				this.showmodel = false;
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