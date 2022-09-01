import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../public/reset.css'
// 引入store
import Store from '@/store/index.js'
// 引入路由
import router from '@/router/index.js'
// 注册全局组件
import TypeBar from '@/components/TypeBar/index.vue'
import Carousel from '@/components/Carousle/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// 使用mockjs
import '@/mock/mockServe.js'
// 引入swiper的样式
import 'swiper/css/swiper.min.css'
// 引入bus
import bus from '@/EventBus/index.js'
// 将api全部引入
import * as api from '@/api/index'
//引用图片懒加载
import VueLazyload from 'vue-lazyload'
import loadimage from '../public/images/floor-1-b01.png'
const app = createApp(App)
// 使用路由
app.use(router)
// 使用图片懒加载插件
app.use(VueLazyload, {
  // 懒加载时显示的图片
  loading: loadimage
})

// 使用全局组件
app.component('TypeBar', TypeBar)
app.component('Carousel', Carousel)
app.component('Pagination', Pagination)
// 使用仓库
app.use(Store)
//在Vue的原型属性上全局使用api对象
app.config.globalProperties.$api = api
// 全局使用bus
app.config.globalProperties.$bus = bus
app.mount('#app')
