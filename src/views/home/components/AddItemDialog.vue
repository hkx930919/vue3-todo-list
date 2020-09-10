<template>
  <van-dialog :show="visible" @confirm="handleConfirm" @cancel="onCancel" v-bind="$attrs" :before-close="clearData">
    <van-form ref="formRef">
      <van-field class="mb-1" v-model="data.value" placeholder="输入待办事项" :rules="[{required: true}]" />
      <van-field
        v-model="data.duration"
        placeholder="请输入时长，分钟"
        label="时长"
        type="number"
        :rules="[{required: true}]"
      />
      <div class="text-center m-2">
        <van-tag
          v-for="(item, index) in data.durations"
          :key="item"
          class="duration-tag"
          :color="getColor(index)"
          @click="handleClickTag(item)"
        >
          {{ item }}分钟
        </van-tag>
      </div>
    </van-form>
  </van-dialog>
</template>

<script lang="ts">
import {Dialog, Field, Tag, Form} from "vant";
import {reactive, ref} from "vue";
import {useColor} from "@/utils";

interface Data {
  value: string;
  duration?: number;
}
const DURATION_LABELS = [15, 30, 45, 60];
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
    [Tag.name]: Tag,
    [Form.name]: Form
  },
  props: {
    visible: Boolean,
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: Function
  },
  setup(props) {
    const data: Data = reactive({
      value: "",
      duration: undefined,
      durations: DURATION_LABELS
    });
    const formRef: any = ref(null);
    const {getColor} = useColor();
    const handleClickTag = (duration: number) => {
      data.duration = duration;
    };
    const handleConfirm = async () => {
      if (formRef?.value?.validate) {
        formRef.value.validate().then(() => {
          props.onConfirm({duration: data.duration, name: data.value});
        });
      }
    };
    const clearData = () => {
      setTimeout(() => {
        data.value = "";
        data.duration = undefined;
      }, 0);
    };
    return {
      data,
      getColor,
      handleClickTag,
      handleConfirm,
      formRef,
      clearData
    };
  }
};
</script>

<style lang="less" scoped>
.duration-tag {
  margin-left: 10px;
  &:first-of-type {
    margin-left: 0;
  }
}
</style>
