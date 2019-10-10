import Vue from 'vue'
import Router from 'vue-router'
import i18n from '../plugins/i18n'

import Home from 'pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Home,
    beforeEnter (to, from, next) {
      document.documentElement.setAttribute('lang', 'es')
      i18n.locale = 'es'
      return next()
    }
  },
  {
    path: '/:lang',
    name: 'locale',
    component: Home,
    beforeEnter (to, from, next) {
      const locale = (!['en', 'es'].includes(to.params.lang)) ? 'es' : to.params.lang
      if (i18n.locale !== locale) {
        i18n.locale = locale
        document.documentElement.setAttribute('lang', locale)
      }
      return next()
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new Router({
  mode: 'history',
  base: '/fit/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return false
  }
})
