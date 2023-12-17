import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VWave from "v-wave";
import Particles from "vue3-particles";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import {
  AiCourseraSquare,
  CoBitcoin,
  MdDatasaveroff,
  HiSolidHome,
} from "oh-vue-icons/icons";
import ApexCharts from "apexcharts";
import "aos/dist/aos.css";

addIcons(AiCourseraSquare, CoBitcoin, MdDatasaveroff, HiSolidHome);

const app = createApp(App);
app.config.globalProperties.$apexcharts = ApexCharts;
app.component("v-icon", OhVueIcon);
app.use(ToastPlugin, {
  position: "top",
});
app.use(router);
app.use(Particles);
app.use(VWave);
app.mount("#app");
