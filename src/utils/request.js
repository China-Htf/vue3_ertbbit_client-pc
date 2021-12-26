/**
 * 1. 创建一个新的 axios 实例
 * 2. 请求拦截器， 若有 token 进行头部携带
 * 3. 响应拦截器： 1. 剥离无效数据 2. 处理 token 失效
 * 4. 导出一个函数，调用当前 axios 发送实例，返回值 promise
 */

import axios from 'axios'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_TIME_OUT
})

//  请求拦截器
instance.interceptors.request.use(config => {
  /**
   * 拦截业务逻辑
   * 进行请求配置的修改
   * 本地拥有 token 就携带
   */

  // 1. 获取用户信息对象
  const { profile } = store.state.user
  // 2. 判断是否有 token
  if(profile.token) {
    // 3. 设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  // 401错误码 进入该函数
  if(err.response && err.response.status === 401) {
    /**
     * 1. 清空无效用户信息
     * 2. 跳转到登录页
     * 3. 跳转需要传参（当前路由地址）给登陆页面
     */
    store.commit('user/setUser', {})
    // encodeURIComponent 转换uri编码，防止解析地址出问题
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址、请求方式、提交数据
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
