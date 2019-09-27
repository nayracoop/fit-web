import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './views/Main.vue'
import VueRouter from 'vue-router'

import { i18n } from './plugins/i18n'
import { routes } from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faSearchPlus, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faPlus, faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faCheckSquare, faSquare, faSearchPlus, faArrowUp, faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  routes,
  i18n
})
