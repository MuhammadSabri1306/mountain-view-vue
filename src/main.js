import { createApp } from "vue";
import router from "@/router";
import VueFeather from "vue-feather";
import "@/style.css";
import App from "@/App.vue";

createApp(App)
    .use(router)
    .component(VueFeather.name, VueFeather)
    .mount("#app");
