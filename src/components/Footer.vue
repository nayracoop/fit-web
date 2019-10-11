<template>
  <footer class="text-center bg-grey">
    <b-container>
      <b-row>
        <b-col>
          <img
            src="static/img/logo.svg"
            alt="logo FIT"
            class="fit-logo mb-5"
          >
          <nav class="mb-5">
            <b-navbar-nav class="m-auto">
              <b-nav-item href="#about">
                {{ $t('About FIT') }}
              </b-nav-item>
              <b-nav-item href="#services">
                {{ $t('Services') }}
              </b-nav-item>
              <b-nav-item href="#technologies">
                {{ $t('Technologies') }}
              </b-nav-item>
              <b-nav-item href="#case-studies">
                {{ $t('Case studies') }}
              </b-nav-item>
              <b-nav-item href="#contact">
                {{ $t('Contact us') }}
              </b-nav-item>
            </b-navbar-nav>
          </nav>
          <ul class="social-links mb-5">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/facttic/"
                title="Facebook"
              ><font-awesome-icon :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/facttic.ar/"
                title="Instagram"
              ><font-awesome-icon :icon="['fab', 'instagram']" /><span class="sr-only">Instagram</span></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/facttic"
                title="Twitter"
              ><font-awesome-icon :icon="['fab', 'twitter']" /><span class="sr-only">Twitter</span></a>
            </li>
          </ul>
          <small class="mb-5 made-with" v-html="$t('footer.signature')"></small>

          <div class="licence-cont">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
            >
              <img
                class="mb-2"
                alt="Licencia Creative Commons"
                src="static/img/licence.png"
              >
            </a>
            <small class="licence">{{ $t('footer.licence') }} <a href="http://creativecommons.org/licenses/by-sa/4.0/">{{ $t('footer.licenceLinkTitle') }}</a>.</small>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {}
</script>
