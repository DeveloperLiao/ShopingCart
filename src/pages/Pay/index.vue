<template>
  <div class="pay">
    <div class="success">
      <div class="title">
        <h2>订单提交成功，请您及时付款，以便尽快为您发货~~</h2>
      </div>
      <div class="tip">
        <div><span>请你在提交订单<i class="colora50000">4小时</i> 后之内完成支付，超时订单会自动取消，订单号：145687</span><span>应付金额：<i class="price colora50000">￥17,654</i></span></div>
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
        <button><a>立即支付</a></button>
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
export default {
  name: 'MyPay'
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