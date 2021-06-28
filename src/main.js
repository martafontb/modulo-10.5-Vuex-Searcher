import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss);

// import SequentialEntrance from 'vue-sequential-entrance'
// import 'vue-sequential-entrance/vue-sequential-entrance.css'

// Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
