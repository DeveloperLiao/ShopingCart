// 路由模块
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
import Detail from '@/pages/Detail/index.vue'
import Addcartsuccess from '@/pages/Addcartsuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
import Trade from '@/pages/Trade/index.vue'
import Pay from '@/pages/Pay/index.vue'
import PaySuccess from '@/pages/PaySuccess/index.vue'
import Center from '@/pages/Center/index.vue'
import MyOrder from '@/pages/MyOrder/index.vue'
import GroupOrder from '@/pages/GroupOrder/index.vue'
export default [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    // 路由懒加载
    component: () => import('@/pages/Home/index.vue'),
    //   路由元控制谁可以显示footer组件
    meta: { isShow: true }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login/index.vue'),
    meta: { isShow: false }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register/index.vue'),
    meta: { isShow: false }
  },
  {
    path: '/search',
    component: () => import('@/pages/Search/index.vue'),
    meta: { isShow: true },
    // 给路由命名，具有唯一性
    name: 'search'
  },
  {
    // 路由动态传参
    path: '/detail/:skuid',
    component: () => import('@/pages/Detail/index.vue'),
    meta: { isShow: true },
    name: 'detail'
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/pages/Addcartsuccess/index.vue'),
    meta: { isShow: true }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('@/pages/ShopCart/index.vue'),
    meta: { isShow: true }
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade/index.vue'),
    meta: { isShow: true }
  },
  {
    path: '/pay/:orderId',
    component: () => import('@/pages/Pay/index.vue'),
    meta: { isShow: false },
    //路由独享守卫,只能接受来自trade的路由
    beforeEnter: (to, from) => {
      if (from.path == '/trade') {
        return true
      } else {
        // 从哪里来往哪里去
        return false
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess/index.vue'),
    meta: { isShow: false },
    //路由独享守卫,只能接受来自pay的路由
    beforeEnter: (to, from) => {
      if (from.path.indexOf('/pay') != -1) {
        return true
      } else {
        // 从哪里来往哪里去
        return false
      }
    }
  },
  {
    path: '/center',
    redirect: { path: '/center/myorder' },
    component: () => import('@/pages/Center/index.vue'),
    meta: { isShow: false },
    children: [
      { path: 'myorder', component: () => import('@/pages/MyOrder/index.vue') },
      { path: 'grouporder', component: () => import('@/pages/GroupOrder/index.vue') }
    ]
  }
]
