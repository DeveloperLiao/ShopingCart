import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router.js'
import store from '@/store/index.js'
const router = new createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  }
})
// 拿到用户的token值，有token说明已经登录
let token = store.state.user.token
// 拿到userInfo的name的数据
let name = store.state.user.userInfo.name
// 添加前置导航守卫
router.beforeEach(async (to, from, next) => {
  if (token) {
    // 用户已经登录，且要跳转到登录页面
    if (to.path == '/login') {
      // 重新跳转到home首页
      next('/home')
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
    next()
  }
})
export default router
