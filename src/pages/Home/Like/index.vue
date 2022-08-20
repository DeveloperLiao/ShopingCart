<template>
  <div class="yours_like">
    <h3>猜你喜欢</h3>
    <div>
      <a href="#"><span>换一换</span><i></i></a>
    </div>
  </div>
  <div class="your_like_img">
    <div>
      <div>
        <img
          src="./images/goods_1.png"
          alt=""
        >
      </div>
      <div>
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
    <div>
      <div>
        <img
          src="./images/goods_2.png"
          alt=""
        >
      </div>
      <div>
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
    <div>
      <div>
        <img
          src="./images/goods_1.png"
          alt=""
        >
      </div>
      <div>
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
    <div>
      <div>
        <img
          src="./images/goods_2.png"
          alt=""
        >
      </div>
      <div>
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
    <div>
      <div>
        <img
          src="./images/goods_1.png"
          alt=""
        >
      </div>
      <div>
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
    <div>
      <div>
        <img
          src="./images/goods_2.png"
          alt=""
        >
      </div>
      <div id="last_img">
        <p>阳光美包新款单肩包女包时尚子母包四件套女 </p>
        <span>¥116.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLike'
}
</script>

<style lang='less' scoped>
.yours_like {
  width: 1177px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  h3 {
    font-size: 20px;
  }
  div div a {
    display: flex;
    width: 67px;
    height: 25px;
  }
  div a i {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('./images/icons.png') no-repeat;
    background-position: -415px -104px;
  }
  div a span {
    display: inline-block;
    width: 36px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    vertical-align: top;
  }
}

.your_like_img {
  width: 1177px;
  height: 230px;
  display: flex;
  border: 1px solid #e4e1e1;
  justify-content: center;
  div {
    width: 180px;
    margin: 0 5px;
    div:nth-of-type(1) {
      width: 145px;
      height: 145px;
      margin: 0 auto;

      img:hover {
        width: 145px;
        height: 145px;
        cursor: pointer;
      }
      #last_img {
        border-right: 0;
      }
    }
    div:nth-of-type(2) {
      border-right: 1px solid #e4e1e1;
      p {
        font-size: 12px;
        line-height: 2em;
      }
      span {
        font-size: 18px;
        color: #e1251b;
      }
    }
  }
}
</style>