// seach的小仓库
import { postSearchList } from '@/api/index.js'
// 仓库存储数据的地方
const state = {
  // 不能乱写，要和响应的数据类型一样
  SearchList: {}
}
//   修改state的唯一手段
const mutations = {
  POSRSEARCHLIST(state, SearchList) {
    state.SearchList = SearchList
  }
}
// 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取search列表的数据
  async postSearchList({ commit }, params) {
    const result = await postSearchList(params)
    if (result.code == 200) {
      commit('POSRSEARCHLIST', result.data)
    }
  }
}
//   理解为计算属性，用于简化仓库数据，让组件的获取仓库的数据更加方便
const getters = {
  // 在返回数据的时候可能会出现数据为undefined的情况，所以出现这种情况就返回空的数组
  goodsList(state) {
    return state.SearchList.goodsList || []
  },
  attrsList(state) {
    return state.SearchList.attrsList || []
  },
  trademarkList(state) {
    return state.SearchList.trademarkList || []
  }
}
// 对外暴露Store的一个实例
export default {
  state,
  mutations,
  actions,
  getters
}
