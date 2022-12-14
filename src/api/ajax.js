// axios的基本设置
import axios from 'axios'
// 引入nprogress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入仓库
import store from '@/store/index.js'
const request = axios.create({
  // 本地服务器的地址
  baseURL: 'http://192.168.59.199:8080/',
  timeout: 5000
})
// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    //  发请求之前需要做些什么
    nprogress.start()
    // 在请求头加入临时身份ID，让服务器识别游客身份
    if (localStorage.getItem('uuid_token')) {
      config.headers.userTempId = store.state.detail.uuid_token
    }
    // 在请求头中加入注册后获取的token,获取用户信息
    if (store.state.user.token) {
      config.headers.token = store.state.user.token
    }
    return config
  },
  function (error) {
    // 请求失败后做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    //  响应成功后需要做些什么
    nprogress.done()
    return response.data
  },
  function (error) {
    // 响应失败后做些什么
    return Promise.reject(error)
  }
)

export default axios
