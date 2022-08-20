// home的小仓库
import { getDetailList, postCartData } from '@/api/index.js'
import getUUID from '@/utils/uuid/index.js'
// 仓库存储数据的地方
const state = {
  // 不能乱写，要和响应的数据类型一样
  DetailList: {},
  uuid_token: getUUID()
}
//   修改state的唯一手段
const mutations = {
  GETDETAILLIST(state, DetailList) {
    state.DetailList = DetailList
  }
}
// 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  //获取Detail的数据
  async getDetailList({ commit }, skuid) {
    let result = await getDetailList(skuid)
    if (result.code == 200) {
      commit('GETDETAILLIST', result.data)
    }
  },
  // 存入购物车的数据,不需要在仓库存入数据
  async postCartData({ commit }, { skuId, skuNum }) {
    let result = await postCartData(skuId, skuNum)
    // 存入成功，返回ok
    if (result.code == 200) {
      return 'ok'
    }
    // 存入失败则放回error对象
    else {
      return Promise.reject(new Error('faile'))
    }
  }
}
//   理解为计算属性，用于简化仓库数据，让组件的获取仓库的数据更加方便
const getters = {
  // 面包屑数据
  categoryViewList(state) {
    return state.DetailList.categoryView || {}
  },
  // 详情页面数据
  skuInfoList(state) {
    return state.DetailList.skuInfo || {}
  },
  //商品属性
  spuSaleAttrList(state) {
    return state.DetailList.spuSaleAttrList || []
  }
}
// 对外暴露Store的一个实例
export default { state, mutations, actions, getters }
