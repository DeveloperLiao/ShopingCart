<template>
  <TypeBar></TypeBar>
  <div class="main">
    <!-- 面包屑 -->
    <div class="bread">
      <div class="all"><a href="#">全部结果</a></div>
      <div class="label">
        <ul>
          <li v-if="searchParams.categoryName"><a>{{searchParams.categoryName}}</a>&nbsp;&nbsp;<i><a @click='removecategoryName'>×</a> </i></li>
          <li v-if="searchParams.keyword"><a>{{searchParams.keyword}}</a>&nbsp;&nbsp;<i><a @click='removekeyword'>×</a> </i></li>
          <li v-if="searchParams.trademark"><a>{{searchParams.trademark.split(":")[1]}}</a>&nbsp;&nbsp;<i><a @click="removetrademark">×</a></i></li>
          <li v-for="(attr,index) in searchParams.props"><a>{{attr.split(":")[1]}}</a>&nbsp;&nbsp;<i><a @click="removeattr(index)">×</a></i></li>
        </ul>
      </div>
    </div>
    <SearchSelect
      @trademark='trademark'
      @sentAttr='attrInfo'
    ></SearchSelect>
    <div class="details">
      <div>
        <ul class="nav">
          <li
            :class="isOne"
            @click="changeActive(1)"
          >综合 <span
              class="iconfont"
              :class="arrow"
              v-if="arrowOne"
            ></span></li>
          <li
            :class="isTwo"
            @click="changeActive(2)"
          >价格<span
              class="iconfont"
              :class="arrow"
              v-if="arrowTwo"
            > </span></li>
        </ul>
      </div>
      <div class="goods">
        <ul class="goods-list">
          <li
            v-for="(goods,index) in goodsList"
            :key="goods.id"
          >
            <router-link :to="'/detail/'+goods.id"><img
                v-lazy="goods.defaultImg"
                alt="!"
                class="goods-img"
              ></router-link>
            <h2 class="price">￥{{goods.price}}.00</h2>
            <p><a class="introudce"> {{goods.title}}</a></p>
            <span class="evaluate">已有<i>2000</i>人评价</span>
            <div class="btn">
              <span class="enter-cart"><a href="#">加入购物车</a></span>
              <span class="collection"><a href="#">收藏</a></span>
            </div>
          </li>
        </ul>
      </div>
      <Pagination
        :pageSize='searchParams.pageSize'
        :pageNo='searchParams.pageNo'
        :total='total'
        :continue='5'
        @currentPage='currentPage'
      ></Pagination>
    </div>
  </div>
</template>

<script>
import SearchSelect from '@/pages/Search/SearchSelect/index.vue'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'MySearch',
  components: { SearchSelect },
  data() {
    return {
      searchParams: {
        category1Id: '',
        category2Id: '',
        category3Id: '',
        keyword: '',
        categoryName: '',
        // 排序,1代表综合排序，2代表价格排序，desc为降序，asc为升序
        order: '1:desc',
        // 当前页
        pageNo: 1,
        // 每页展示多少条的数据
        pageSize: 10,
        props: [],
        trademark: ''
      }
    }
  },
  beforeMount() {
    //  ES6合并对象,组件挂载之前整理好数据发送给服务器
    this.searchParams = Object.assign(this.searchParams, this.$route.query, this.$route.params)
  },
  mounted() {
    // mounted只能发送一次请求
    this.postSearchList()
  },
  methods: {
    // search需要频繁发起请求，所以将请求封装成方法便于多次使用
    postSearchList() {
      this.$store.dispatch('postSearchList', this.searchParams)
    },
    // 删除分类的面包屑
    removecategoryName() {
      this.searchParams.categoryName = ''
      // 删除面包屑以后自己跳自己
      this.$router.push({ name: 'search' })
    },
    // 删除关键字的面包屑
    removekeyword() {
      this.searchParams.keyword = ''
      this.$router.push({ name: 'search' })
      // 向兄弟组件header传递keyword
      this.$bus.emit('keyword', this.searchParams.keyword)
    },
    // 删除品牌的面包屑
    removetrademark() {
      this.searchParams.trademark = undefined
      // 返回search主页
      this.postSearchList()
    },
    // 删除属性的面包屑
    removeattr(index) {
      this.searchParams.props.splice(index, 1)
      this.postSearchList()
    },
    // 接受来自子组件selectselect的trademark
    trademark(val) {
      this.searchParams.trademark = val
      this.postSearchList()
    },
    // 接受来自子组件selectselect的Attr
    attrInfo(val) {
      // 数组去重,匹配重复项
      if (this.searchParams.props.indexOf(val) == -1) this.searchParams.props.push(val)
      this.postSearchList()
    },
    // 改变排序
    changeActive(flag) {
      // flag为传入的标记值,为了区分点击的是综合还是排序
      let orderOrgin = this.searchParams.order
      // 原始的flag值
      let orginFlag = this.searchParams.order.split(':')[0]
      // 原始的排序
      let orginSort = this.searchParams.order.split(':')[1]
      // 新的Order
      let newOrder = ''
      // 判断是两次以上的点击
      if (orginFlag == flag) {
        // 切换desc或者asc
        newOrder = `${flag}:${orginSort == 'desc' ? 'asc' : 'desc'}`
      } else {
        // 判断是第一次的点击
        newOrder = `${flag}:${'desc'}`
      }
      // 重新赋值,发起请求
      this.searchParams.order = newOrder
      this.postSearchList()
    },
    //接收最新的当前页的页码值
    currentPage(pagenum) {
      this.searchParams.pageNo = pagenum
      this.postSearchList()
    }
  },
  computed: {
    ...mapGetters({
      // 对象映射的方式
      goodsList: 'goodsList'
    }),
    // 匹配综合排序类名是否为active
    isOne() {
      return { active: this.searchParams.order.split(':')[0].indexOf(1) !== -1 }
    },
    // 匹配价格排序类名是否为active
    isTwo() {
      return { active: this.searchParams.order.split(':')[0].indexOf(2) !== -1 }
    },
    // 控制是上箭头还是下箭头
    arrow() {
      if (this.searchParams.order.split(':')[1].indexOf('desc') !== -1) {
        return 'icon-xiajiantou'
      } else if (this.searchParams.order.split(':')[1].indexOf('asc') !== -1) {
        return 'icon-shangjiantou'
      }
    },
    // 控制箭头的显示与隐藏
    arrowOne() {
      return this.searchParams.order.split(':')[0].indexOf(1) !== -1
    },
    arrowTwo() {
      return this.searchParams.order.split(':')[0].indexOf(2) !== -1
    },
    ...mapState({
      // 返回数据的总条数
      total: state => {
        return state.search.SearchList.total
      }
    })
  },
  watch: {
    // 监听路由信息的变化,发生变化就整理数据发送请求给服务器,不用使用深度监听，当数据很复杂的时候使用
    $route: {
      handler() {
        this.searchParams = Object.assign(this.searchParams, this.$route.query, this.$route.params)
        this.postSearchList()
        // 重置商品id为空,如果设置为undefined就不会传输商品id的参数给服务器
        this.searchParams.category1Id = undefined
        this.searchParams.category2Id = undefined
        this.searchParams.category3Id = undefined
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 1132px;
  margin: 10px auto;
  .bread {
    width: 1132px;
    display: flex;
    align-content: center;
    .all {
      padding: 2px;
      margin: 0 20px;
      a {
        font-size: 12px;
      }
    }
    .label {
      ul {
        overflow: hidden;
        li {
          background-color: #ece9e9;
          border: 1px solid #c2c2c2;
          float: left;
          padding: 2px;
          margin: 0 2px;
          a {
            font-size: 12px;
          }
        }
      }
    }
  }
  .details {
    margin-top: 10px;
    .nav {
      overflow: hidden;
      width: 1132px;
      background-color: #f7f7f7;
      border: 1px solid #ececec;
      li {
        float: left;
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
      }
      .icon-shangjiantou,
      .icon-xiajiantou {
        font-size: 12px;
      }
      li:hover {
        cursor: pointer;
      }
      .active {
        color: #fff;
        background-color: #d30000;
      }
    }
  }
  .goods {
    margin-top: 25px;
    .goods-list {
      overflow: hidden;
      li {
        width: 222px;
        float: left;
        margin: 25px 0px;
        .goods-img {
          width: 222px;
          height: 250px;
        }
        .introudce {
          font-size: 12px;
          display: -webkit-box;
          // 超过行数隐藏显示
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .price {
          color: #981208;
        }
        .evaluate {
          display: inline-block;
          font-size: 12px;
          padding: 7px 0;

          i {
            font-size: 12px;
            color: #615a98;
          }
        }
        .btn {
          span {
            display: inline-block;
            width: 80px;
            height: 25px;
            margin: 5px 10px;
            line-height: 25px;
            text-align: center;
            a {
              font-size: 12px;
            }
          }
          .enter-cart:hover {
            background-color: #981208;
            a {
              color: #fff;
            }
          }
          .collection:hover {
            background-color: #615a98;
            a {
              color: #fff;
            }
          }
          .enter-cart {
            border: 1px solid #981208;
            a {
              color: #981208;
            }
          }
          .collection {
            border: 1px solid #615a98;
            a {
              color: #615a98;
            }
          }
        }
      }
    }
  }
}
</style>
