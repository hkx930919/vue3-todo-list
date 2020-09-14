/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:40:40
 * @modify date 2020-09-14 08:40:40
 * @desc [description]
 */
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
