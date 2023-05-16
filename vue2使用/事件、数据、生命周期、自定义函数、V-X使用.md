## 事件、数据、生命周期函数、自定义函数、v-X使用

## 事件

### 点击事件

```
@click
<div @click="函数名">点击我</div>
```


### 数据定义和使用

数据的定义

```
data(){
	return:{
		数据名:值
	}
}
```

数据的使用

```
<div>{{数据名}}</div>
```

### 生命周期函数

```
在页面加载的时候执行代码
mounted(){

},
created(){

}
```

### 自定义函数

```
methods(){
	函数名(){
		函数体
	}
}
```

### v-X使用

v-model双向动态数据绑定，多用于网页输入数据的绑定

```
<div v-model="数据"></div>
```

v-bind单向动态数据绑定，多用于标签属性的动态绑定

```
主要用于属性绑定，比如class属性，style属性，value属性，href属性等等，只要是属性，就可以用v-bind指令进行绑定。v-bind:有一个对应的语法糖，也就是简写方式 :属性名
```

动态绑定样式

```
 .inner{
 	color:red,
 	font-size:20px
 }
 <div :class="inner">我是inner</div>
```

