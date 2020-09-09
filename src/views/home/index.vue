<template>
  <div>
    <Header />
    <List />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  components: {
    Header,
    List
  },
  setup() {
    return {};
  }
};
</script>

<style></style>
