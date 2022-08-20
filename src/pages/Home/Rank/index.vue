<template>
  <div class="hot_sale">
    <div id="hot_sale_item1">
      <div></div>
      <a href="#">热卖排行</a>
    </div>
    <div id="hot_sale_item2">
      <div></div>
      <a href="">特价排行</a>
    </div>
    <div id="hot_sale_item3">
      <div></div>
      <a href="#">新品排行</a>
    </div>
  </div>
  <div class="phone_img">
    <div>
      <div><img
          src="./images/phone.jpg"
          alt="!"
        ></div>
      <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
      <span>定金：¥100.00</span>
    </div>
    <div>
      <div><img
          src="./images/phone.jpg"
          alt="!"
        ></div>
      <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
      <span>定金：¥100.00</span>
    </div>
    <div>
      <div><img
          src="./images/phone.jpg"
          alt="!"
        ></div>
      <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
      <span>定金：¥100.00</span>
    </div>
    <div>
      <div><img
          src="./images/phone.jpg"
          alt="!"
        ></div>
      <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
      <span>定金：¥100.00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyRank'
}
</script>

<style lang="less" scoped>
.hot_sale {
  width: 1177px;
  display: flex;
  justify-content: center;
  div {
    width: 65px;
    height: 65px;
    text-align: center;
    margin: 20px;
    div {
      width: 35px;
      height: 35px;
      margin: 0 auto;
      background: url('./images/hot.png') no-repeat;
    }
  }
  #hot_sale_item1 div {
    background-position: -35px 0;
  }
  #hot_sale_item1 a {
    color: #e1251b;
  }
}

.phone_img {
  width: 1177px;
  display: flex;
  > div {
    width: 230px;
    margin: 0 30px;
    border: 1px solid #e1251b;
    p {
      font-size: 12px;
      color: #333333;
      line-height: 2em;
      margin-left: 5px;
      :hover {
        cursor: pointer;
      }
    }
    div:hover {
      cursor: pointer;
    }
    span {
      font-size: 18px;
      color: #e1251b;
      line-height: 2em;
      margin-left: 5px;
    }
    div {
      width: 200px;
      margin: 0 auto;
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
