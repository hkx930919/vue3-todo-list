/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:41:17
 * @modify date 2020-09-14 08:41:17
 * @desc [description]
 */
declare module "*.vue" {
  import {defineComponent} from "vue";

  const component: ReturnType<typeof defineComponent>;
  export default component;
}
