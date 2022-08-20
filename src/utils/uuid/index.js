// 生成临时游客ID
import { v4 as uuidv4 } from 'uuid'
export default () => {
  let uuid_token = localStorage.getItem('uuid_token')
  // 如果没有就生成一个,在本地持久化存储
  if (!uuid_token) {
    let uuid_token = uuidv4()
    localStorage.setItem('uuid_token', uuid_token)
  }
  return uuid_token
}
