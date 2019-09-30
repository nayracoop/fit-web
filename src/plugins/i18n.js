import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from '../translations/es.json'
import en from '../translations/en.json'


Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})
