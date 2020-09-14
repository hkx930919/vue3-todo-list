/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:41:08
 * @modify date 2020-09-14 08:41:08
 * @desc [description]
 */
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
