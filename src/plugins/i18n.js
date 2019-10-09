import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from '../translations/es.json'
import en from '../translations/en.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'es',
  silentTranslationWarn: true,
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})
