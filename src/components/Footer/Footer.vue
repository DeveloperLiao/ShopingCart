<template>
  <div>
    <div class="footer">
      <footer>
        <div class="footer_top">
          <ul class="footer_top_list">
            <li>
              <ul>
                <li>购物指南</li>
                <li>购物流程</li>
                <li>会员介绍</li>
                <li>生活旅行/团购</li>
                <li>常见问题</li>
                <li>购物指南</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>配送方式</li>
                <li>上门自提</li>
                <li>211限时达</li>
                <li>配送服务查询</li>
                <li>配送费收取标准</li>
                <li>海外配送</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>支付方式</li>
                <li>货到付款</li>
                <li>在线支付</li>
                <li>分期付款</li>
                <li>邮局汇款</li>
                <li>公司转账</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>售后服务</li>
                <li>售后政策</li>
                <li>价格保护</li>
                <li>退款说明</li>
                <li>返修/退换货</li>
                <li>取消订单</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>特色服务</li>
                <li>夺宝岛</li>
                <li>DIY装机</li>
                <li>延保服务</li>
                <li>尚品汇E卡</li>
                <li>尚品汇通信</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>帮助中心</li>
                <li><img
                    src="./images/ewm.png"
                    alt="!"
                    style="display:inline-block; width:77px;height:77px"
                  /></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="dividing_line_2"></div>
        <div class="footer_bottom">
          <div class="footer_bottom_list">
            <ul>
              <li>关于我们&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;联系我们&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;商家入驻&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;营销中心&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;友情链接&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;关于我们&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;联系我们&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;商家入驻&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;营销中心&nbsp;&nbsp;|</li>
              <li>&nbsp;&nbsp;友情链接&nbsp;&nbsp;</li>
            </ul>
          </div>
          <div>
            <p>地址: 北京市昌平区宏福科技园综合楼6层</p>
          </div>
          <div>
            <p>京ICP备19006430号</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
  /* foot_top */
  .footer_top {
    padding: 10px;
    .footer_top_list {
      display: flex;
      justify-content: center;
      > li {
        margin: 0 60px;
      }

      li ul li {
        font-size: 12px;
      }
      li ul li:first-of-type {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .footer_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      padding: 5px 0;
    }
    .footer_bottom_list {
      ul {
        overflow: hidden;
        li {
          float: left;
        }
      }
    }
  }
}
</style>
