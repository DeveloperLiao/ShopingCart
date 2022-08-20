<template>
  <div class="scuess">
    <h2 class="successMessage"> 商品已经成功加入购物车!!!</h2>
    <div class="detail">
      <div class="img">
        <img
          :src="skuInfoList.skuDefaultImg"
          alt=""
        >
      </div>
      <div class="text">
        <p class="text_1">{{skuInfoList.skuName}}</p>
        <p class="text_2">{{skuInfoList.skuDesc}}数量:{{this.$route.params.skuNum}} </p>
      </div>

      <div class="btn">
        <button>
          <router-link :to="`/detail/${skuInfoList.id}`">查看商品详情</router-link>
        </button>
        <button>
          <router-link to="/shopcart">去购物车结算&gt;</router-link>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Addcartsuccess',

  computed: {
    // 获取会话存储中的skuInfo数据
    skuInfoList() {
      let skuInfoList = sessionStorage.getItem('skuInfoList')
      return JSON.parse(skuInfoList)
    }
  }
}
</script>

<style lang='less' scoped>
.scuess {
  background-color: #eee;

  h2 {
    color: #8f0;
    padding: 15px;
  }
  .detail {
    display: flex;
    margin: 0 15px;
    .text {
      margin: 0 10px;
      .text_2 {
        font-size: 12px;
        color: #ccc;
      }
    }
    .img {
      img {
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
      }
    }
    .btn {
      margin-left: 100px;
      button {
        border: 1px solid #ccc;
        width: 120px;
        height: 40px;
        margin: 0 10px;
      }
    }
  }
}
</style>