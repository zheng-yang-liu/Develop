<template>

</template>

<script>
    import axios from "axios";
    export default{
        created(){
            axios.post("http://api.88gcc.cn/index.php/api/goods/craftLists",{
                craft_type: 2,

                fahuo_area: "130000",
                lingyu: "煤矸石",
                page: 1,
                shop_type:1,
                sort: 1,


                }).then(res=>{
                    this.list = res.data.data.data;
                    this.total_page = res.data.data.last_page;
                    console.log(res);
                });
        }
    }
</script>