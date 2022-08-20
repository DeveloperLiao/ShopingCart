import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router.js'
const router = new createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  }
})
export default router
