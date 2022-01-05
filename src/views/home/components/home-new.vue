<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template v-slot:right><XtxMore /></template>
    <div ref="target" style="position: relative; height: 406px">
      <Transition name="fade">
        <ul v-if="goods.length" ref="pannel" class="goods-list">
          <li v-for="item in goods" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton bg="#f0f9f4" v-else />
      </Transition>
    </div>
  </HomePanel>
</template>
<script>
import { ref } from "vue";
import HomePanel from "./home-panel";
import { findNew } from "@/api/home";
import { useLazyData } from '@/hooks'
import HomeSkeleton from './home-skeleton.vue'
export default {
  name: "HomeNew",
  components: { HomePanel, HomeSkeleton },
  setup() {
    // const goods = ref([]);
    // findNew().then((data) => {
    //   goods.value = data.result;
    // });
    /**
     * 1. target 去绑定一个监听对象，最好是DOM
     * 2. 传入API函数，内部函数调取，返回的就是响应式数据
     */
    const { target, result } = useLazyData(findNew)
    return { goods: result, target };
  },
};
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>