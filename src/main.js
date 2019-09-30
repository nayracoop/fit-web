import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faSearchPlus, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { i18n } from './plugins/i18n'
import { routes } from './routes'

library.add([faPlus, faAddressCard, faMapMarkerAlt, faEnvelope, faMobileAlt, faCheckSquare, faSquare, faSearchPlus, faArrowUp, faInstagram, faFacebookSquare, faSpotify, faTwitter, faLinkedin, faGithub])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // if (savedPosition) return savedPosition
    // if (to.hash) return { selector: to.hash }
    // return { x: 0, y: 0 }
    return false
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
})
