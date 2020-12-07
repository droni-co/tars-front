import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from "./store/store";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

Vue.config.productionTip = false

window.vuetify = vuetify
new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
