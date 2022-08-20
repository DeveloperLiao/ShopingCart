<template>
  <div>
    <div class="main_body_top">
      <div class="typebar">
        <div class="body_top">
          <!-- 给父元素添加事件委托 -->
          <div
            @mouseleave="leavehidder"
            @mouseenter="enterShow"
          >
            <h3 class="all">全部商品分类</h3>
            <!-- 使用transition必须要有v-if||v-show -->
            <transition name="sort">
              <!-- 给父元素添加事件委托 -->
              <ul
                class="sort"
                @click="goSearch"
                v-show="barShow"
              >
                <li
                  v-for="(item1,index) in CategoryList"
                  :key="item1.categoryId"
                  @mouseenter="bgcSet(index)"
                  :class="{bgcskyblue:index==ListIndex}"
                ><a
                    :data-v-catagoryName='item1.categoryName'
                    :data-v-catagoId1="item1.categoryId"
                  >{{item1.categoryName}}</a>
                  <ul :style="{display:index==ListIndex?'block':'none'}">
                    <li>
                      <ul>
                        <li
                          v-for="item2 in item1.categoryChild"
                          :key="item2.categoryId"
                        ><a
                            :data-v-catagoryName='item2.categoryName'
                            :data-v-catagoId2="item2.categoryId"
                          >{{item2.categoryName}}</a>
                          <ul>
                            <li
                              v-for="item3 in item2.categoryChild"
                              :key="item3.categoryId"
                            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
                                :data-v-catagoryName='item3.categoryName'
                                :data-v-catagoId3="item3.categoryId"
                              >{{item3.categoryName}}</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </transition>

          </div>
          <ul class="top_list">
            <li><a href="#">服装城</a></li>
            <li><a href="#">美妆馆</a></li>
            <li><a href="#">尚品汇超市</a></li>
            <li><a href="#">全球购</a></li>
            <li><a href="#">闪购</a></li>
            <li><a href="#">团购</a></li>
            <li><a href="#">有趣</a></li>
            <li><a href="#">秒杀</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dividing_line_1"></div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入lodash实现一级导航栏节流
// 按需引入
import throttled from 'lodash/throttle.js'
export default {
  name: 'MyTypeBar',
  data() {
    return {
      // 控制typeBar的hover样式
      ListIndex: -1,
      // 控制typeBar的显示与隐藏
      barShow: true
    }
  },

  mounted() {
    // 在/search下TypeBar默认隐藏
    if (this.$route.path == '/search') {
      this.barShow = false
    }
    if (this.$route.path.includes('/detail')) {
      this.barShow = false
    }
  },
  computed: {
    // 遍历state仓库中的数据
    ...mapState({
      CategoryList: state => {
        return state.home.CategoryList
      }
    })
  },
  methods: {
    // 设置TypeBar一级列表项的背景颜色
    // 采用ES5的语法书写方法
    bgcSet: throttled(function (index) {
      this.ListIndex = index
    }, 50),

    // 清除TypeBar一级列表项的背景颜色并实现TypeBar的隐藏
    leavehidder() {
      // 通过判断路由来实现在/search或者是/detail下TypeBar显示与隐藏
      if (this.$route.path == '/search' || this.$route.path.includes('/detail')) {
        this.barShow = false
      }
      this.ListIndex = -1
    },
    // 实现typeBar的显示
    enterShow() {
      this.barShow = true
    },
    //实现点击列表项跳转到search页面并传递参数
    goSearch(event) {
      // 使用编程性导航，声明式导航router-link是组件，过多使用会加大内存，导致卡顿
      // 使用自定义属性来判断被点击的元素是a元素
      // 使用自定义属性来取被点击a元素的id值
      let { vCatagoryname, vCatagoid1, vCatagoid2, vCatagoid3 } = event.target.dataset
      let location = {
        name: 'search',
        query: {}
      }
      if (vCatagoryname) {
        location.query.categoryName = vCatagoryname
        if (vCatagoid1) {
          location.query.category1Id = vCatagoid1
        } else if (vCatagoid2) {
          location.query.category2Id = vCatagoid2
        } else if (vCatagoid3) {
          location.query.category3Id = vCatagoid3
        }
        // 此处表示有params参数也要传递给/search
        if (this.$route.params) {
          // 路由合并
          location.params = this.$route.params
          this.$router.push(location)
        }
        this.$router.push(location)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.main_body_top {
  width: 1135px;
  margin: 0 auto;
  position: relative;
  .typebar {
    .body_top {
      display: flex;
      align-items: center;

      h3 {
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #e1251b;
        color: #fff;
        font-weight: normal;
      }

      .top_list li {
        float: left;
        padding: 12px 25px;
      }
    }

    .sort {
      position: absolute;
      top: 43px;
      left: 0;
      z-index: 999;
      background-color: #fafafa;

      > li {
        width: 150px;
        padding: 4px 0;
        > a {
          font-size: 12px;
        }
        > a:hover {
          color: #000;
        }

        > ul {
          width: 740px;
          height: 465px;
          position: absolute;
          top: 1px;
          left: 150px;
          z-index: 999;
          background-color: #fafafa;
          border: 1px solid #dddddd;
          display: none;

          > li {
            margin: 10px;

            > ul {
              overflow: hidden;

              > li {
                float: left;

                margin: 5px 0;

                > a {
                  font-size: 12px;
                  font-weight: bold;
                }
                > ul {
                  width: 650px;
                  overflow: hidden;
                  float: right;

                  > li {
                    float: left;

                    > a {
                      font-size: 12px;
                      font-weight: normal;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // 书写TypeBar的过渡动画的样式
    // 鼠标进入的样式
    .sort-enter-from {
      height: 0px;
      opacity: 0;
    }
    //完成后的样式
    .sort-enter-to {
      height: 463px;
      opacity: 1;
    }
    // 定义进入动画的时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
    // 鼠标离开的样式
    .sort-leave-from {
      height: 463px;
      opacity: 1;
    }
    //完成后的样式
    .sort-leave-to {
      height: 0px;
      opacity: 0;
    }
    // 定义离开动画的时间、速率
    .sort-leave-active {
      transition: all 0.5s linear;
    }
  }
}
.dividing_line_1 {
  border: 0.1px solid #f00;
}
.bgcskyblue {
  background-color: skyblue;
}
</style>