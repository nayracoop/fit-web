<template>
  <header class="fixed-top">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <h1>
          <b class="sr-only">Fit - Flujo Intercooperativo de Trabajo</b>
          <img src="../assets/img/logo.svg" alt="FACTTIC" height="60" />
        </h1>
      </b-navbar-brand>

      <b-navbar-toggle id="navbar-toggle" target="nav-collapse"></b-navbar-toggle>
      <label class="sr-only" for="navbar-toggle">{{ $t('Open menu') }}</label>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#about">{{ $t('About FIT') }}</b-nav-item>
          <b-nav-item href="#services">{{ $t('Services') }}</b-nav-item>
          <b-nav-item href="#technologies">{{ $t('Technologies') }}</b-nav-item>
          <b-nav-item href="#case-studies">{{ $t('Case studies') }}</b-nav-item>
          <b-nav-item href="#contact">{{ $t('Contact us') }}</b-nav-item>
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
  </header>
</template>

<script>
export default {
  data () {
    return { langs: ['es', 'en'] }
  },
  methods: {
    setLocale (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
