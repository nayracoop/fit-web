import Main from './views/Main.vue'
import { i18n } from './plugins/i18n'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    beforeEnter (to, from, next) {
      document.documentElement.setAttribute('lang', 'es')
      // document.title = `Nayra - ${i18n.t('Digital development Cooperative', 'es')}`
      return next()
    }
  },
  {
    path: '/:lang',
    name: 'locale',
    component: Main,
    beforeEnter (to, from, next) {
      const locale = (![ 'en', 'es' ].includes(to.params.lang)) ? 'es' : to.params.lang
      if (i18n.locale !== locale) {
        // import(`./translations/${locale}.json`).then(msgs => {
        //   i18n.setLocaleMessage(locale, msgs)
          i18n.locale = locale
          document.documentElement.setAttribute('lang', locale)
          // document.title = `Nayra - ${i18n.t('Digital development Cooperative', locale)}`
          return next()
        // })
      } else return next()
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
