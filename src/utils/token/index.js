// 存储token
export const saveToken = token => {
  localStorage.setItem('token', token)
}
// 获取token
export const getToken = () => {
  return localStorage.getItem('token')
}
