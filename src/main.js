import {createApp} from "vue";
import App from "./App.vue";
import routes from "@/routes";
import "@/styles/index.less";
const app = createApp(App);
app.use(routes);
app.mount("#app");
