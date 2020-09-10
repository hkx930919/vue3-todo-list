<template>
  <div class="timeline">timeline</div>
</template>

<script lang="ts">
import {reactive, Ref, ref} from "vue";
import {Dialog, Field, Tag} from "vant";
import {TodoItem} from "@/types";

interface DialogData {
  visible: Ref<boolean>;
  changeVisible: (visible: boolean) => unknown;
}
function useDialog(): DialogData {
  const visibleRef = ref(false);
  const changeVisible = (visible: boolean) => {
    visibleRef.value = visible;
    console.log("---changeVisible", visibleRef.value);
  };

  return {
    visible: visibleRef,
    changeVisible
  };
}
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
    [Tag.name]: Tag
  },
  setup() {
    const data = reactive({
      list: [{name: "test", duration: 20}]
    });
    const dialogData: DialogData = useDialog();
    const handleAdd = () => {
      dialogData.changeVisible(true);
    };
    const handleConfirm = (item: TodoItem) => {
      data.list.push(item);
      dialogData.changeVisible(false);
    };

    const closeDialog = () => {
      dialogData.changeVisible(false);
    };

    return {data, dialogData, handleAdd, closeDialog, handleConfirm};
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
