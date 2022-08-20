<template>
  <div class="body_middle">
    <div class="rotation_chart">
      <!-- 在webpack打包后，public下的静态资源是保持不变的，所以要将模拟数据的图片放在此目录下 -->
      <Carousel :list="BannerList"></Carousel>

    </div>
    <div class="middle_news">
      <div class="news">
        <div class="news_express">
          <h6><b>尚品汇快报</b></h6>
          <span>更多 ></span>
        </div>
        <hr />
        <div class="news_list">
          <ul>
            <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
            <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
            <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
            <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
            <li><b>[特惠]</b>备战开学季 全民半价购数码</li>
          </ul>
        </div>
      </div>
      <div class="news_icon">
        <table>
          <tr>
            <td>话费</td>
            <td>机票</td>
            <td>电影票</td>
            <td>游戏</td>
          </tr>
          <tr>
            <td>彩票</td>
            <td>加油站</td>
            <td>酒店</td>
            <td>火车票</td>
          </tr>
          <tr>
            <td>众筹</td>
            <td>理财</td>
            <td>礼品卡</td>
            <td>白条</td>
          </tr>
        </table>
      </div>
      <div class="news_img"><img
          src="./images/new.png"
          alt="!"
        /></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'MyListContainer',
  mounted() {
    this.$store.dispatch('getBannerList')
  },
  computed: {
    ...mapState({
      BannerList: state => state.home.BannerList
    })
  }
}
</script>

<style lang='less' scoped>
.body_middle {
  position: relative;
  width: 1177px;
  display: flex;
  .rotation_chart {
    width: 750px;
    padding: 10px;
    margin-left: 171px;
  }
  .middle_news {
    margin-top: 10px;
    .news {
      border: 1px solid #e4e4e4;
      border-bottom: 0;
      .news_express {
        display: flex;
        justify-content: space-between;
        padding: 5px 5px;
      }
      .news_list li {
        padding: 6px 5px;
        font-size: 12px;
      }
    }
  }
  .news_icon {
    margin-bottom: 3px;
    table tr td {
      width: 62px;
      height: 62px;
      text-align: center;
      vertical-align: bottom;
      border: 1px solid #e4e4e4;
      background: url('./images/icons.png');
      font-size: 12px;
    }
    table tr td:hover {
      cursor: pointer;
    }
    table tr:nth-of-type(1) td:nth-of-type(1) {
      background-position: 2px 0;
    }
    table tr:nth-of-type(1) td:nth-of-type(2) {
      background-position: -63px 0;
    }
    table tr:nth-of-type(1) td:nth-of-type(3) {
      background-position: -130px 0;
    }
    table tr:nth-of-type(1) td:nth-of-type(4) {
      background-position: -190px 3px;
    }
    table tr:nth-of-type(2) td:nth-of-type(1) {
      background-position: 0px -70px;
    }
    table tr:nth-of-type(2) td:nth-of-type(2) {
      background-position: -65px -70px;
    }
    table tr:nth-of-type(2) td:nth-of-type(3) {
      background-position: -127px -67px;
    }
    .table tr:nth-of-type(2) td:nth-of-type(4) {
      background-position: -190px -67px;
    }
    table tr:nth-of-type(3) td:nth-of-type(1) {
      background-position: 0 -140px;
    }
    table tr:nth-of-type(3) td:nth-of-type(2) {
      background-position: -65px -140px;
    }
    table tr:nth-of-type(3) td:nth-of-type(3) {
      background-position: -127px -137px;
    }
    table tr:nth-of-type(3) td:nth-of-type(4) {
      background-position: -195px -140px;
    }
  }
}
</style>