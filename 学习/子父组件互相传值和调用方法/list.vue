<template>
	<div>
		<!-- 
			添加、修改、删除、都是list本身文件的内容
			只有信息输入框是formData组件的内容

			传递信息
				父组件给子组件传递信息
					通过给组件设置ref="formdata"属性
					给定组件title属性值来给子组件的title属性值传递数值
					this.$refs.formdata.title = item.name;
				子组件给父组件传递信息
					通过 this.$emit()方法进行信息的传递
					this.$emit("方法名字（自己取）",传值变量可省略)
					this.$emit("edit",{title:this.title,key:this.key})
					父组件在使用信息时
					需要添加
					@属性名="方法名"
					在编写方式即可

		
		-->
		<div class="add" @click="add">添加</div>
		<div class="news-item" v-for="(item,index) in list" :key="index">
			<div>{{item.name}}</div>
			<div @click="xiougai(item,index)">修改</div>
			<div @click="dele(index)">删除</div>
		</div>

		<formData 
			ref="formdata"
			:visible="parentVisib"
			@close="closeParent"
			@add="parentAdd"
			@edit="parentEdit"
			>
		</formData>
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
					
				],
				parentVisib:false,
			}
		},
		methods:{
			add(){
				this.parentVisib = true;
				// this.$refs.formdata.title = "";
				// this.$refs.formdata.showmodel = true;
			},
			xiougai(item,index){
				this.parentVisib = true;
				
				this.$refs.formdata.title = item.name;

				this.$refs.formdata.key = index;
				// this.$refs.formdata.showmodel = true;
			},
			closeParent(){
				this.parentVisib = false;
			},
			parentAdd(nameValue){
				this.list.push({name:nameValue});
				console.log("add被执行了");
				this.parentVisib = false;
			},
			dele(index){
				this.list.splice(index,1);
			},
			parentEdit(obj){
				this.list[obj.key].name= obj.title;
				this.parentVisib= false;
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