<template>
  <div>
    <Header />
    <List :list="data.list" />
  </div>
</template>

<script>
import {reactive} from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  components: {
    Header,
    List
  },
  setup() {
    const data = reactive({
      list: [{name: "test", duration: "20"}]
    });
    return {data};
  }
};
</script>

<style></style>
