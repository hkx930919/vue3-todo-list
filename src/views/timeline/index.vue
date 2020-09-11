<template>
  <div class="timeline page-container">
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{height: '380px'}"
      row-height="48px"
      :min-date="data.MIN_DATE"
      :max-date="data.MAX_DATE"
      @select="handleSelect"
    />
    <van-steps direction="vertical">
      <van-step v-for="item in data.list" :key="item.id">
        <Card :data="item" />
      </van-step>
    </van-steps>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import {Calendar, Step, Steps} from "vant";
import moment from "moment";
import Card from "./components/Card.vue";

const MIN_DATE = new Date("2020/09/01");
const MAX_DATE = new Date("2022/01/01");
export default {
  components: {
    [Calendar.name]: Calendar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    Card
  },
  setup() {
    const data = reactive({
      MIN_DATE,
      MAX_DATE,
      list: [
        {
          id: 1,
          name: "测试标题",
          content: `fasf房间奥斯阿发爱上了饭拉丝粉拉伸的风景奥拉夫阿里.
          faf af \r
          fasdf asfd a
          `,
          status: 1,
          duration: 19,
          startTime: "11:00",
          endTime: "11:19"
        },
        {
          id: 1,
          name: "测试标题",
          content: `fasf房间奥斯阿发爱上了饭拉丝粉拉伸的风景奥拉夫阿里.
          faf af \r
          fasdf asfd a
          `,
          status: 1,
          duration: 19,
          startTime: "11:00",
          endTime: "11:19"
        },
        {
          id: 1,
          name: "测试标题",
          content: `fasf房间奥斯阿发爱上了饭拉丝粉拉伸的风景奥拉夫阿里.
          faf af \r
          fasdf asfd a
          `,
          status: 1,
          duration: 19,
          startTime: "11:00",
          endTime: "11:19"
        }
      ]
    });
    const handleSelect = (date: Date) => {
      console.log("---", date, moment(date).format("YYYY-MM-DD"));
    };
    return {
      data,
      handleSelect
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/index";
.home {
  height: 100%;
  background: #f0f0f0;
}
</style>
