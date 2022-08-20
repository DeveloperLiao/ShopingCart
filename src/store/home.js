// home的小仓库
import { getBaseCategoryList, getBannerList, getFloorList } from '@/api/index.js'
// 仓库存储数据的地方
const state = {
  // 不能乱写，要和响应的数据类型一样
  CategoryList: [],
  BannerList: [],
  FloorList: []
}
//   修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, CategoryList) {
    // 将服务器响应的数据传入仓库
    state.CategoryList = CategoryList
  },
  GETBANNERDATE(state, BannerList) {
    state.BannerList = BannerList
  },
  GETFLOORLIST(state, FloorList) {
    state.FloorList = FloorList
  }
}
// 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async CategoryList() {
    let result = await getBaseCategoryList()
    if (result.code == 200) {
      this.commit('CATEGORYLIST', result.data)
    }
  },
  // 获取banner轮播图的数据
  async getBannerList() {
    let result = await getBannerList()
    if (result.code == 200) {
      this.commit('GETBANNERDATE', result.data)
    }
  },
  // 获取floor的数据
  async getFloorList() {
    let result = await getFloorList()

    this.commit('GETFLOORLIST', result.data)
  }
}
//   理解为计算属性，用于简化仓库数据，让组件的获取仓库的数据更加方便
const getters = {}
// 对外暴露Store的一个实例
export default { state, mutations, actions, getters }
