import Vue from "vue";

// import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import App from "./App.vue";

import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";
import locale from './assets/locale/cn.js'
import '@/assets/scss/main.scss' // global css
import dayjs from "dayjs";

Vue.prototype.$day = dayjs;
//highchart stock do not take away
import HC_exporting from "highcharts/highcharts-more";
HC_exporting(Highchart);

Vue.use(VueAxios, axios)
Vue.use(Highchart);
Vue.use(HighchartsVue)


Vue.use(ElementUI, {
  locale
})
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

// set SVG sprite loader
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("@/assets/icon", true, /\.svg$/)
requireAll(req)

import SvgIcon from "@/components/SvgIcon"
Vue.component("icon", SvgIcon)


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");