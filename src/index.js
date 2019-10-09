import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

import i18n from './plugins/i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faSearchPlus, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faPlus, faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faCheckSquare, faSquare, faSearchPlus, faArrowUp, faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
