<template>
  <div class="shopCart">
    <div>
      <h3>全部商品</h3>
    </div>
    <div class="propertyName ">
      <ul>
        <li class="all"> 全部</li>
        <li class="goods">商品</li>
        <li class="price">单价（元）</li>
        <li class="num">数量</li>
        <li class="total">小计</li>
        <li class="operation">操作</li>
      </ul>
    </div>
    <div class="propertValue">
      <ul
        v-for="(cartItem,index) in cartInfoList"
        :key="cartItem.skuId"
      >
        <li class="all">
          <input
            type="checkbox"
            @click="changeStaus(cartItem.skuId)"
            :checked="cartItem.isChecked"
          >
        </li>
        <li class="goods">
          <div class="img">
            <img
              :src="cartItem.imgUrl"
              alt=""
            >
          </div>
          <div class="parse">
            <p>{{cartItem.skuName}}</p>
          </div>
        </li>
        <li class="price">{{cartItem.cartPrice}}</li>
        <li class="num"><button
            class="sub"
            @click="skuNumChange('sub',cartItem.skuId,cartItem.skuNum)"
          >-</button><input
            type="text"
            class="text"
            :value="cartItem.skuNum"
            @change="skuNumChange('text',cartItem.skuId,cartItem.skuNum)"
          ><button @click="skuNumChange('add',cartItem.skuId)">+</button></li>
        <li class="total">{{cartItem.skuNum*cartItem.cartPrice}}</li>
        <li class="operation"><a @click="deleteCartData(cartItem.skuId)">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">移到收藏</a></li>
      </ul>

    </div>
    <div class="selectBar">
      <div class="bar_left">
        <input
          type="checkbox"
          name=""
          id="selectAll"
          @click="checkAll"
          :checked="cartInfoList.length?isSelectAll:false"
        >
        <label for="selectAll">全选</label>&nbsp;&nbsp;
        <span> <a @click="deteleChecked">删除选中的商品</a>&nbsp;&nbsp;</span>
        <span><a href="">转到我的关注</a>&nbsp;&nbsp;</span>
        <span><a href="">清除下柜商品</a></span>
      </div>
      <div class="bar_right">
        <span>已选择{{totalNum}}件商品&nbsp;&nbsp;</span>
        <span>总价（不含运费）：<i class="totalPrice">{{totalPrice}}</i>&nbsp;&nbsp;</span>
        <button>
          <router-link to="/trade">结算</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  name: 'ShopCart',
  data() {
    return {
      // 商品check的状态
      check_status: false,
      //全选check的状态
      checkAll_status: false
    }
  },
  methods: {
    // 获取购物车的数据
    getData() {
      this.$store.dispatch('getCartData')
    },
    //全选或全不选
    async checkAll(event) {
      try {
        // 全选按钮的状态
        let isChecked = event.target.checked == true ? 1 : 0
        await this.$store.dispatch('checkAll', isChecked)
        this.getData()
      } catch (error) {
        alert(error)
      }
    },
    // 商品的全选中时，全选选中
    async changeStaus(skuId) {
      try {
        // 拿到最新商品的状态
        let isChecked = event.target.checked == true ? 1 : 0
        await this.$store.dispatch('switchChecked', { skuId: skuId, isChecked: isChecked })
        this.getData()
      } catch (error) {
        alert(error)
      }
    },
    // 删除某个商品
    async deleteCartData(skuid) {
      try {
        await this.$store.dispatch('delCartData', skuid)
        this.getData()
      } catch (error) {
        alert('falie')
      }
    },
    // 改变商品的数量,设置节流
    skuNumChange: _.throttle(async function (type, skuId, skuNum) {
      try {
        switch (type) {
          // 减少
          case 'sub':
            // skuNum不能小于1
            if (skuNum <= 1) {
              await this.$store.dispatch('postCartData', { skuId: skuId, skuNum: 0 })
            } else {
              await this.$store.dispatch('postCartData', { skuId: skuId, skuNum: -1 })
            }
            break
          // 增加
          case 'add':
            await this.$store.dispatch('postCartData', { skuId: skuId, skuNum: 1 })
            break
          //  输入数据
          case 'text':
            // 拿到输入的最新的skuNum
            let value = event.target.value
            // 最新值与服务器中的skuNum的差值
            let diff = ''
            // 如果最新的skuNum小于1或者为非数值，差值为0，即不改变数值
            if (value < 1 || isNaN(value)) {
              diff = 0
              await this.$store.dispatch('postCartData', { skuId: skuId, skuNum: diff })
            } else {
              // value为浮点数,转化为整数
              let diff = parseInt(value) - skuNum
              await this.$store.dispatch('postCartData', { skuId: skuId, skuNum: diff })
            }
            break
        }
        this.getData()
      } catch (error) {
        alert(error)
      }
    }, 1000),
    // 删除选中的商品
    async deteleChecked() {
      try {
        await this.$store.dispatch('delChecked')
        this.getData()
      } catch (error) {
        alert(error)
      }
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(['cartList']),
    // 拿到购物车的数据
    cartInfoList() {
      return this.cartList.cartInfoList || []
    },
    // 算出购物车已经勾选商品的总价
    totalPrice() {
      let total = 0
      this.cartInfoList
        .filter(item => item.isChecked == 1)
        .forEach(item => {
          total += item.cartPrice * item.skuNum
        })
      return total
    },
    //算出已经勾选的购物车的商品总数
    totalNum() {
      let totalNum = 0
      this.cartInfoList
        .filter(item => item.isChecked == 1)
        .forEach(item => {
          totalNum += item.skuNum
        })
      return totalNum
    },
    // 算出全部的商品的isChecked是否都为true
    isSelectAll() {
      return this.cartInfoList.every(item => item.isChecked == 1)
    }
  }
}
</script>

<style lang='less' scoped>
.shopCart {
  width: 1177px;
  margin: 0 auto;
  .propertyName,
  .propertValue {
    width: 1177px;
    ul {
      overflow: hidden;
      li {
        float: left;
        text-align: center;
      }
      .all {
        width: 10%;
        text-align: left;
        padding: 0 5px;
      }
      .price,
      .num,
      .total,
      .operation {
        width: 15%;
      }
      .goods {
        width: 30%;
      }
    }
  }
  .propertyName {
    background-color: #e8e8e8;
    border: 1px solid #cbcbcb;

    li {
      height: 40px;
      line-height: 40px;
    }
  }
  .propertValue {
    margin-top: 10px;
    border: 1px solid #cbcbcb;
    border-bottom: 0;
    margin-bottom: 10px;
    ul {
      li {
        border-bottom: 1px solid #cbcbcb;
        height: 110px;
        margin-top: 20px;
      }
      .goods {
        display: flex;
        .img {
          width: 90px;
          height: 90px;
          border: 1px solid #ededed;
          img {
            width: 60px;
            height: 60px;
            margin: 10px;
          }
        }
        .parse {
          width: 170px;
          margin-left: 10px;
          p {
            text-align: left;
            word-wrap: break-word;
            word-break: break-all;
            font-size: 12px;
          }
        }
      }
      .num {
        .text {
          width: 30px;
          height: 30px;
          text-align: center;
          border: 1px solid #e9e9e9;
          outline: none;
        }
        button {
          width: 10px;
          height: 30px;
          border: 1px solid #e9e9e9;
        }
      }
    }
  }
  .selectBar {
    display: flex;
    justify-content: space-between;
    border: 1px solid #cbcbcb;

    .bar_left {
      display: flex;
      span,
      label {
        line-height: 54px;
      }
    }
    .bar_right {
      button {
        border: 1px solid #cbcbcb;
        background-color: #de0000;

        a {
          display: inline-block;
          width: 100px;
          height: 50px;
          line-height: 50px;
          color: #fff;
        }
      }
      .totalPrice {
        display: inline-block;
        color: #de0000;
        width: 100px;
      }
    }
  }
}
</style>