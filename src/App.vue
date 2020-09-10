<template>
  <div id="container">
    <van-tabbar :modelValue="active" route @change="handleChange">
      <van-tabbar-item icon="clock-o" to="/" name="todo">待办</van-tabbar-item>
      <van-tabbar-item icon="filter-o" to="timeline" name="timeline">时间轴</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import {Tabbar, TabbarItem} from "vant";
import {ref} from "vue";

export default {
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const active = ref("todo");
    const handleChange = (value: string) => {
      active.value = value;
      console.log("---data", value);
      console.log(active);
    };
    return {
      active,
      handleChange
    };
  }
};
</script>
