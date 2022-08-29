<template>
  <div class="paysuccess">
    <div class="payment">
      <p>恭喜您，支付成功啦！</p>
    </div>
    <div class="btn">
      <button><a @click="$router.push('/center')">查看订单</a></button>
      <button><a @click="$router.push('/home')">继续购物</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPaySuccess'
}
</script>

<style lang='less' scoped>
.paysuccess {
  width: 1177px;
  border: 1px solid #ccc;
  margin: 0 auto;
  .payment {
    width: 400px;
    margin: 0 auto;
    p {
      font-size: 24px;
    }
  }
  .btn {
    width: 400px;
    margin: 0 auto;
    padding: 10px;
    button {
      margin: 0 10px;
      border: 0;
      a {
        display: inline-block;
        width: 100px;
        height: 30px;
        line-height: 30px;
      }
    }
    button:first-of-type {
      background-color: red;
    }
  }
}
</style>