<template>
  <div class="pay">
    <div class="success">
      <div class="title">
        <h2>订单提交成功，请您及时付款，以便尽快为您发货~~</h2>
      </div>
      <div class="tip">
        <div><span>请你在提交订单<i class="colora50000">4小时</i> 后之内完成支付，超时订单会自动取消，订单号：{{orderId}}</span><span>应付金额：<i class="price colora50000">￥{{tradeList.totalAmount}}</i></span></div>
      </div>
    </div>
    <div class="important">
      <div>
        <h2 class="colora50000">重要说明：</h2>
        <ol>
          <li>尚品汇商场支付平台目前支持<i class="colora50000">支付宝</i>支付方式</li>
          <li>其它支付渠道正在调试中，尽情期待。</li>
          <li>为了保证您的购物支付流程顺利完成,请保存以下支付宝的信息。</li>
        </ol>
      </div>
      <div>
        <h2 class="colora50000">支付宝账户信息：（很重要，请保存！！！）</h2>
        <ul>
          <li>支付宝账号：1111111</li>
          <li>密码：1111111</li>
          <li>支付密码：11111</li>
        </ul>
      </div>
    </div>
    <div class="platform">
      <div>
        <h3>支付平台</h3>
        <div class="payment">
          <ul>
            <li><img
                src="./images/zfb.jpg"
                alt=""
              ></li>
            <li><img
                src="./images/wxzf.png"
                alt=""
              ></li>
          </ul>
        </div>
      </div>
      <div class="split_line"></div>
      <div>
        <h3>支付网银</h3>
        <div class="payment">
          <ul>
            <li><img
                src="./images/zsyh.png"
                alt=""
              ></li>
            <li><img
                src="./images/yzyh.png"
                alt=""
              ></li>
            <li><img
                src="./images/nyyh.png"
                alt=""
              ></li>
          </ul>
        </div>
      </div>
      <div class="split_line"></div>
      <div class="btn">
        <button><a @click="setup">立即支付</a></button>
      </div>
      <div>
        <h3>其他支付方式</h3>
        <div class="payment">
          <ul>
            <li><img
                src="./images/zsyh.png"
                alt=""
              ></li>
            <li><img
                src="./images/yzyh.png"
                alt=""
              ></li>
            <li><img
                src="./images/nyyh.png"
                alt=""
              ></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Dialog } from 'vant'
import 'vant/es/dialog/style'
// 自动生成支付二维码
import QRCode from 'qrcode'
export default {
  name: 'MyPay',
  data() {
    return {
      // 支付二维码的URL
      codeUrl: 'weixin://wxpay/binzpayerl?pr=FmFSw2mzz',
      // 定时器
      timer: null,
      // 账单号
      orderId: 10556
    }
  },
  mounted() {
    // this.getPayData()
    // 获取交易页的订单信息
    this.$store.dispatch('getTradeList')
  },
  methods: {
    // 获取支付页的数据
    // async getPayData() {
    //   try {
    //     let orderId = this.orderId
    //     let result = await this.$api.getPayData(orderId)
    //   } catch (error) {
    //     alert(error.messsage)
    //   }
    // },
    async setup() {
      try {
        // 生成支付的二维码
        let codeUrl = await QRCode.toDataURL(this.codeUrl)
        Dialog({
          title: '微信支付',
          message: `<img src='${codeUrl}'>`,
          // 是否显示确认按钮
          showConfirmButton: true,
          // 是否显示取消按钮
          showCancelButton: true,
          // 确认按钮文案
          confirmButtonText: '已支付',
          // 取消按钮文案
          cancelButtonText: '支付遇到问题',
          //	是否允许 message 内容中渲染 HTML
          allowHtml: true
        })
        let result = await this.$api.getPayStatus(this.orderId)
        console.log(result)
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed: {
    // 路由参数中的订单号
    orderId() {
      return this.$route.params.orderId
    },
    ...mapState({
      // 交易订单的信息
      tradeList: state => state.trade.tradeList || {}
    })
  }
}
</script>

<style lang='less' scoped>
.pay {
  width: 1177px;
  margin: 0 auto;

  .title {
    h2 {
      color: #0e3300;
    }
  }
  .tip {
    > div {
      width: 1177px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
      }
      span:nth-of-type(1) {
        font-size: 12px;
        i {
          color: #c16255;
        }
      }
      span:nth-of-type(2) {
        .price {
          font-size: 20px;
        }
      }
    }
  }
  .important {
    width: 1177px;
    border: 2px solid #9d3c31;
    padding: 10px 0;
    ol {
      list-style-type: style;
      margin-left: 30px;
      padding: 10px 0;
    }
    ul {
      list-style-type: disc;
      margin-left: 30px;
      padding: 10px 0;
    }
  }
  .platform {
    margin-top: 10px;
    border: 1px solid #d1d1d3;
    h3 {
      padding: 10px;
    }
    ul {
      width: 1100px;
      margin: 0 auto;
      overflow: hidden;
      li {
        float: left;
        padding: 10px;
        margin: 5px;
        border: 1px solid #c9c5c9;
      }
    }
  }
  .split_line {
    border-top: 1px solid #d1d1d3;
    width: 1100px;
    margin: 10px auto;
  }
  .btn {
    width: 150px;
    margin: 10px auto;
    button {
      background-color: #db0000;
      border: 0;
      a {
        display: inline-block;
        width: 150px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
.colora50000 {
  color: #a50000;
}
</style>