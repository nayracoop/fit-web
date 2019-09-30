<template>
  <header class="fixed-top">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#top-section">
              <h1>
                <b class="sr-only"><abbr title="Flujo Intercooperativo de trabajo">FIT</abbr> - Flujo Intercooperativo de Trabajo</b>
                <img src="../assets/img/logo.svg" alt="FIT logo" class="fit-logo" />
              </h1>
            </b-navbar-brand>

            <b-navbar-toggle id="navbar-toggle" target="nav-collapse"></b-navbar-toggle>
            <label class="sr-only" for="navbar-toggle">{{ $t('Open menu') }}</label>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#about" :class="{ active: highlight === 'about' }">{{ $t('About FIT') }}</b-nav-item>
                <b-nav-item href="#services" :class="{ active: highlight === 'services' }">{{ $t('Services') }}</b-nav-item>
                <b-nav-item href="#technologies" :class="{ active: highlight === 'technologies' }">{{ $t('Technologies') }}</b-nav-item>
                <b-nav-item href="#case-studies" :class="{ active: highlight === 'case-studies' }">{{ $t('Case studies') }}</b-nav-item>
                <b-nav-item href="#contact" :class="{ active: highlight === 'contact'}" class="cta-item">{{ $t('Contact us') }}</b-nav-item>
                <b-nav-item-dropdown class="lang-selector" :text="$i18n.locale" right>
                  <b-dropdown-item
                  href="#"
                  @click.prevent="setLocale(lang)"
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :class="{ 'sr-only': (lang === $i18n.locale) }"
                  :value="lang" >{{ lang }}
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
            
          </b-navbar>
    </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  props: {
    highlight: ''
  },
  data () {
    return { langs: ['es', 'en'] }
  },
  methods: {
    setLocale (lang) {
      if (lang === 'es') {
        this.$router.push({ name: 'main' })
        this.$i18n.locale = lang
      } else this.$router.push({ name: 'locale', params: { lang } })
    }
  }
}
</script>
