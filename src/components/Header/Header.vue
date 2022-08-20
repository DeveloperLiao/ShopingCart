<template>
  <div>
    <header class="header">
      <nav class="nav">
        <div class="nav_left">
          <span>尚品汇欢迎您！</span>
          <span v-if="!userInfo.name">请<router-link to="/login">登录</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;免费<router-link to="/register">注册</router-link></span>
          <!-- 显示用户名 -->
          <span v-else="userInfo.name">{{userInfo.name}}&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="">退出登录</router-link></span>
        </div>
        <div class="nav_right">
          <ul class="nav_listItem">
            <li>我的订单 &nbsp;|</li>
            <li>&nbsp;我的购物车&nbsp;|</li>
            <li>&nbsp;我的尚品汇&nbsp;|</li>
            <li>&nbsp;尚品汇会员&nbsp;|</li>
            <li>&nbsp;企业采购&nbsp;|</li>
            <li>&nbsp;关注尚品汇&nbsp;|</li>
            <li>&nbsp;合作招商&nbsp;|</li>
            <li>&nbsp;商家后台</li>
          </ul>
        </div>
      </nav>
      <div class="search">
        <div class="search_left">
          <router-link to="/home">
            <img
              src="./images/logo.png"
              alt="!"
            />
          </router-link>

        </div>
        <div class="search_right">
          <input
            type="text"
            v-model="key"
          />
          <div class="search_link">
            <a @click="goSort">搜索</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyHeader',
  data() {
    return {
      // 关键字
      key: ''
    }
  },
  methods: {
    // 搜索
    goSort() {
      let location = {
        name: 'search',
        params: {
          keyword: this.key || undefined
        }
      }
      // 对象的方式传递参数
      // 此处表示如果有query也传递给/search
      if (this.$route.query) {
        // 路由合并
        location.query = this.$route.query
        this.$router.push(location)
      }
      this.$router.push(location)
    }
  },
  computed: {
    ...mapState({
      // 拿到登录用户的数据
      userInfo: state => state.user.userInfo
    })
  },
  mounted() {
    // 接受来自search组件的keyword值，将key值置空
    this.$bus.on('keyword', val => {
      this.key = val
    })
    // 获取用户信息
    try {
      this.$store.dispatch('getUserInfo')
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>

<style lang='less' scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 10px 25px;
  .nav_left span {
    font-size: 12px;
    a {
      font-size: 12px;
    }
  }

  .nav_listItem li {
    float: left;
    font-size: 12px;
  }
}

.search {
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  .search_right {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 300px;
      height: 25px;
      outline: none;
      border: 1px solid #f00;
    }
  }
  .search_link {
    width: 50px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background-color: #f00;
    a {
      color: #fff;
    }
  }
}
</style>
