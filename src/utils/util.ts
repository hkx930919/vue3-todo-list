/**
 * @func 给0-9的正整数补零
 * @param num 正整数
 * @return 1=>01
 */
// eslint-disable-next-line import/prefer-default-export
export const addZero = (num: number) => {
  if (num >= 0 && num < 9) {
    return `0${num}`;
  }
  return `${num}`;
};
