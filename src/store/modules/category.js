// 存储的分类数据
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

// 分类模块
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({name: item}))
    }
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    // 修改当前一级分类下的open数据为true
    show (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    // 修改当前一级分类下的open数据为false
    hide (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  actions: {
    async getList({ commit }) {
      const { result } = await findAllCategory()
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      result.forEach(item => {       
        item.open = false
      })
      commit('setList', result)
    }
  }
}