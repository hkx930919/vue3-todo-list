import {createApp} from "vue";
import "lib-flexible";
import "reset-css";
import "@/styles/index.less";
import routes from "@/routes";
import App from "./App.vue";

const app = createApp(App);
app.use(routes);
app.mount("#app");
