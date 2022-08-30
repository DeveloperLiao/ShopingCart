<template>
  <div class="center_right">
    <div class="title">
      <h4>我的订单</h4>
    </div>
    <div class="name">
      <ul>
        <li class="goods">商品</li>
        <li class="detail">订单详情</li>
        <li class="receiver">收货人</li>
        <li class="amount">金额</li>
        <li class="status">状态</li>
        <li class="operation">操作</li>
      </ul>
    </div>
    <div
      class="order"
      v-for="(item1,index) in orderList.records"
      :key="item1.id"
    >
      <div class="number">
        <div class="time">
          <span>{{item1.createTime}}</span>&nbsp;&nbsp;
          <span>订单编号:{{item1.outTradeNo}}</span>
        </div>
        <div class="del"><a>×</a></div>
      </div>
      <div class="table">
        <table>
          <tr
            v-for="(item2,index) in item1.orderDetailList"
            :key="item2.id"
          >
            <td class="first">
              <ul>
                <li>
                  <ul class="order_content">
                    <li class="image">
                      <img
                        :src="item2.imgUrl"
                        alt=""
                        style="width:80px;height:80px"
                      >
                    </li>
                    <li>
                      <p>{{item2.skuName}}</p>
                    </li>
                    <li>×{{item2.skuNum}}</li>
                    <li>售后申请</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td
              class="name"
              :rowspan="item1.orderDetailList.length"
              v-if="index===0"
            >{{item1.consignee}}</td>
            <td
              class="price"
              :rowspan="item1.orderDetailList.length"
              v-if="index===0"
            >
              <p>总金额￥{{item1.totalAmount}}</p>
              <p>{{item1.paymentWay}}</p>
            </td>
            <td
              class="complete"
              :rowspan="item1.orderDetailList.length"
              v-if="index===0"
            >{{item1.orderStatusName}}</td>
            <td
              class="evaluate"
              :rowspan="item1.orderDetailList.length"
              v-if="index===0"
            >评价|晒单</td>
          </tr>

        </table>
      </div>
    </div>
    <!-- 分页器 -->
    <Pagination
      :pageSize='limit'
      :pageNo='page'
      :total='orderList.total'
      :continue='5'
      @currentPage='currentPage'
    ></Pagination>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      // 当前页
      page: 1,
      // 每页显示多少条数据
      limit: 2,
      // 存储订单的数据
      orderList: {}
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    // 获取订单的数据
    async getOrderList() {
      let { page, limit } = this
      let result = await this.$api.getOrderList(page, limit)
      if (result.code === 200) {
        this.orderList = result.data
      } else {
        alert('数据获取失败！')
      }
    },
    //接收最新的当前页的页码值
    currentPage(pagenum) {
      this.page = pagenum
      // 发起请求
      this.getOrderList()
    }
  }
}
</script>

<style lang='less' scoped>
.center_right {
  width: 933px;
  float: right;
  .title {
    background-color: #ddd;
    height: 35px;
    line-height: 35px;
    border: 1px solid #eee;
    padding: 0 5px;
  }
  .name {
    ul {
      overflow: hidden;
      background-color: #ddd;
      border: 1px solid #eee;

      li {
        float: left;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .goods {
        width: 100px;
        margin-left: 5px;
      }
      .detail {
        width: 430px;
        text-align: center;
      }
      .receiver {
        width: 100px;
      }
      .amount {
        width: 100px;
      }
      .status {
        width: 100px;
      }
      .operation {
        width: 80px;
      }
    }
  }
  .order {
    margin: 10px 0;
    .number {
      border: 1px solid #eee;
      background-color: #ddd;
      height: 35px;
      line-height: 35px;
      .time {
        float: left;
      }
      .del {
        float: right;
        padding: 0 10px;
      }
    }
    .table {
      tr {
        border: 1px solid #ccc;
        td {
          border: 1px solid #ccc;
          border-top: 0;
          text-align: center;
          > ul {
            > li {
              .order_content {
                width: 550px;
                overflow: hidden;

                .image {
                  width: 100px;
                  height: 100px;
                  border: 1px solid #ccc;
                  margin: 10px;
                }
                li {
                  float: left;
                  padding: 10px;
                  p {
                    width: 250px;
                    color: #f13;
                  }
                }
              }
            }
          }
        }
        .first {
          border-bottom: 0;
        }
        .name {
          width: 100px;
        }
        .price {
          width: 100px;
        }
        .complete {
          width: 100px;
        }
        .evaluate {
          width: 100px;
        }
      }
    }
  }
}
</style>