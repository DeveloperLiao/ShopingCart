// trade的小仓库
import { getUserAddress, getTradeList } from '@/api/index'
const state = {
  addressList: [],
  tradeList: {}
}
const mutations = {
  GETUSERADDRESS(state, addressList) {
    state.addressList = addressList
  },
  GETTRADELIST(state, tradeList) {
    state.tradeList = tradeList
  }
}
const actions = {
  // 获取交易页的地址信息
  async getUserAddress({ commit }) {
    let result = await getUserAddress()
    if (result.code == 200) {
      commit('GETUSERADDRESS', result.data)
    }
  },
  // 获取交易页订单的信息
  async getTradeList({ commit }) {
    let result = await getTradeList()
    if (result.code == 200) {
      commit('GETTRADELIST', result.data)
    }
  }
}
const getters = {
  //交易页的订单信息
  detailArrayList(state) {
    return state.tradeList.detailArrayList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
