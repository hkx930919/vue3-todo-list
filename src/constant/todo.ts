import {TodoItemStatus} from "@/types";

export const TODO_STATUS_MAP = {
  [TodoItemStatus.reject]: "中途放弃",
  [TodoItemStatus.doing]: "进行中",
  [TodoItemStatus.completed]: "已完成"
};
export const TODO_STATUS_COLOR = {
  [TodoItemStatus.reject]: "#ee0a24",
  [TodoItemStatus.doing]: "#34495e",
  [TodoItemStatus.completed]: "#07c160"
};
