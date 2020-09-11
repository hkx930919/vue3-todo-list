<template>
  <div class="todo-item">
    <div class="left">
      <van-checkbox v-model:modelValue="data.status" @change="handleChange" class="todo-check" />
      <div class="todo-content">
        <p class="title">{{ data.name }}</p>
        <p class="duration">{{ data.duration }}分钟</p>
      </div>
    </div>
    <span class="right text-right">开始</span>
  </div>
</template>

<script lang="ts">
import {Checkbox} from "vant";

interface Props {
  data: {name: string; duration: number; status: number};
  onChange: (checked: boolean) => unknown;
}
export default {
  components: {
    [Checkbox.name]: Checkbox
  },
  props: {
    data: Object
  },
  setup(props: any, {emit}: any) {
    const handleChange = (checked: boolean) => {
      console.log();
      // eslint-disable-next-line no-param-reassign
      props.data.status = checked ? 1 : 0;
    };
    return {handleChange};
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/index";
.todo-item {
  margin: 12px;
  padding: 12px 24px;
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
    display: flex;
    .todo-check {
      flex: 0 0 30px;
      // margin-right: 12px;
    }
    .todo-content {
      flex: 1;
    }
  }
  .right {
    flex: 0 0 100px;
    font-size: 18px;
  }
}
</style>
