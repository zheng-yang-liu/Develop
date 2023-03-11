<template>
        <div>
            <!-- 普通形式 -->
            <div style="background-color: red; width: 50px ;height: 50px"></div>
            <!-- 对象形式 -->
            <div :style="{backgroundColor:color, width: width+'px', height: height+'px'}" @click="gaibian"></div>
            
            <div :style="'background-color:'+'blue;'+'width:'+'50px;'+'height:'+'50px'" ></div>
            
            
            <!-- 改进 -->
            <div
                :style="{ width: boxWidth + 'px', height: boxHeight + 'px', backgroundColor: boxColor }"
                @click="toggleSize"
            ></div>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                height:50,
                color:'green',
                width:50,
                // 实现div盒子的样式变量
                boxWidth: 100,
                boxHeight: 100,
                boxColor: 'red',
                // 用于确定盒子是否要放大还是缩小
                isGrowing: false,
                isGrowing2: false,
                }
        },
        methods: {
            gaibian(){
                
                if (this.isGrowing2) {
                    this.width =100;
                    this.height =100;
                } else {
                    this.width =50;
                    this.height =50;
                }
                // 对isGrowing标记经行取反用来改变下一次的操作
                this.isGrowing2 = !this.isGrowing2;
                
            },
            toggleSize() {
                if (this.isGrowing) {
                    this.boxWidth /= 1.2;
                    this.boxHeight /= 1.2;
                } else {
                    this.boxWidth *= 1.2;
                    this.boxHeight *= 1.2;
                }
                // 对isGrowing标记经行取反用来改变下一次的操作
                this.isGrowing = !this.isGrowing;
            }
        },
        
    }
</script>
<style >
    div{
        margin:10px;
    }
</style>
