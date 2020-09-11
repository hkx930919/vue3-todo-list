<template>
  <div>
    <template v-if="list.length">
      <TodoItem
        v-for="item in list"
        :data="item"
        :key="item.name"
        @change="handleChange($event,item)"
      />
    </template>
    <van-empty
      v-else
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无待办事项，请添加待办"
    ></van-empty>
  </div>
</template>

<script lang="ts">
import {Empty} from "vant";
import {Todo} from "@/types";
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
  },
  setup(props: any) {
    const handleChange = (checked: boolean, item: Todo) => {
      // eslint-disable-next-line no-param-reassign
      item.status = checked ? 1 : 0;
      console.log("---item", item);
    };
    return {
      handleChange
    };
  }
};
</script>

<style lang="less" scoped></style>
