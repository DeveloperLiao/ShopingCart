<template>
  <div class="login">
    <div class="top">
      <div class="bgc"></div>
      <div class="bg_form">
        <form class="form">
          <div class="title">
            <span><a>扫码登录</a></span>
            <span><a class="active">账户登录</a></span>
          </div>
          <div>
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="phone"
            >
          </div>
          <div>
            <input
              type="password"
              placeholder="请输入密码"
              v-model='password'
              autocomplete="off"
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="auto"
            >
            <label for="auto">自动登录</label>
            <a href="">忘记密码？</a>
          </div>
          <div>
            <button>
              <a @click.prevent="loginUser">登录</a>
            </button>
          </div>
          <div class="bottom">
            <div class="img">
              <img
                src="./images/qq.png"
                alt=""
              >
              <img
                src="./images/wb.png"
                alt=""
              >
              <img
                src="./images/zfb.png"
                alt=""
              >
              <img
                src="./images/wx.png"
                alt=""
              >
            </div>
            <span><a href="">立即注册</a></span>
          </div>
        </form>
      </div>
    </div>
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
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    // 用户登录
    async loginUser() {
      try {
        let { phone, password } = this
        let data = { phone, password }
        // 检查在路由中有没有query参数，如果有则跳转，没有则跳转到/home
        let toPath = this.$route.query.redirect || '/home'
        // 手机号和密码必须都不为空才派发请求
        phone && password && (await this.$store.dispatch('loginUser', data)) && this.$router.push(toPath)
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-color: #e93854;
  .top {
    width: 990px;
    background: url('./images/bgc.png') no-repeat;
    height: 475px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .bgc {
      width: 500px;
      height: 475px;
    }
    .bg_form {
      margin-top: 42px;
      width: 400px;
      height: 400px;
      background-color: #fff;
      .form {
        width: 350px;
        height: 350px;
        margin: 25px auto;
        border: 1px solid #ddd;
        .title {
          margin-bottom: 30px;
          span {
            display: inline-block;
            width: 174px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border: 1px solid #ddd;
            font-weight: bold;
            a {
              font-size: 18px;
            }
            .active {
              color: #e93854;
              border-bottom: 0;
            }
          }
        }
        div {
          width: 350px;
          input {
            width: 330px;
            height: 30px;
            margin: 10px;
          }
          #auto {
            width: 12px;
            height: 12px;
          }
          #auto ~ a {
            margin-left: 180px;
          }
          button {
            width: 330px;
            height: 40px;
            margin-left: 10px;
            background-color: #e1251b;
            border: 0;
            a {
              color: #fff;
              font-size: 16px;
            }
          }
        }
        .bottom {
          margin-top: 10px;
          display: flex;
          span {
            width: 90px;
          }
        }
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
</style>
