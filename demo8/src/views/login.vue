<template>
  <div>
    <button type="text" @click="openTheLoginPopUpWindow">点击打开</button>

    <el-dialog
      title="登录"
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
                <i class="el-icon-user"></i>
                <el-input
                  placeholder="请输入账号"
                  v-model="form.phone"
                  class="input"
                ></el-input>
              </div>
              <div class="form_input">
                <i class="el-icon-lock"></i>
                <el-input
                  placeholder="请输入密码"
                  v-model="form.password"
                  class="input"
                ></el-input>
              </div>
            </el-form>
          </div>

          <div class="dialog-footer">
            <el-button type="primary" @click="submitUserData" class="button"
              >确 定</el-button
            >
          </div>
          <div class="register">
            <p @click="ToRegisterPath">还没有账号,前往注册</p>
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
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 表单校验通过，可以进行提交操作
          if (!this.form.phone || !this.form.password) {
            // 账号或密码为空
            this.$message.error('账号或密码不能为空')
          } else {
            // 账号密码都有值
            this.$message.success('提交表单成功');
            console.log(this.form);
            // 关闭弹窗
            this.centerDialogVisible = false;
            // 请求数据
          }
        } else {
          // 表单校验不通过
          this.$message.error('请正确填写表单信息')
        }
      })
    },

    // 打开登录弹窗
    openTheLoginPopUpWindow () {
      // 清空form
      this.form = {};
      // 打开弹窗
      this.centerDialogVisible = true;
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
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.form_input i {
  font-weight: bold;
  font-size: 20px;
  color: black;
}
.input {
  margin-left: 10px;
}
.dialog-footer {
  /* background-color: green; */
  display: flex;
  justify-content: center;
}
.button {
  width: 70%;
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
