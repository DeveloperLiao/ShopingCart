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
    <div class="order">
      <div class="time">
        <span>2017-02-11 11:59</span>&nbsp;&nbsp;
        <span>订单编号:7867473872181848</span>
      </div>
      <div class="del"><a>×</a></div>
    </div>
    <div class="table">
      <table>
        <tr>
          <td class="first">
            <ul>
              <li>
                <ul class="order_content">
                  <li class="image">
                    <img
                      src="./images/shouji.png"
                      alt=""
                      style="width:80px;height:80px"
                    >
                  </li>
                  <li>
                    <p>包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</p>
                  </li>
                  <li>×1</li>
                  <li>售后申请</li>
                </ul>
              </li>
              <li>
                <ul class="order_content">
                  <li class="image">
                    <img
                      src="./images/shouji.png"
                      alt=""
                      style="width:80px;height:80px"
                    >
                  </li>
                  <li>
                    <p>包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</p>
                  </li>
                  <li>×1</li>
                  <li>售后申请</li>
                </ul>
              </li>
            </ul>
          </td>
          <td class="name">小丽</td>
          <td class="price">
            <p>总金额￥138.00</p>
            <p>在线支付</p>
          </td>
          <td class="complete">已完成</td>
          <td class="evaluate">评价|晒单</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder'
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
    margin: 10px 0;
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
    overflow: hidden;
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
      td {
        border: 1px solid #ccc;
        border-top: 0;
        text-align: center;
        > ul {
          > li {
            .order_content {
              width: 550px;
              overflow: hidden;
              border-bottom: 1px solid #ccc;
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
</style>