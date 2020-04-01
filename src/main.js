import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import './assets/css/main.css'
import DashboardBase from './component/DashboardBase'
import InfoEdit from './component/InfoEdit'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.component('dashboard-base', DashboardBase)
Vue.component('info-edit', InfoEdit)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
