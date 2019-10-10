<template>
  <header class="fixed-top">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar
            toggleable="lg"
            type="dark"
          >
            <b-navbar-brand href="#cover">
              <h1>
                <b class="sr-only"><abbr title="Flujo Intercooperativo de trabajo">FIT</abbr> - Flujo Intercooperativo de Trabajo</b>
                <img
                  src="static/img/logo.svg"
                  alt="FIT logo"
                  class="fit-logo"
                >
              </h1>
            </b-navbar-brand>

            <b-navbar-toggle
              id="navbar-toggle"
              target="nav-collapse"
            />
            <label
              class="sr-only"
              for="navbar-toggle"
            >{{ $t('Open') }}</label>

            <b-collapse
              id="nav-collapse"
              is-nav
            >
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  href="#about"
                  :class="{ active: highlight === 'about' }"
                >
                  {{ $t('About FIT') }}
                </b-nav-item>
                <b-nav-item
                  href="#services"
                  :class="{ active: highlight === 'services' }"
                >
                  {{ $t('Services') }}
                </b-nav-item>
                <b-nav-item
                  href="#technologies"
                  :class="{ active: highlight === 'technologies' }"
                >
                  {{ $t('Technologies') }}
                </b-nav-item>
                <b-nav-item
                  href="#case-studies"
                  :class="{ active: highlight === 'case-studies' }"
                >
                  {{ $t('Case studies') }}
                </b-nav-item>
                <b-nav-item
                  href="#contact"
                  :class="{ active: highlight === 'contact'}"
                  class="cta-item"
                >
                  {{ $t('Contact us') }}
                </b-nav-item>

                <b-nav-item-dropdown class="lang-selector" :text="$i18n.locale" right>
                  <b-dropdown-item
                    v-for="(lang, i) in langs"
                    :to="'/' + ((lang === 'es') ? '' : lang)"
                    :key="`Lang${i}`"
                    :class="{ 'sr-only': (lang === $i18n.locale) }"
                    :value="lang"
                  >{{ lang }}</b-dropdown-item>
                </b-nav-item-dropdown>
                <social-media />
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>

import SocialMedia from 'components/snippets/SocialMedia.vue'

export default {
  components: {
    SocialMedia
  },
  props: {
    highlight: {
      type: String,
      default: ''
    }
  },
  data () {
    return { langs: ['es', 'en'] }
  }
}
</script>
