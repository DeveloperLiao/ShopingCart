// 存储token
export const saveToken = token => {
  localStorage.setItem('TOKEN', token)
}
// 获取token
export const getToken = () => {
  return localStorage.getItem('TOKEN')
}
// 移除token
export const removeToken = () => {
  localStorage.removeItem('TOKEN')
}
