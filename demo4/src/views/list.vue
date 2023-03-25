<template>
	<div>
		<div class="add" @click="add">添加</div>
		<div class="news-item" v-for="(item,index) in list" :key="index">
			<div>{{item.name}}</div>
			<div @click="xiougai(item)">修改</div>
		</div>
		<formData ref="formdata"></formData>
	</div>
</template>

<script>
	import formData from "@/components/form.vue"
	export default{
		components:{
			formData
		},
		data(){
			return {
				list:[
					{name:"这是一个新闻"},
				]
			}
		},
		methods:{
			add(){
				this.$refs.formdata.title = "";
				this.$refs.formdata.showmodel = true;
			},
			xiougai(item){
				this.$refs.formdata.title = item.name;
				this.$refs.formdata.showmodel = true;
			}
		}
	}
</script>

<style>
	.add{
		color: red;
	}
	.news-item{
		border-bottom: 1px solid #efefef;
		padding: 5px 0px;
	}
	.news-item div:first-of-type{
		font-size: 14px;
	}
	.news-item div:last-of-type{
		font-size: 12px;
		color: #999;
		text-align: right;
	}
</style>