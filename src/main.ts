import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/scss/all.scss";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
