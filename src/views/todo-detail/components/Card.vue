<template>
  <div class="card">
    <div class="card-top">
      <div class="card-left">
        <p class="card-title">
          {{ data.name }}
          <span>{{ data.startTime }}-{{ data.endTime }}</span>
        </p>
        <p class="card-content">{{ data.content }}</p>
      </div>
      <span
        class="card-right"
        :style="{color: status.TODO_STATUS_COLOR[data.status] || '#fff'}"
      >{{ status.TODO_STATUS_MAP[data.status] }}</span>
    </div>
    <p class="card-bottom">
      <span>{{ data.duration }}分钟</span>
    </p>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import {TODO_STATUS_MAP, TODO_STATUS_COLOR} from "@/constant";

export default {
  props: {
    data: Object
  },
  setup() {
    const status = reactive({
      TODO_STATUS_MAP,
      TODO_STATUS_COLOR
    });
    return {
      status
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/index";
.card {
  color: #efefef;
  font-size: 12px;
  width: 300px;
  background: @theme-dark;
  padding: 8px 12px;
  border-radius: 4px;
  line-height: 16px;
  .card-top {
    display: flex;
  }
  &-left {
    flex: 1;
  }
  &-right {
    opacity: 0.7;

    margin-left: 8px;
    flex: 0 0 50px;
  }
  &-title {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 12px;
    span {
      font-weight: normal;
      font-size: 12px;
      color: #ccc;
    }
  }
  &-content {
    margin-bottom: 12px;
    white-space: pre-wrap;
    color: #ccc;
  }
  &-bottom {
    font-weight: 600;
  }
}
</style>
