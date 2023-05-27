<template>
    <div>
        <h1>bind.vue</h1>
        <router-link :to="{ name: 'ceshi', query: { param1: 'value1', param2: 'value2' }}">Go to Target</router-link>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>