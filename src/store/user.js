// 登录和注册的仓库
import { sendCode, registerUser, loginUser, getUserInfo, loginOut } from '@/api/index.js'
import { saveToken, getToken, removeToken } from '@/utils/token'
const state = {
  // 验证码
  code: '',
  // 用户的令牌
  token: getToken(),
  userInfo: {}
}
const mutations = {
  SENDCODE(state, code) {
    state.code = code
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  LOGINOUT(state) {
    state.userInfo = {}
    state.token = ''
  }
}
const actions = {
  // 发送验证码
  async sendCode({ commit }, phoneNum) {
    let result = await sendCode(phoneNum)
    if ((result.code = '200')) {
      commit('SENDCODE', result.data)
    }
  },
  //注册用户
  async registerUser({}, data) {
    let result = await registerUser(data)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  //登录
  async loginUser({ commit }, data) {
    let result = await loginUser(data)
    if (result.code == 200) {
      // 持久化存储token
      saveToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await getUserInfo()
    if (result.code == 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    }
  },
  //退出登录
  async loginOut({ commit }) {
    let result = await loginOut()
    if (result.code == 200) {
      commit('LOGINOUT')
      // 移除token
      removeToken()
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {}
export default { state, mutations, actions, getters }
