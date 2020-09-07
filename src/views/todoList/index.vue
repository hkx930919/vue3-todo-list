<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="plus">{{ data.count }}</button>
  </div>
</template>

<script>
import {reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
import {useRouter, useRoute} from "vue-router";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(props, args) {
    const router = useRouter();
    const route = useRoute();
    console.log("---router", router);
    console.log("---route", route, route.params);
    const data = reactive({count: 1});
    onBeforeMount(() => {
      console.log("--onBeforeMount", this);
    });
    onMounted(() => {
      console.log("--onMounted", this);
    });
    onBeforeUpdate(() => {
      console.log("--onBeforeUpdate", this);
    });
    onUpdated(() => {
      console.log("--onUpdated", this);
    });
    onBeforeUnmount(() => {
      console.log("--onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("--onUnmounted");
    });
    const plus = () => {
      data.count++;
    };
    console.log("---this", this, props, args);
    return {
      data,
      plus
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
