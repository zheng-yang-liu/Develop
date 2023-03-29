<template>
    <div>
        <daohang></daohang>
        <sousuo></sousuo>
    </div>
</template>

<script>

    import sousuo from"@/components/sousuo.vue"
    import daohang from"@/components/daohang.vue"
    export default{
        components: {
            sousuo,
            daohang
		}
    }


</script>


<style>
        *{
        margin: 0px;
        padding: 0px;
    }
</style>