<template>
  <div class="todo-item">
    <div class="left">
      <p>{{data.name}}</p>
      <p>{{data.duration}}分钟</p>
    </div>
    <span class="right">开始</span>
  </div>
</template>

<script>
import {TodoItem} from "@/types";

export default {
  props: {
    data: TodoItem
  }
};
</script>

<style  lang="less" scoped>
.todo-item {
  display: flex;
  .left {
    flex: 1;
  }
  .right {
    flex: 0 0 100px;
  }
}
</style>