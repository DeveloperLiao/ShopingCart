// 统一api管理器
import request from './ajax.js'
export const getBaseCategoryList = () => request({ url: '/api/product/getBaseCategoryList', method: 'get' })
// 模拟数据请求
export const getBannerList = () => request({ url: '/mock/banner.json', method: 'get' })
export const getFloorList = () => request({ url: '/mock/floor.json', method: 'get' })
// 获取searchlist的数据
export const postSearchList = params => request({ url: '/api/list', method: 'post', data: params })
//获取detail的数据
export const getDetailList = skuid => request({ url: `/api/item/${skuid}`, method: 'get' })
// 购物车的数据存入服务器
export const postCartData = (skuId, skuNum) => request({ url: `/api/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
// 获取购物车的数据
export const getCartData = () => request({ url: 'api/cart/cartList', method: 'get' })
// 删除购物车的数据
export const delCartData = skuid => request({ url: `api/cart/deleteCart/${skuid}`, method: 'delete' })
// 切换购物车中商品选中的状态
export const switchChecked = (skuid, isChecked) => request({ url: `api/cart/checkCart/${skuid}/${isChecked}`, method: 'get' })
// 获取验证码
export const sendCode = phoneNum => request({ url: `api/user/passport/sendCode/${phoneNum}`, method: 'get' })
// 注册用户
export const registerUser = data => request({ url: 'api/user/passport/register', data, method: 'post' })
// 登录
export const loginUser = data => request({ url: 'api/user/passport/login', data, method: 'post' })
// 获取用户信息，携带token
export const getUserInfo = () => request({ url: 'api/user/passport/auth/getUserInfo', method: 'get' })
// 退出登录
export const loginOut = () => request({ url: 'api/user/passport/logout', method: 'get' })
// 获取用户地址信息
export const getUserAddress = () => request({ url: 'api/user/userAddress/auth/findUserAddressList', method: 'get' })
// 获取交易页的信息
export const getTradeList = () => request({ url: 'api/order/auth/trade', method: 'get' })
