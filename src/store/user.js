// 登录和注册的仓库
import { sendCode, registerUser } from '@/api/index.js'
const state = {
  // 验证码
  code: ''
}
const mutations = {
  SENDCODE(state, code) {
    state.code = code
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
  }
}
const getters = {}
export default { state, mutations, actions, getters }
