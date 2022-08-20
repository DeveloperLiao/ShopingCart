<template>
  <div class="register">
    <div class="title">
      <h2>注册新用户</h2>
      <span>我有账号，去
        <a href="">登录</a>
      </span>
    </div>
    <div class="form_border">
      <form class="form">
        <div class="content">
          <label for="phoneNumber">手机号:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="phoneNumber"
            v-model="phone"
            placeholder="请输入手机号"
          >
          <p>错误提示信息</p>
        </div>
        <div class="content">
          <label for="code">验证码:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="code"
            placeholder="请输入验证码"
            autocomplete="off"
            :value="code"
          >
          <button
            class="sendCode"
            @click.prevent="sendCode"
          >发送验证码</button>
          <p>错误提示信息</p>
        </div>
        <div class="content">
          <label for="login_password">登录密码:&nbsp;&nbsp;</label>
          <input
            type="password"
            id="login_password"
            placeholder="请输入密码"
            autocomplete="off"
            v-model="password"
          >
          <p>错误提示信息</p>
        </div>
        <div class="content">
          <label for="comfirmPsw">确认密码:&nbsp;&nbsp;</label>
          <input
            type="password"
            id="comfirmPsw"
            placeholder="请输入密码"
            autocomplete="off"
            v-model="password1"
          >
          <p>错误提示信息</p>
        </div>
        <div class="agreement">
          <input
            type="checkbox"
            id="agree"
            :checked='isChecked'
            @click="changeIschecked"
          >
          <label for="agree">同意协议并注册《尚品汇用户协议》&nbsp;&nbsp;</label>
          <p>错误提示信息</p>
        </div>
        <div class="btn">
          <button>
            <a @click.prevent="register">完成注册</a>
          </button>
        </div>
      </form>
    </div>
    <div class="copyright">
      <ul>
        <li>关于我们&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;联系我们&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;联系客服&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;商家入驻&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;营销中心&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;手机尚品汇&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;销售联盟&nbsp;&nbsp;|</li>
        <li>&nbsp;&nbsp;尚品汇社区 </li>
      </ul>
      <div>地址：北京市昌平区宏福科技园综合楼6层</div>
      <div>京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyRegister',
  data() {
    return {
      // 手机号码
      phone: '',
      // 验证码
      code: '',
      // 密码
      password: '',
      // 再次确认密码
      password1: '',
      // 控制是否同意用户协议
      isChecked: true
    }
  },
  methods: {
    // 发送验证码
    async sendCode() {
      // 手机号码起码不为空才发起请求
      this.phone && (await this.$store.dispatch('sendCode', this.phone))
      this.code = this.identify_code
    },
    // 用户注册
    async register() {
      try {
        let { phone, code, password, password1, isChecked } = this
        let data = {
          phone,
          code,
          // 两次密码必须相同
          password: password == password1 && password
        }
        // 三个参数都必须不为空才发起请求,最后跳转到登录页面
        phone && code && password && isChecked && (await this.$store.dispatch('registerUser', data)) && this.$router.push('/login')
      } catch (error) {
        alert(error.message)
      }
    },
    // 改变checkBox的状态
    changeIschecked() {
      this.isChecked = !this.isChecked
    }
  },
  computed: {
    ...mapState({
      identify_code: state => state.user.code
    })
  }
}
</script>

<style lang='less' scoped>
.register {
  width: 1000px;
  margin: 0 auto;
  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    border: 1px solid #cbcbcb;
    background-color: #dbdbdb;
    h2 {
      font-size: 20px;
    }
    span {
      font-weight: bold;
      a {
        color: #be130f;
      }
    }
  }
  .form_border {
    border: 1px solid #cbcbcb;
    border-top: 0;
    .form {
      width: 400px;
      margin: 0 auto;
      border-top: 0;
      .content {
        label {
          display: inline-block;
          width: 70px;
        }
        input {
          width: 300px;
          height: 30px;
        }
        p {
          color: #c04944;
        }
        .sendCode {
          position: absolute;
          height: 30px;
        }
        padding: 10px;
      }
      .agreement {
        width: 250px;
        margin: 0 auto;
        p {
          color: #c04944;
        }
      }
      .btn {
        width: 250px;
        margin: 10px auto;
        a {
          display: inline-block;
          width: 250px;
          height: 40px;
          line-height: 40px;
          background-color: #ff0000;
          color: #fff;
        }
      }
    }
  }
  .copyright {
    width: 1000px;
    margin: 20px auto;
    ul {
      width: 650px;
      margin: 10px auto;
      overflow: hidden;
      li {
        float: left;
      }
    }
    div {
      text-align: center;
      width: 650px;
      margin: 10px auto;
    }
  }
}
</style>
