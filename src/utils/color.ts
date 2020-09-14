/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:40:54
 * @modify date 2020-09-14 08:40:54
 * @desc [description]
 */
import {ref} from "vue";
import {COLORS} from "@/constant";

/**
 * @func 将COLORS列表随机排序
 */
// eslint-disable-next-line import/prefer-default-export
export const getColorList = () => {
  return COLORS.sort(() => {
    return Math.random() > 0.5 ? 1 : 0;
  });
};

export const getColor = (colors: string[]) => {
  return (index: number) => {
    let color = colors[index];
    if (!color) {
      const {length} = colors;
      const newIndex = index % length;
      color = colors[newIndex];
    }
    return color;
  };
};
export const useColor = () => {
  const colorsRef = ref(getColorList());
  return {
    colors: colorsRef,
    getColor: getColor(colorsRef.value)
  };
};
