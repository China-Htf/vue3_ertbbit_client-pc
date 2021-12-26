<template>
  <div class="views">
    <!-- 顶部通栏 -->
    <app-top-nav></app-top-nav>
    <!-- 头部通栏 -->
    <AppHeader></AppHeader>
    <!-- 吸顶组件 -->
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 内容容器 -->
    <main class="app-body">
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <!-- 尾部通栏 -->
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

import AppTopNav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'

const store = useStore()
store.dispatch('category/getList')

</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>