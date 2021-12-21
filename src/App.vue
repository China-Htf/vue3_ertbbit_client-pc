<template>
  <div>
    App
    {{$store.state.user.profile.account}}
    <button @click="setDate">修改</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const setDate = () => {
  store.commit('user/setDate', {account: 'zhangsan'})
}
</script>

<style lang="less" scoped>

</style>