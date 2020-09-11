<template>
  <div class="todo-detail">
    <p class="desc">测试1111</p>
    <van-circle
      class="circle"
      v-model:currentRate="data.currentRate"
      :rate="data.duration*60"
      :text="text"
      size="150"
    />
    <div class="todo-detail-footer">
      <van-icon
        :name="data.timer?'pause-circle-o': 'play-circle-o'"
        size="32"
        @click="toggleTimer"
      />
      <van-icon name="stop-circle-o" class="ml-6" size="32" />
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, computed, onMounted, onUnmounted} from "vue";
import {Circle, Icon} from "vant";
import {addZero} from "@/utils";

interface Data {
  duration: number;
  currentRate: number;
  timer: null | number;
}
export default {
  components: {
    [Circle.name]: Circle,
    [Icon.name]: Icon
  },
  setup() {
    const data: Data = reactive({
      duration: 1,
      currentRate: 0,
      timer: null
    });
    const text = computed(() => {
      const seconds = addZero(Math.ceil(data.currentRate % 60));
      const minutes = addZero(Math.floor(data.currentRate / 60));
      console.log("minutes:", minutes, "seconds", seconds, "currentRate", data.currentRate);

      return `${minutes}:${seconds}`;
    });
    const clearTimer = () => {
      if (data.timer) {
        clearInterval(data.timer);
        data.timer = null;
      }
    };
    const startTimer = () => {
      if (data.currentRate >= data.duration) {
        clearTimer();
      }
      data.timer = setInterval(() => {
        data.currentRate += 1;
      }, 1000);
      console.log("---timer", data.timer);
    };

    const toggleTimer = () => {
      if (data.timer) {
        clearTimer();
      } else {
        startTimer();
      }
    };
    onMounted(() => {
      startTimer();
    });
    onUnmounted(() => {
      clearTimer();
    });
    return {
      data,
      text,
      toggleTimer
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/index";
.todo-detail {
  text-align: center;
  position: relative;
  height: 100%;
  background: @theme-dark;
  color: #efefef;
  .desc {
    padding-top: 32px;
    font-size: 16px;
  }
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .todo-detail-footer {
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 30px;
  }
}
::v-deep .van-circle__text {
  color: #efefef;
}
</style>
