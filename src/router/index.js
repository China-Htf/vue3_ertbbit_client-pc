import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// 创建路由实例
const router = createRouter({
  // 使用 hash 路由模式
  history: createWebHashHistory(),
  routes
})

export default router
