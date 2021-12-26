import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views')
const Home = () => import('@/views/home')
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
// 路由规则
const routes = [
  // 一级路由容器
  { path: '/', 
  component: Layout,
  children: [
    { path: '/', component: Home},
    { path: '/category/:id', component: TopCategory },
    { path: '/category/sub/:id', component: SubCategory }
  ]  
}
]

// 创建路由实例
const router = createRouter({
  // 使用 hash 路由模式
  history: createWebHashHistory(),
  routes
})

export default router
