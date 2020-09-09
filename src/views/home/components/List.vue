<template>
  <div>
    <template v-if="list.length">
      <TodoItem v-for="item in list" :data="item" :key="item.name" />
    </template>
    <van-empty
      v-else
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无待办事项，请添加待办"
    ></van-empty>
  </div>
</template>

<script>
import {Empty} from "vant";
import TodoItem from "./Item.vue";

export default {
  components: {
    [Empty.name]: Empty,
    TodoItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>


<style lang="less" scoped>
</style>