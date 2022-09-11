<template>
  <div class="today_recommed">
    <div>
      <div class="time"><span>今日推荐</span></div>
      <div><img
          src="./images/rec_1.png"
          alt="!"
        ></div>
      <div><img
          src="./images/rec_2.png"
          alt="!"
        ></div>
      <div><img
          src="./images/rec_3.png"
          alt="!"
        ></div>
      <div><img
          src="./images/rec_4.png"
          alt="!"
        ></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MyRecommend'
}
</script>

<style lang='less' scoped>
.today_recommed {
  width: 1200px;
  > div {
    width: 1177px;
    display: flex;
    margin-left: 31px;
    .time {
      width: 157px;
      height: 163px;
      background: url('./images/time.png') no-repeat;
      background-position: 50% 50%;
      background-color: #5c5251;
      text-align: center;
      line-height: 260px;
      vertical-align: bottom;
      span {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
}
</style>