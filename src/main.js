import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"
import Vuex from "vuex";
import store from "@/store";
import router from "@/router";
import VueTailwind from 'vue-tailwind';
Vue.use(VueTailwind)
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
