<template>
  <div class="register">
    <div class="title">
      <h2>注册新用户</h2>
      <span>我有账号，去
        <a href="">登录</a>
      </span>
    </div>
    <!-- <div class="form_border">
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
    </div>  -->
    <div class="form_border">
      <Form
        class="form"
        :validation-schema="schema"
      >
        <div class="content">
          <label for="phoneNumber">手机号:&nbsp;&nbsp;</label>
          <Field
            name='phone'
            type="text"
            id="phoneNumber"
            v-model="phone"
            placeholder="请输入手机号"
          />
          <ErrorMessage name='phone'></ErrorMessage>
        </div>
        <div class="content">
          <label for="code">验证码:&nbsp;&nbsp;</label>
          <Field
            name='code'
            type="text"
            id="code"
            placeholder="请输入验证码"
            autocomplete="off"
            v-model="code"
          />
          <ErrorMessage name='code'></ErrorMessage>
          <button
            class="sendCode"
            @click.prevent="sendCode"
          >发送验证码</button>
        </div>
        <div class="content">
          <label for="login_password">登录密码:&nbsp;&nbsp;</label>
          <Field
            name='password'
            type="password"
            id="login_password"
            placeholder="请输入密码"
            autocomplete="off"
            v-model="password"
            ref="formRef"
          />
          <ErrorMessage name='password'></ErrorMessage>
        </div>
        <div class="content">
          <label for="comfirmPsw">确认密码:&nbsp;&nbsp;</label>
          <Field
            name='comfirmPsw'
            type="password"
            id="comfirmPsw"
            placeholder="请输入密码"
            autocomplete="off"
            v-model="password1"
          />
          <ErrorMessage name='comfirmPsw'></ErrorMessage>
        </div>
        <div class="agreement">
          <Field
            name='check'
            type="checkbox"
            id="agree"
            @click="changeIschecked"
            v-model="isChecked"
          />
          <label for="agree">同意协议并注册《尚品汇用户协议》&nbsp;&nbsp;</label>
          <ErrorMessage name='check'></ErrorMessage>
        </div>
        <div class="btn">
          <button>
            <a @click.prevent="register">完成注册</a>
          </button>
        </div>
      </Form>
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
//引入vee-validate
import { Field, Form, ErrorMessage } from 'vee-validate'
// 引入自定义规则
import { schema } from '@/plugin/vee-validate.js'
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
      isChecked: false,
      // 表单验证规则
      schema: schema
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
        // 验证全部通过的返回值
        let { valid } = await this.$refs.formRef.validate()
        if (valid) {
          let { phone, code, password, password1, isChecked } = this
          let data = {
            phone,
            code,
            password
          }
          ;(await this.$store.dispatch('registerUser', data)) && this.$router.push('/login')
        }
      } catch (error) {
        alert(error.message)
      }
    },
    // 改变checkBox的状态
    changeIschecked(event) {
      this.isChecked = event.target.checked
    }
  },
  computed: {
    ...mapState({
      identify_code: state => state.user.code
    })
  },
  components: {
    Field,
    Form,
    ErrorMessage
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
        width: 480px;
        position: relative;
        label {
          display: inline-block;
          width: 70px;
        }
        input {
          width: 300px;
          height: 30px;
        }
        span {
          position: absolute;
          color: #c04944;
          top: 40px;
          left: 80px;
          font-size: 12px;
        }
        .sendCode {
          position: absolute;
          height: 30px;
        }
        padding: 10px;
      }
      .agreement {
        position: relative;
        width: 250px;
        margin: 15px auto;
        span {
          position: absolute;
          color: #c04944;
          top: 20px;
          left: 15px;
          font-size: 12px;
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
