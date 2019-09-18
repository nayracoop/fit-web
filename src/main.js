import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './views/Main.vue'
import VueRouter from 'vue-router'

import { i18n } from './plugins/i18n'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  routes,
  i18n,
})
