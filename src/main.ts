/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:41:14
 * @modify date 2020-09-14 08:41:14
 * @desc [description]
 */
import {createApp} from "vue";
import "lib-flexible";
import "reset-css";
import "@/styles/index.less";
import routes from "@/routes";
import App from "./App.vue";

const app = createApp(App);
app.use(routes);
app.mount("#app");
