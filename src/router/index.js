import Vue from 'vue'
import Router from 'vue-router'
import i18n from 'i18n'

import Home from 'pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Home,
    beforeEnter (to, from, next) {
      document.documentElement.setAttribute('lang', 'es')
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
        import(`../translations/${locale}.json`).then(msgs => {
          i18n.setLocaleMessage(locale, msgs)
          i18n.locale = locale
          document.documentElement.setAttribute('lang', locale)
          // document.title = `Nayra - ${i18n.t('Digital development Cooperative', locale)}`
          return next()
        })
      } else return next()
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return false
  }
})
