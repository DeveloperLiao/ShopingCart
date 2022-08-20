// 购物车的小仓库
import { getCartData, delCartData, postCartData, switchChecked } from '@/api/index.js'
const state = {
  cartData: []
}
const mutations = {
  GETCARTDATA(state, cartData) {
    state.cartData = cartData
  }
}
const actions = {
  // 拿到购物车的数据
  async getCartData({ commit }) {
    let result = await getCartData()
    if (result.code == 200) {
      commit('GETCARTDATA', result.data)
    }
  },
  // 删除购物车某个商品的数据
  async delCartData({}, skuid) {
    let result = await delCartData(skuid)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 存入购物车的数据,不需要在仓库存入数据
  async postCartData({}, { skuId, skuNum }) {
    let result = await postCartData(skuId, skuNum)
    // 存入成功，返回ok
    if (result.code == 200) {
      return 'ok'
    }
    // 存入失败则放回error对象
    else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 切换商品的选中状态
  async switchChecked({}, { skuId, isChecked }) {
    let result = await switchChecked(skuId, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 全选或者全不选
  async checkAll({ dispatch, state }, isChecked) {
    // 所有的promise的请求
    let promiseAll = []
    state.cartData[0].cartInfoList.forEach(item => {
      let promise = dispatch('switchChecked', { skuId: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    // 所有异步请求执行后，返回
    return Promise.all(promiseAll)
  },
  // 删除选中的商品
  async delChecked({ state, dispatch }) {
    let promiseAll = []
    // 筛选出选中商品并遍历发请求
    state.cartData[0].cartInfoList
      .filter(item => item.isChecked == 1)
      .forEach(item => {
        let promise = dispatch('delCartData', item.skuId)
        promiseAll.push(promise)
      })
    return Promise.all(promiseAll)
  }
}
const getters = {
  // 购物车具体商品的详情
  cartList(state) {
    return state.cartData[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
