// vuex模块
import vuex from 'vuex'
// 引入home仓库
import home from './home.js'
// 引入search仓库
import search from './search.js'
// 引入detail仓库
import detail from './detail.js'
//引入cart仓库
import cart from './cart.js'
// 引入register和login的仓库
import user from './user.js'
// 对外暴露Store的一个实例
export default new vuex.Store({
  // 大仓库
  modules: {
    home,
    search,
    detail,
    cart,
    user
  }
})
