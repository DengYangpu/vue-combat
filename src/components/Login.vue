<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="form_box">
        <el-form label-width="0px" ref="loginForm" :model="login" :rules="loginRules">
          <el-form-item prop="username">
            <el-input v-model="login.username" placeholder="用户名" prefix-icon="iconfont el-icon-user-solid" autofocus="true"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="login.password" placeholder="密码" type="password"  prefix-icon="iconfont el-icon-lock"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn_box">
          <el-button type="primary">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    login: {
      username: '',
      password: ''
    },
    loginRules: {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
      ]
    }
  }),
  methods: {
    reset () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
  .login{
    background-color: #2b4b6b;
    height: 100%;
    .login_box{
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 10px;
        box-shadow: 0px 0px 10px #ddd;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }
      .form_box{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      .btn_box{
        text-align: right;
      }
    }
  }
</style>
