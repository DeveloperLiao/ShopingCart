<template>
  <div class="band_img">
    <div><img
        src="./images/band_1.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_2.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_3.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_4.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_5.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_6.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_7.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_8.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_9.png"
        alt="!"
      ></div>
    <div><img
        src="./images/band_10.png"
        alt="!"
      ></div>
  </div>
</template>

<script>
export default {
  name: 'MyBand'
}
</script>

<style lang='less' scoped>
.band_img {
  width: 1177px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  div {
    width: 110px;
    border-right: 1px dotted #cccccc;
  }
  div:nth-of-type(10) {
    border-right: 0;
  }
}
</style>