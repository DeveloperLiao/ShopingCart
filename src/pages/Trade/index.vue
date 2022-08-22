<template>
  <div class="trade">
    <h3>填写并核对订单信息</h3>
    <div class="message">
      <div class="addressee">
        <h4>收件人信息</h4>
        <div class="detail">
          <div
            v-for="(item,index) in addressList"
            :key="item.id"
            @click="changeIsDefault(item.id)"
          ><span
              class="name"
              :class="{active:item.isDefault==1}"
            >{{item.consignee}}<span class="box"></span></span><span class="address">{{item.userAddress}} {{item.phoneNum}}</span><span
              class="default"
              v-show="item.isDefault==1"
            >默认地址</span></div>

        </div>
      </div>
      <div class="split_line"></div>
      <div class="payment">
        <h4>支付方式</h4>
        <div class="mode">
          <div><span class="active">在线支付<span class="box"></span></span><span>货到付款</span></div>
        </div>
      </div>
      <div class="split_line"></div>
      <div class="list">
        <h4>送货清单</h4>
        <div>
          <div class="delivery">
            <h4>送货方式</h4>
            <span class="active">天天快递<span class="box"></span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span>配送时间：预计8月10日（周三）09:00-15:00送达</span>
          </div>
          <div class="goods">
            <h4>送货清单</h4>
            <div
              class="item"
              v-for="(item,index) in detailArrayList"
              :key="index"
            >
              <div class="goods_image">
                <img
                  :src="item.imgUrl"
                  style="width:100px;height:100px"
                  alt=""
                >
              </div>
              <div class="goods_name">
                <p>{{item.skuName}}</p>
                <p>7天无理由退货</p>
              </div>
              <div class="goods_price">
                <span>￥{{item.orderPrice}}.00</span>
                &nbsp; &nbsp;
                <span>{{item.skuNum}}</span>
                &nbsp; &nbsp;
                <span>有货</span>
              </div>
            </div>

          </div>
        </div>
        <div class="leaving">
          <h4>买家留言：</h4>
          <textarea
            rows="3"
            cols="150"
            v-model='msg'
          ></textarea>
        </div>
        <div class="split_line"></div>
        <div class="bill">
          <h4>发票信息：</h4>
          <div>
            <span>普通发票（电子）个人明细</span>
          </div>
        </div>
        <div class="discount">
          <h4>使用优惠/抵用</h4>
        </div>
      </div>

    </div>
    <div class="checked">
      <div class="total">
        <div>
          <div>
            <div>
              <span><i class="num">{{tradeList.totalNum}}</i> 件商品，总商品金额</span>
            </div>
            <div>
              <span>￥{{tradeList.totalAmount}}.00</span>
            </div>
          </div>
          <div>
            <div>
              <span>返现</span>
            </div>
            <div>
              <span>0.00</span>
            </div>
          </div>
          <div>
            <div>
              <span>运费</span>
            </div>
            <div>
              <span>0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="payable">
        <div>
          <p>应付金额：<span>￥5399.00</span></p>
          <p>配送至：{{userAddress}}，收货人：{{consignee}} {{phoneNum}}</p>
        </div>
      </div>
      <div class="btn">
        <button><a @click="sumitTradeList">提交订单</a></button>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'MyTrade',
  data() {
    return {
      //买家备注
      msg: ''
    }
  },
  mounted() {
    // 派发获取用户地址信息的行为
    this.$store.dispatch('getUserAddress')
    // 获取交易页的订单信息
    this.$store.dispatch('getTradeList')
  },
  computed: {
    ...mapState({
      // 用户地址信息
      addressList: state => state.trade.addressList || [],
      // 交易订单的信息
      tradeList: state => state.trade.tradeList || {}
    }),
    // 默认的用户地址信息
    defaultAddress() {
      return this.addressList.find(item => item.isDefault == 1) || []
    },
    // 用户名
    consignee() {
      return this.defaultAddress.consignee
    },
    // 用户地址
    userAddress() {
      return this.defaultAddress.userAddress
    },
    // 用户电话
    phoneNum() {
      return this.defaultAddress.phoneNum
    },
    // 交易页的订单信息
    ...mapGetters(['detailArrayList'])
  },
  methods: {
    // 改变默认地址
    async changeIsDefault(id) {
      await this.addressList.forEach(item => (item.isDefault = 0))
      this.addressList.find(item => item.id == id).isDefault = 1
    },
    // 提交订单的信息
    async sumitTradeList() {
      // 订单号
      let tradeNo = this.tradeList.tradeNo
      let data = {
        // 收件人信息
        consignee: this.consignee,
        // 最终收件人电话
        consigneeTel: this.phoneNum,
        // 最终收件地址
        deliveryAddress: this.defaultAddress.fullAddress,
        // 支付方式
        paymentWay: 'ONLINE',
        // 订单备注
        orderComment: this.msg,
        // 存储多个商品对象的数组
        orderDetailList: this.detailArrayList
      }
      let result = await this.$api.postTradeList(tradeNo, data)
      alert(result.message)
    }
  }
}
</script>

<style lang='less' scoped>
.trade {
  width: 1177px;
  margin: 0 auto;
  .message {
    border: 1px solid #d5d5d5;
    .addressee {
      margin-top: 20px;
      h4 {
        padding: 20px;
      }
      .detail {
        > div {
          .name {
            display: inline-block;
            width: 120px;
            height: 35px;
            border: 1px solid #d5d5d5;
            text-align: center;
            line-height: 35px;
            margin: 10px;
            margin-right: 0;
          }
          .default {
            display: inline-block;
            width: 55px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            margin-left: 10px;
            background-color: #000;
            color: #fff;
            font-size: 12px;
          }
          .address {
            display: inline-block;
            height: 37px;
            line-height: 37px;
            padding-left: 10px;
          }
          .address:hover {
            background-color: #ddd;
            cursor: pointer;
          }
        }
      }
    }
    .payment {
      h4 {
        padding: 20px;
      }
      .mode {
        div {
          > span {
            display: inline-block;
            width: 120px;
            height: 35px;
            border: 1px solid #d5d5d5;
            text-align: center;
            line-height: 35px;
            margin: 10px;
          }
        }
      }
    }
    .list {
      > h4 {
        padding: 20px;
      }
      .delivery {
        width: 1100px;
        margin: 0 auto;
        background-color: #ececec;
        > span:nth-of-type(1) {
          display: inline-block;
          width: 120px;
          height: 35px;
          border: 1px solid #d5d5d5;
          text-align: center;
          line-height: 35px;
          margin: 10px;
        }
      }
      .goods {
        background-color: #f7e1e0;
        width: 1100px;
        margin: 10px auto;

        .item {
          display: flex;
          padding: 10px 0;
          .goods_image {
            width: 120px;
            margin-left: 20px;
          }
          .goods_name {
            width: 800px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p:nth-of-type(2) {
              color: #bc3427;
            }
          }
          .goods_price {
            span:nth-of-type(1) {
              font-weight: bold;
              color: #bc3427;
            }
          }
        }
      }
      .leaving {
        width: 1100px;
        margin: 10px auto;
        h4 {
          padding: 10px 0;
        }
        textarea {
          outline: none;
          border: 1px solid #d5d5d5;
        }
      }
      .bill {
        width: 1100px;
        margin: 10px auto;
      }
      .discount {
        width: 1100px;
        margin: 10px auto;
      }
    }
  }
  .split_line {
    width: 1100px;
    border-top: 1px solid #d5d5d5;
    margin: 10px auto;
  }

  .checked {
    overflow: hidden;
    .total {
      width: 1177px;
      overflow: hidden;
      .num {
        color: #e20000;
      }
      > div {
        float: right;
        > div {
          display: flex;

          > div {
            padding: 15px;
          }
        }
      }
    }
    .payable {
      width: 1177px;
      background-color: #ebebeb;
      overflow: hidden;
      border: 1px solid #ccc;
      > div {
        float: right;
        p {
          text-align: right;
          padding: 10px;
          span {
            color: #e20000;
          }
        }
      }
    }
    .btn {
      overflow: hidden;
      margin: 10px auto;
      button {
        float: right;
        border: 0;
        a {
          display: inline-block;
          width: 200px;
          height: 50px;
          background-color: #e30000;
          font-size: 18px;
          color: #fff;
          font-weight: bolder;
          line-height: 50px;
        }
      }
    }
  }
}
.active {
  position: relative;
  border: 1px solid #fc0000;
  .box {
    position: absolute;
    display: inline-block;
    border: 8px solid transparent;
    border-right: 8px solid #fc0000;
    border-bottom: 8px solid #fc0000;
    top: 18px;
    right: -1px;
  }
}
.active::after {
  content: '√';
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 12px;
  color: #fff;
}
</style>