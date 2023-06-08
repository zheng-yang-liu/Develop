<template>
  <div>
    <div class="box">
      <div class="p_box">
        <p
          class="p_box_p"
          v-for="(item, index) in contentList"
          :key="item.id"
          v-if="index < 1"
        >
          {{ item.create_time | dateFormat }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      contentList: [],
    }
  },
  mounted() {
    axios.post('http://localhost:3000/selectContent').then((res) => {
      console.log(res.data.data)
      this.contentList = res.data.data
      console.log(this.contentList)
    })
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10000px;
  background-color: red;
}
.p_box {
  width: 800px;
  height: 2000px;
  background-color: #fff;
}
.p_box_p {
  // 保留文章原始样貌输出
  white-space: pre-line;
  // text-indent: 2em;
}
</style>
