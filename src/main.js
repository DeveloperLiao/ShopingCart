import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../public/reset.css'
// 引入jquery
import $ from 'jquery'
// 引入路由
import router from '@/router/index.js'
// 注册全局组件
import TypeBar from '@/components/TypeBar/index.vue'
import Carousel from '@/components/Carousle/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// 引入store
import Store from '@/store/index.js'
// 使用mockjs
import '@/mock/mockServe.js'
// 引入swiper的样式
import 'swiper/css/swiper.min.css'
// 引入bus
import bus from '@/EventBus/index.js'

const app = createApp(App)
// 使用路由
app.use(router)
// 使用全局组件
app.component('TypeBar', TypeBar)
app.component('Carousel', Carousel)
app.component('Pagination', Pagination)
// 使用仓库
app.use(Store)
// 全局使用bus
app.config.globalProperties.$bus = bus
app.mount('#app')
