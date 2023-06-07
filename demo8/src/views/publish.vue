<template>
  <div>
    <button type="text" @click="openTheLoginPopUpWindow">点击打开</button>

    <el-dialog
      title="发布"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      custom-class="dialog"
    >
      <!-- 登录 -->
      <div class="login_box">
        <div class="login_login">
          <div class="login_from">
            <el-form ref="form" :model="form" label-width="80px">
              <div class="form_input">
                <div class="i">标题</div>
                <el-input
                  placeholder="请输入标题"
                  v-model="form.title"
                  class="input"
                ></el-input>
              </div>
              <div class="form_inputNo">
                <div class="i">内容</div>
                <el-input
                  placeholder="请输入内容"
                  v-model="form.content"
                  class="input"
                  type="textarea"
                  :show-word-limit="true"
                  :autosize="{ minRows: 10, maxRows: 20 }"
                ></el-input>
              </div>
            </el-form>
          </div>

          <div class="dialog-footer">
            <el-button type="primary" @click="submitUserData" class="button"
              >确 定</el-button
            >
            <el-button
              type="danger"
              @click="centerDialogVisible = false"
              class="buttonNo"
              >取消</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      // 登录数据
      form: {},
    }
  },
  methods: {
    // 提交数据
    submitUserData() {
      if (!('title' in this.form)) {
        this.$message.error('请填写标题')
      }
      if (!('content' in this.form)) {
        this.$message.error('请填写内容')
      }
      console.log(this.form)
      //   进行数据传递
      //   关闭弹窗
      this.centerDialogVisible = false
    },

    // 打开登录弹窗
    openTheLoginPopUpWindow() {
      // 清空form
      this.form = {}
      // 打开弹窗
      this.centerDialogVisible = true
    },
    // 跳转到注册页面
    ToRegisterPath() {
      // 跳转逻辑
    },
  },
}
</script>

<style>
.el-dialog {
  border-radius: 10px !important;
  width: 50% !important;
}
.login_login {
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}
.login_from {
  /* background-color: blue; */
  display: flex;
  justify-content: center;
}
.form_input {
  width: 500px;
  display: flex;
  /* background-color: green; */
  align-items: center;
  margin-bottom: 20px;
}
.form_inputNo {
  display: flex;
  margin-bottom: 10px;
}
.i {
  width: 50px;
  font-size: 16px;
  font-weight: bold;
  color: black;
}
.input {
  margin-left: 10px;
}
.dialog-footer {
  /* background-color: green; */
  display: flex;
}
.button {
  width: 20%;
  /* background-color: red; */
  margin-left: auto;
}
.buttonNo {
  width: 20%;
  background-color: red;
  margin-right: 13%;
}
.register {
  display: flex;
  justify-content: center;
}
.register p {
  font-size: 10px;
  color: blue;

  cursor: pointer;
}
</style>
