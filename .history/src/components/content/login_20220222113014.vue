<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar-box">
        <img src="http://www.again.ltd/github.jpg" width="20px">
      </div>
      <!--表单区域-->
      <el-form label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!--用户名-->
        <el-form-item prop="userName">
          <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-3702mima" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  import {login} from '@/api/user/user'


  export default {
    data() {
      return {
        //  登录 数据绑定
        loginForm: {
          username: 'admin',
          password: 'a123456'
        },
        // 表单验证
        loginFormRules: {
          // 用户名
          username: [
            {required: true, message: "请输入用户名", trigger: "blur"},
            {min: 3, max: 10, message: "账号在3到10个字符之间", trigger: "blur"}
          ],
          /*password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 6, max: 10, message: "账号在6到10个字符之间", trigger: "blur"}
          ]*/
        }
      }
    },
    methods: {
      // 重置
      resetLoginForm() {
        console.log(this)
        this.$refs.loginFormRef.resetFields();
      },
      /*validate预校验*/
      login() {
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid) return;
          // this.loginForm.password = encryption(this.loginForm.password)
          login(this.loginForm).then((res)=>{
            console.log(res);
            if (res.data.!==200) return this.$message.error("登录失败")
            window.sessionStorage.setItem("secret",res.data)
            this.$router.push({path: '/Home'})
          })
          // const {data: res} = login(this.loginForm);
          // console.log(res)
          // if (res.code !== 200) return this.$message.error("登录失败")
          // // 保存数据 整次会话
          // window.sessionStorage.setItem("token", res.data.token)
          // this.$message.success("登录成功");

        });
      }
    }

  }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    background-color: #fff;
    width: 450px;
    height: 300px;
    border-radius: 3px; /*圆角边框*/
    position: absolute; /*绝对定位*/
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /*移动 偏移*/
  }

  .avatar-box {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 1px solid #eeeeee;
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;

    img {
      width: 100%;
      height: 100%;
      border-radius: 80%;
      background-color: #eee;
    }
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
<!--scoped 当前页面生效-->
