import { createStore } from 'vuex'
import createPersistedstate  from 'vuex-persistedstate'


import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

  // 创建vuex仓库并导出
export default createStore({
  // 数据
  state: {
    name: 'zhangsan'
  },
  // vuex的计算属性
  getters: {
  },
  // 改数据函数
  mutations: {
  },
  // 请求数据函数
  actions: {
  },
  // 分模块
  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [
    // 默认存储在 localStorage
    createPersistedstate({
      // 本地存储名字
      key: 'eribbit-client',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
