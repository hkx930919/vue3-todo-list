<template>
  <van-row class="header">
    <van-col span="12">{{ title }}</van-col>
    <van-col span="3" offset="6">
      <van-icon name="plus" size="16" />
    </van-col>
    <van-col span="3">
      <van-icon name="filter-o" size="16" />
    </van-col>
  </van-row>
</template>

<script>
import {Col, Row, Icon} from "vant";

export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: String,
      default: "待办"
    },
    onAdd: Function
  },
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/index";
.header {
  color: @theme-dark;
  font-size: 16px;
  padding: 12px 8px;
  background: @theme-grey;
}
</style>
>
