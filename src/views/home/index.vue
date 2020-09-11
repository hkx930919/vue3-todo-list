<template>
  <div class="home page-container">
    <Header :onAdd="handleAdd" />
    <List :list="data.list" />
    <AddItemDialog
      :visible="dialogData.visible.value"
      :onConfirm="handleConfirm"
      :onCancel="closeDialog"
      showCancelButton
    />
  </div>
</template>

<script lang="ts">
import {reactive, Ref, ref} from "vue";
import {Dialog, Field, Tag} from "vant";
import {Todo} from "@/types";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import AddItemDialog from "./components/AddItemDialog.vue";

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
    Header,
    List,
    AddItemDialog,
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
    const handleConfirm = (item: Todo) => {
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
