import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import AppLayout from "./views/layout/AppLayout.vue";
import AuthLayout from "./views/layout/AuthLayout.vue";

Vue.config.productionTip = false;

Vue.component("app-layout",AppLayout);
Vue.component("auth-layout",AuthLayout);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
