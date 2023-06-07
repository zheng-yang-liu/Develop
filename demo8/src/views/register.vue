<template>
  <div>
    <button type="text" @click="openTheLoginPopUpWindow">点击打开</button>

    <el-dialog
      title="注册"
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
              <!-- 昵称 -->
              <div class="form_input">
                <i class="el-icon-user"></i>
                <el-input
                  placeholder="请输入昵称"
                  v-model="form.nickname"
                  class="input"
                ></el-input>
              </div>
              <!-- 手机号 -->
              <div class="form_input">
                <i class="el-icon-phone"></i>
                <el-input
                  placeholder="请输入手机号"
                  v-model="form.phone"
                  class="input"
                ></el-input>
              </div>
              <!-- 密码 -->
              <div class="form_input">
                <i class="el-icon-lock"></i>
                <el-input
                  placeholder="请输入密码"
                  v-model="form.password"
                  show-password
                  class="input"
                ></el-input>
              </div>
              <!-- 确认密码 -->
              <div class="form_input">
                <i class="el-icon-lock"></i>
                <el-input
                  placeholder="请确认密码"
                  v-model="form.password2"
                  show-password
                  class="input"
                ></el-input>
              </div>
              <!-- 请输入邮箱 -->
              <div class="form_input">
                <i class="el-icon-message"></i>
                <el-input
                  placeholder="请输入邮箱"
                  v-model="form.emile"
                  class="input"
                ></el-input>
              </div>
              <!-- 输入验证码 -->
              <!-- 请输入邮箱 -->
              <div class="form_input">
                <i class="el-icon-warning-outline"></i>
                <el-input
                  placeholder="请输入验证码"
                  v-model="form.captcha"
                  class="input"
                ></el-input>
                <div class="captcha_box" @click="changeCode">
                  <div class="captcha_box_p">{{ captcha }}</div>
                </div>
              </div>
            </el-form>
          </div>

          <div class="dialog-footer">
            <el-button type="primary" @click="submitUserData" class="button"
              >确 定</el-button
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
      //   验证码
      captcha: 232323,
    }
  },
  methods: {
    // 提交数据
    submitUserData() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 判断form表单提交的内容都不为空
          //   验证昵称
          if (!('nickname' in this.form)) {
            return this.$message.error('请填写昵称')
          }

          //   验证手机号
          if (!('phone' in this.form)) {
            return this.$message.error('请填写手机号')
          }
          if (/^1\d{10}$/.test(this.form.phone) == false) {
            return this.$message.error('请输入正确的手机号')
          }

          //   验证密码
          if (!('password' in this.form)) {
            return this.$message.error('请填写密码')
          }

          //   验证确认密码
          if (!('password2' in this.form)) {
            return this.$message.error('请填写确认密码')
          }
          if (this.form.password != this.form.password2) {
            this.form.password2 = ''
            return this.$message.error('两次输入的密码不同 请重新输入')
          }

          //   验证邮箱
          if (!('emile' in this.form)) {
            return this.$message.error('请填写邮箱')
          }
          if (
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
              this.form.emile
            ) == false
          ) {
            return this.$message.error('请输入正确邮箱账号')
          }
          //   验证验证码
          if (!('captcha' in this.form)) {
            return this.$message.error('请填写验证码')
          }
          // 验证码不同
          if (this.form.captcha != this.captcha) {
            // 清空验证码的输入
            this.form.captcha = ''
            // 重新刷新验证码
            this.changeCode()
            // 提醒用户
            return this.$message.error('验证码不正确请重新输入')
          }
          // 进行数据库数据操作，请求链接
          console.log(this.form)
          //   关闭弹窗
          this.centerDialogVisible = false
        } else {
          // 表单校验不通过
          this.$message.error('请正确填写表单信息')
        }
      })
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
    //更换验证码
    changeCode() {
      // 生成一个新的六位随机数，并更新验证码
      const newCode = Math.floor(Math.random() * 900000) + 100000
      this.captcha = String(newCode) // 转为字符串形式，并更新验证码
    },
  },
  mounted() {
    // 加载验证码
    this.changeCode()
  },
}
</script>

<style>
.el-dialog {
  border-radius: 10px !important;
  display: flex;

  flex-direction: column;
  justify-content: center;
}
.login_box {
  width: 70%;
  display: flex;
  justify-content: center;
  /* background-color: red; */
  margin: 0 auto;
}
.login_login {
  /* width: 100%; */
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
  width: 100%;
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
/* 验证码 */
.captcha_box {
  width: 150px;
  background-color: rgb(213, 210, 210);
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* 鼠标悬浮变成手 */
  cursor: pointer;
  /* 禁止复制和选中文字 */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* 标准语法 */
}
.captcha_box_p {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>
