<template>
  <div class="center">
    <div class="center_left">
      <div class="typeNav">
        <ul>
          <li>
            <h3>订单中心</h3>
            <ul>
              <li>
                <router-link to="/center/myorder">我的订单</router-link>
              </li>
              <li>
                <router-link to="/center/grouporder">团购订单</router-link>
              </li>
              <li><a>本地生活订单</a></li>
              <li><a>我的预售</a></li>
              <li><a>评价晒单</a></li>
              <li><a>取消订单记录</a></li>
            </ul>
          </li>
          <li>
            <h3> 关注中心</h3>
            <ul>
              <li><a>关注的商品</a></li>
              <li><a>关注的店铺</a></li>
              <li><a>关注的专辑</a></li>
              <li><a>关注的品牌</a></li>
              <li><a>关注的活动</a></li>
              <li><a>浏览历史</a></li>
            </ul>
          </li>
          <li>
            <h3>特色服务</h3>
            <ul>
              <li><a>我的营业厅</a></li>
              <li><a>京东通信</a></li>
              <li><a>定期送</a></li>
              <li><a>京东代下单</a></li>
              <li><a>我的回收单</a></li>
              <li><a>节能补贴</a></li>
              <li><a>医药服务</a></li>
              <li><a>流量加油站</a></li>
              <li><a>黄金托管</a></li>
            </ul>
          </li>
          <li>
            <h3>客户服务</h3>
            <ul>
              <li><a>返修退还货</a></li>
              <li><a>价格保护</a></li>
              <li><a>意见建议</a></li>
              <li><a>购买咨询</a></li>
              <li><a>交易纠纷</a></li>
              <li><a>我的发票</a></li>
              <li><a>医药服务</a></li>
            </ul>
          </li>
          <li>
            <h3>设置</h3>
            <ul>
              <li><a>个人信息</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyCenter'
}
</script>

<style lang='less' scoped>
.center {
  overflow: hidden;
  width: 1177px;
  margin: 0 auto;
  .center_left {
    width: 240px;
    float: left;
    .typeNav {
      > ul {
        > li {
          > ul {
            > li {
              margin: 15px;
              width: 200px;
              text-align: center;
              border-bottom: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
}
</style>