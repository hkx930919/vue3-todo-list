<template>
  <div class="todo-item">
    <div class="left">
      <p class="title">{{data.name}}</p>
      <p class="duration">{{data.duration}}分钟</p>
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
@import "../../../styles/index";
.todo-item {
  margin: 12px;
  padding: 12px;
  border: 1px solid @border-color;
  border-radius: 4px;
  display: flex;
  align-items: center;
  p {
    line-height: 20px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 0 0 100px;
    font-size: 18px;
  }
}
</style>