<template>
    <div>
    <input type="text" v-model="inputValue">
    </div>
</template>
    
<script>
    export default {
        data() {
            return {
                inputValue: ''
            }
        },
        mounted() {
            document.addEventListener('keydown', this.handleEnterKey)
        },
        beforeDestroy() {
            document.removeEventListener('keydown', this.handleEnterKey)
        },
        methods: {
            handleEnterKey(event) {
                if (event.keyCode === 13) {
                // 处理回车键按下时要执行的代码
                console.log(`Input value is ${this.inputValue}`)
                }
            }
        }
    }
</script>
    