import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.js'
import store from '@/store/index.js'
import { setTimeout } from 'core-js/web/immediate'
const router = new createRouter({
  history: createWebHistory(),
  routes,
  // 记录滚动行为
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
  // // 字符串转对象
  // parseQuery(query) {},
  // // 对象转字符串
  // stringifyQuery(obj) {},
  //  浏览器不支持history会自动转为hash形式
  fullback: true
})
// 添加全局导航守卫
router.beforeEach(async (to, from, next) => {
  // 拿到用户的token值，有token说明已经登录
  let token = store.state.user.token
  // 拿到userInfo的name的数据
  let name = store.state.user.userInfo.name
  if (token) {
    // 用户已经登录，且要跳转到登录页面
    if (to.path === '/login' || to.path === '/register') {
      // 重新跳转到home首页
      next('/')
    } else {
      // 用户已经登录，且要跳转到除登录以外的页面
      if (name) {
        // 有用户名的数据
        next()
      } else {
        // 此时除home以外，其他页都没有name的数据，所以需要重新发起dispatch
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // token失效,退出原先的登录，重新登录
          await store.dispatch('loginOut')
          next('/login')
        }
      }
    }
  }
  // 用户没有登录
  else {
    // 没有登录不能访问交易页、个人中心相关页、订单相关页,跳转到登录页
    if (to.path.indexOf('/trade') != -1 || to.path.indexOf('/center') != -1 || to.path.indexOf('/pay') != -1) {
      let toPath = to.path
      next('/login?redirect=' + toPath)
    } else {
      next()
    }
  }
})
export default router
