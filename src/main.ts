import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeLocale } from "./composables/useLocale";
import { initializeTheme } from "./composables/useTheme";
import "./styles.css";

initializeLocale();
initializeTheme();

createApp(App).use(router).mount("#app");
