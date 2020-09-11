<template>
  <div id="container">
    <van-tabbar :modelValue="data.active" route @change="handleChange" v-if="!!route.meta.showBar">
      <van-tabbar-item icon="clock-o" to="/" name="todo">待办</van-tabbar-item>
      <van-tabbar-item icon="filter-o" to="timeline" name="timeline">时间轴</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import {Tabbar, TabbarItem} from "vant";
import {reactive} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "App",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const data = reactive({
      active: "todo"
    });
    const handleChange = (value: string) => {
      data.active = value;
    };
    const route = useRoute();

    return {
      handleChange,
      data,
      route
    };
  }
};
</script>
