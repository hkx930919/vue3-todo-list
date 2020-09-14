
<template>
  <div class="calendar">
    <div class="calendar-header">
      <div class="action-bar">
        <span class="icon-wrap">
          <van-icon
            class-prefix="icon"
            name="arrow-right"
            class="left-icon ml-1"
            @click="handlePreMonth"
          />
          <van-icon
            class-prefix="icon"
            name="arrow-double-left"
            class="ml-1"
            @click="handlePreYear"
          />
        </span>
        <span class="year-month">
          {{dateData.year}}年
          {{dateData.month+1}}月
        </span>
        <span class="icon-wrap">
          <van-icon
            class-prefix="icon"
            name="arrow-double-right"
            class="mr-1"
            @click="handleNextYear"
          />
          <van-icon class-prefix="icon" name="arrow-right" class="mr-1" @click="handleNextMonth" />
        </span>
      </div>
      <div class="row">
        <span class="cell" v-for="day in weekDays" :key="day">{{day}}</span>
      </div>
    </div>

    <div class="calendar-body">
      <div
        class="calendat-wrap"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div class="pre-calendar">
          <div class="row" v-for="(cells,index) in daysData.preDays" :key="index">
            <span
              :class="{cell:true,'minor-text':item.month!=dateData.month,active:`${item.date}`===`${dateData.date}`}"
              v-for="item in cells"
              :key="item.month+item.day"
              @click="handleSelect(item)"
            >{{item.day}}</span>
          </div>
        </div>
        <div class="cur-calendar">
          <div class="row cur-calendar" v-for="(cells,index) in daysData.curDays" :key="index">
            <span
              :class="{cell:true,'minor-text':item.month!=dateData.month,active:`${item.date}`===`${dateData.date}`}"
              v-for="item in cells"
              :key="item.month+item.day"
              @click="handleSelect(item)"
            >{{item.day}}</span>
          </div>
        </div>
        <div class="next-calendar">
          <div class="row next-calendar" v-for="(cells,index) in daysData.nextDays" :key="index">
            <span
              :class="{cell:true,'minor-text':item.month!=dateData.month,active:`${item.date}`===`${dateData.date}`}"
              v-for="item in cells"
              :key="item.month+item.day"
              @click="handleSelect(item)"
            >{{item.day}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar-footer"></div>
  </div>
</template>

<script lang="ts">
/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:39:27
 * @modify date 2020-09-14 08:39:27
 * @desc [description]
 */
import moment from "moment";
import {Icon} from "vant";
import {computed, reactive, SetupContext, toRefs} from "vue";
import {getDays} from "./util";

const weekDays = ["日", "一", "三", "四", "五", "六"];
interface Data {
  days: number[];
}
const useTouch = (options: {
  onStart: (e: TouchEvent) => unknown;
  onMove: (e: TouchEvent) => unknown;
  onEnd: (e: TouchEvent) => unknown;
}) => {
  const {onStart, onMove, onEnd} = options;
  const touchP = reactive({
    x: 0,
    y: 0
  });
  const setTouchP = (position: {x: number; y: number}) => {
    touchP.x = position.x;
    touchP.y = position.y;
  };
  const handleTouchStart = (e: TouchEvent) => {
    const [touch] = e.changedTouches;
    setTouchP({x: touch.pageX, y: touch.pageY});
    onStart(e);
  };
  const handleTouchMove = (e: TouchEvent) => {
    const [touch] = e.changedTouches;
    setTouchP({x: touch.pageX, y: touch.pageY});
    onMove(e);
  };
  const handleTouchEnd = (e: TouchEvent) => {
    const [touch] = e.changedTouches;
    setTouchP({x: touch.pageX, y: touch.pageY});
    onEnd(e);
  };
  return {
    ...toRefs(touchP),
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};
export default {
  components: {
    [Icon.name]: Icon
  },
  props: {
    value: [String, Date, Number]
  },
  setup(props: any, {emit}: SetupContext) {
    /**
     * 存储的天数
     */
    const daysData = computed(() => {
      const curDays = getDays(props.value);
      const preDays = getDays(
        moment(props.value)
          .subtract(1, "month")
          .format("YYYY-MM-DD")
      );
      const nextDays = getDays(
        moment(props.value)
          .add(1, "month")
          .format("YYYY-MM-DD")
      );
      return {
        preDays,
        curDays,
        nextDays
      };
    });
    const dateData = computed(() => {
      const momentDate = moment(props.value);
      const day = momentDate.date();
      const month = momentDate.month();
      const year = momentDate.year();
      const date = momentDate.format("YYYY-MM-DD");
      return {
        day,
        month,
        year,
        date
      };
    });

    const handleNextMonth = () => {
      const date = moment(props.value).add(1, "month");
      emit("update:value", date.format("YYYY-MM-DD"));
      emit("changeMonth", date.format("YYYY-MM"));
    };
    const handlePreMonth = () => {
      const date = moment(props.value).subtract(1, "month");
      emit("update:value", date);
      emit("update:value", date.format("YYYY-MM-DD"));
      emit("changeMonth", date.format("YYYY-MM"));
    };
    const handleNextYear = () => {
      const date = moment(props.value).add(1, "year");
      emit("update:value", date.format("YYYY-MM-DD"));
      emit("changeMonth", date.format("YYYY"));
    };
    const handlePreYear = () => {
      const date = moment(props.value).subtract(1, "year");
      emit("update:value", date);
      emit("update:value", date.format("YYYY-MM-DD"));
      emit("changeMonth", date.format("YYYY"));
    };
    const handleSelect = (item: {year: number; month: number; day: number}) => {
      const {year, month, day} = item;
      const date = `${year}-${month + 1}-${day}`;
      emit("select", item);
      emit("update:value", date);
      console.log(item);
    };
    const onStart = (e: TouchEvent) => {
      console.log("---handleTouchStart", e);
    };
    const onMove = (e: TouchEvent) => {
      // console.log("---handleTouchMove", e);
    };
    const onEnd = (e: TouchEvent) => {
      console.log("---handleTouchEnd", e);
    };
    const touchData = useTouch({onStart, onEnd, onMove});
    return {
      dateData,
      weekDays,
      daysData,
      handleNextMonth,
      handlePreMonth,
      handleNextYear,
      handlePreYear,
      handleSelect,
      ...touchData
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/index";
.action-bar {
  line-height: 40px;
  display: flex;
  margin-bottom: 16px;
  .icon-wrap {
    flex: 0 0 40px;
  }
  .year-month {
    font-size: 16px;
    flex: 1;
    text-align: center;
  }
}
.left-icon {
  display: inline-block;
  transform: rotate(180deg);
}
.row {
  height: 40px;
  padding: 0 8px;
  display: flex;
  .cell {
    line-height: 40px;
    flex: 1;
    text-align: center;
    &.active {
      border-radius: 4px;
      background-color: @theme-dark;
      color: #fff;
    }
  }
}
.minor-text {
  color: #c0c4cc;
}
.calendar-body {
  overflow: hidden;
  position: relative;
  height: 240px;
  .calendat-wrap {
    position: absolute;
    left: -100vw;
    width: 300%;
    height: 240px;
    .pre-calendar,
    .cur-calendar,
    .next-calendar {
      float: left;
      width: 100vw;
    }
  }
}
</style>