<template>
  <TypeBar></TypeBar>
  <div class="detail">
    <!-- 头部面包屑 -->
    <div class="detail-top">
      <ul>
        <li>{{categoryViewList.category1Name}}&nbsp;&nbsp;/</li>
        <li>{{categoryViewList.category2Name}}&nbsp;&nbsp;/</li>
        <li>{{categoryViewList.category3Name}}</li>
      </ul>
    </div>
    <!-- 中部商品详情 -->
    <div class="detail-middle clear">
      <div class="left fl ">
        <!-- 放大镜效果 -->
        <Zoom :skuInfoList="skuInfoList"></Zoom>
        <!-- 缩略图 -->
        <ImageList :skuImageList="skuImageList" ></ImageList>
      </div>
      <!-- 具体详情页 -->
      <div class="right fr">
        <div class="specific ">
          <h2>{{skuInfoList.skuName}}</h2>
          <p class="fs12 c81623">{{skuInfoList.skuDesc}}</p>
          <div class="props ">
            <div class="props_1">
              <div class="props_1_1">
                <span class="fs12 price">价&nbsp;&nbsp;&nbsp;&nbsp;格</span><span class="c81623">¥</span><b class="fs24 c81623 ">{{skuInfoList.price}}</b><i class="c81623 fs12 ">降价通知</i>
              </div>
              <div class="props_1_2">
                <span class="cumulative fs12 ">累计评价<i class="fs12">65545</i></span>
              </div>
            </div>
            <div class="props_2"><span class="fs12 promotion">促&nbsp;&nbsp;&nbsp;&nbsp;销</span>
              <div class="introduct "><span class="fs12 increase">加价购</span><span class="fs12 c999 lh36">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span></div>
            </div>
          </div>
          <div class="address">
            <div>
              <span class="fs12"> 支&nbsp;&nbsp;&nbsp;&nbsp;持</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="fs12 c999">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</span>
            </div>
            <div><span class="fs12">配&nbsp;&nbsp;送&nbsp;&nbsp;至</span>&nbsp;&nbsp;<span class="fs12 c999">广东省 深圳市 宝安区</span></div>
          </div>
          <div
            class="attr"
            v-for="(spuSaleAttr,index) in spuSaleAttrList"
            :key="spuSaleAttr.id"
          >
            <dl class="fs12  ">
              <dt class="fs12">{{spuSaleAttr.saleAttrName}}</dt>
              <dd
                class="fs12 c999 selectItem"
                v-for="(spuSaleAttrValue,index) in spuSaleAttr.spuSaleAttrValueList"
                :key="spuSaleAttrValue.id"
                :class="{active:spuSaleAttrValue.isChecked==1}"
                @click="changeIsChecked"
              >{{spuSaleAttrValue.saleAttrValueName}}</dd>
            </dl>
          </div>
          <div class="enter_cart">
            <input
              type="text"
              v-model=" skuNum"
              @change="textChange"
            >
            <div class="btn">
              <button @click="add">+</button>
              <button
                @click="sub"
                :disabled="skuNum<=1?true:false"
              >-</button>
            </div>
            <span> <a
                @click='enterCart'
                class="btn_a"
              >加入购物车</a>
            </span>
          </div>
        </div>

      </div>
    </div>
    <!-- 底部商品详情 -->
    <div class="detail-bottom clear">
      <div class="left_recommed fl">
        <div class="sort">
          <span class="active">相关分类</span>
          <span>推荐品牌</span>
        </div>
        <dl class="clear">
          <dt>手机</dt>
          <dt>手机壳</dt>
          <dt>内存卡</dt>
          <dt>Iphone配件</dt>
          <dt>贴膜</dt>
          <dt>手机耳机</dt>
          <dt>移动电源</dt>
          <dt>平板电脑</dt>
        </dl>
        <dl>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623 ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623 ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623 ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623 ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623 ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
          <dt>
            <div class="img">
              <img
                src="./images/cdb.png"
                alt=""
              >
            </div>

            <p class="fs12">Apple苹果iPhone 6s (A1699)</p>
            <p class="c81623  ">¥6088.00</p>
            <div class="btn_enterCart">
              <a href="">加入购物车</a>
            </div>
          </dt>
        </dl>
      </div>
      <div class="right_select fr">
        <div class="title_select">
          <h4 class="fs12">选择搭配</h4>
          <div class="select">
            <div class="flexColumn ml20"><img
                src="./images/shouji.png"
                alt=""
              >
              <span class="fs18 c81623 bold">￥5299</span>
            </div>
            <div class="lh150 jiahao">+</div>
            <ul class="goods clear">
              <li><img
                  src="./images/yashua.png"
                  alt=""
                >
                <span>Feless费勒斯VR</span>
                <div class="center"><input
                    type="checkbox"
                    name=""
                    id=""
                  >39</div>
              </li>
              <li><img
                  src="./images/yashua.png"
                  alt=""
                >
                <span>Feless费勒斯VR</span>
                <div class="center"><input
                    type="checkbox"
                    name=""
                    id=""
                  >39</div>
              </li>
              <li><img
                  src="./images/yashua.png"
                  alt=""
                >
                <span>Feless费勒斯VR</span>
                <div class="center"><input
                    type="checkbox"
                    name=""
                    id=""
                  >39</div>
              </li>
              <li><img
                  src="./images/yashua.png"
                  alt=""
                >
                <span>Feless费勒斯VR</span>
                <div class="center"><input
                    type="checkbox"
                    name=""
                    id=""
                  >39</div>
              </li>
            </ul>
            <div class="divide">
              <span></span>
            </div>
            <div class="total">
              <p>已选购<i>0</i>件商品</p>
              <p class="fs12 bold">套餐价</p>
              <p class="c81623">￥5299</p>
              <div class="btn_enter">
                <a class="btn_a">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
        <div class="goods_introduct">
          <div class="list">
            <ul class="clear">
              <li><a
                  href=""
                  class="active"
                >商品介绍</a></li>
              <li><a href="">规格和包装</a></li>
              <li><a href="">售后保障</a></li>
              <li><a href="">商品评价</a></li>
              <li><a href="">手机社区</a></li>
            </ul>
          </div>
          <div class="list_detail">
            <ul>
              <li>分辨率：1920*1080(FHD)</li>
              <li>后置摄像头：1200万像素</li>
              <li>前置摄像头：500万像素</li>
              <li>核 数：其他</li>
              <li>频 率：以官网信息为准</li>
              <li>品牌： Apple</li>
              <li>商品名称：APPLEiPhone 6s Plus</li>
              <li>商品编号：1861098</li>
              <li>商品毛重：0.51kg</li>
              <li>商品产地：中国大陆</li>
              <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
              <li>系统：苹果（IOS）</li>
              <li>像素：1000-1600万</li>
              <li>机身内存：64GB</li>
            </ul>
          </div>
          <div class="img">
            <img
              src="./images/datu.png"
              alt=""
            >
            <img
              src="./images/datu2.png"
              alt=""
            >
            <img
              src="./images/datu3.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Zoom from './Zoom/index.vue'
import ImageList from './ImageList/index.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Details',
  components: {
    Zoom,
    ImageList
  },
  data() {
    return {
      // 商品的数量
      skuNum: 1
    }
  },
  mounted() {
    // 传递商品的Id
    this.$store.dispatch('getDetailList', this.$route.params.skuid)
  },
  methods: {
    // 商品数量增加
    add() {
      this.skuNum++
    },
    // 商品数量减少
    sub() {
      this.skuNum--
    },
    // 纠正错误的输入
    textChange() {
      // 如果输入的是负数或者是非数值就会被纠正成1
      if (this.skuNum < 1 || isNaN(this.skuNum)) {
        this.skuNum = 1
      }
      // 如果输入的浮点数则转化为整数
      else if (this.skuNum.toString().indexOf('.') != -1) {
        this.skuNum = parseInt(this.skuNum)
      }
    },
    //改变属性按钮选中的状态
    changeIsChecked(event) {
      if (!$(event.target).hasClass('active')) {
        $(event.target).siblings('dd').removeClass('active')
        $(event.target).addClass('active')
      }
    },
    // 跳转到加入购物车成功的页面
    async enterCart() {
      try {
        // vueX的action本质上是一个异步方法，返回的是一个promise对象
        await this.$store.dispatch('postCartData', { skuId: this.$route.params.skuid, skuNum: this.skuNum })
        // 路由跳转
        this.$router.push({ name: 'addcartsuccess', params: { skuNum: this.skuNum } })
        // 会话存储,将skuInfoList对象转化为json的格式存入
        sessionStorage.setItem('skuInfoList', JSON.stringify(this.skuInfoList))
      } catch (error) {
        alert('加入购物车失败！')
      }
    }
  },
  computed: {
    ...mapGetters(['categoryViewList', 'skuInfoList', 'spuSaleAttrList']),
    skuImageList() {
      return this.skuInfoList.skuImageList || {}
    }
  }
}
</script>

<style lang='less' scoped>
// 公共样式
.c81623 {
  color: #c81623;
}
.fs24 {
  font-size: 24px;
}
.fs12 {
  font-size: 12px;
}
.fs18 {
  font-size: 18px;
}
.center {
  text-align: center;
}
.bold {
  font-weight: bold;
}
.c999 {
  color: #999;
}
.clear {
  overflow: hidden;
}
.w180 {
  width: 180px;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.lh36 {
  line-height: 36px;
}
.lh150 {
  line-height: 150px;
}
.flexColumn {
  display: flex;
  flex-direction: column;
}
.btn_a {
  display: inline-block;
  width: 130px;
  height: 39x;
  text-align: center;
  line-height: 39px;
  background-color: #e1251b;
  color: #fff;
}
.ml20 {
  margin: 0 20px;
}
// detail
.detail {
  .detail-top {
    width: 1137px;
    margin: 0 auto;
    ul {
      overflow: hidden;
      margin: 20px 0;

      li {
        float: left;
        margin-right: 4px;
      }
    }
  }
  .detail-middle {
    width: 1137px;
    margin: 0 auto;
    margin-bottom: 30px;

    .right {
      width: 650px;
      .specific {
        h2 {
          padding: 5px 0;
        }
        > p {
          padding: 7px 0;
        }
        .props {
          width: 650px;
          background-color: #fee9eb;
          border: 1px solid transparent;
          .props_1 {
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin-top: 15px;
            .props_1_2 {
              width: 100px;
              line-height: 32px;
            }
          }
          .props_2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .introduct {
              width: 580px;
              .increase {
                padding: 5px;
                background-color: #c81623;
                color: #fff;
              }
            }
          }
          .promotion,
          .price {
            padding: 40px 20px;
          }
        }
        .address {
          border-bottom: 1px solid #ededed;
          > div {
            margin: 20px 0;
          }
        }
        .attr {
          margin: 10px 0;
          dt,
          dd {
            display: inline-block;
            width: 66px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #eee;
            margin: 0 5px;
          }
          dt {
            border: 0;
          }
          .active {
            border: 1px solid #000;
          }
        }
        .enter_cart {
          display: flex;
          input {
            width: 51px;
            height: 39px;
            text-align: center;
            line-height: 39px;
            outline: none;
          }
          .btn {
            height: 39px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            button {
              width: 15px;
              height: 17px;
              background-color: #f1f1f1;
              border: 0;
            }
          }
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .detail-bottom {
    width: 1137px;
    margin: 0 auto;

    .left_recommed {
      width: 212px;
      border: 1px solid #ccc;

      .sort {
        span {
          display: inline-block;
          width: 105px;
          height: 40px;
          line-height: 40px;
          font-size: 12px;
          text-align: center;
          color: #6e3333;
          font-weight: bold;
          border-bottom: 1px solid #ccc;
        }
        .active {
          border-bottom: 0px;
          border-top: 2px solid #e1251b;
          font-weight: normal;
        }
      }
      dl:nth-of-type(1) {
        width: 212px;

        dt {
          float: left;
          width: 95px;
          height: 29px;
          font-size: 12px;
          text-align: center;
          line-height: 29px;
          border-bottom: 1px dotted #ededed;
        }
      }
      dl:nth-of-type(2) {
        width: 212px;
        dt {
          border-bottom: 1px solid #ededed;
          .img {
            width: 152px;
            height: 104px;
            margin: 0 auto;
          }
          p {
            padding: 5px 3px;
          }
          .btn_enterCart {
            width: 90px;
            margin: 8px auto;
            a {
              display: inline-block;
              width: 90px;
              height: 24px;
              text-align: center;
              line-height: 24px;
              color: #8c8c8c;
              border: 1px solid #8c8c8c;
              font-size: 12px;
            }
          }
        }
      }
    }
    .right_select {
      width: 913px;
      margin-left: 12px;
      .title_select {
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        h4 {
          height: 27px;
          line-height: 27px;
          border-bottom: 1px solid #ddd;
          padding: 0 10px;
        }
        .select {
          background-color: #fff;

          .goods {
            li {
              float: left;
              display: flex;
              flex-direction: column;
              margin: 0 20px;
            }
          }
          .divide {
            height: 160px;
            span {
              display: inline-block;
              width: 1px;
              height: 150px;
              background-color: #ddd;
              margin: 5px 0;
            }
          }
          .total {
            padding: 10px;
            p {
              padding: 5px;
            }
          }
        }
        > div {
          display: flex;
        }
      }
      .goods_introduct {
        margin-top: 20px;
        .list {
          width: 981px;
          height: 44px;
          background-color: #ededed;
          ul {
            li {
              float: left;
              background-color: #fff;
              border: 1px solid #ededed;
              a {
                display: inline-block;
                width: 83px;
                height: 42px;
                font-size: 12px;
                line-height: 42px;
                text-align: center;
                color: #666;
              }
            }
            .active {
              color: #fff;
              background-color: #c81623;
            }
          }
        }
        .list_detail {
          ul {
            li {
              margin: 10px 0;
              font-size: 12px;
            }
          }
        }
        .img {
          img {
            width: 913px;
          }
        }
      }
    }
  }
}
</style>