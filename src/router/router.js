// 路由模块
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
import Detail from '@/pages/Detail/index.vue'
import Addcartsuccess from '@/pages/Addcartsuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
import Trade from '@/pages/Trade/index.vue'
import Pay from '@/pages/Pay/index.vue'
export default [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    //   路由元控制谁可以显示footer组件
    meta: { isShow: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { isShow: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { isShow: false }
  },
  {
    path: '/search',
    component: Search,
    meta: { isShow: true },
    // 给路由命名，具有唯一性
    name: 'search'
  },
  {
    // 路由动态传参
    path: '/detail/:skuid',
    component: Detail,
    meta: { isShow: true },
    name: 'detail'
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: Addcartsuccess,
    meta: { isShow: true }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: { isShow: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { isShow: true }
  },
  {
    path: '/pay/:orderId',
    component: Pay,
    meta: { isShow: false }
  }
]
