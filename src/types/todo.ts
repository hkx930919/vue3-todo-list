/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-11 09:59:16
 * @modify date 2020-09-11 09:59:16
 * @desc 待办类型
 */
// 待办事项
export interface Todo {
  // 待办名称
  name: string;
  // 时长
  duration: number;
  // 待办事项状态：-1：中途放弃，0：进行中，1：已完成
  status: TodoItemStatus;
}
// 每一次待办执行的item
export interface TodoItem extends Todo {
  id: number;
  content: string;
  status: TodoItemStatus;
  startTime: string; // 开始时间
  endTime: string;
}
export enum TodoItemStatus {
  reject = -1, // 未完成，中途放弃
  doing, // 进行中
  completed // 完成
}
