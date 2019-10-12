<template>
  <div
    id="cover"
    class="min-vh-100 d-flex flex-column align-items-center align-content-center"
  >
    <b-container>
      <b-row class="min-vh-100 w-100">
        <b-col class="col-12 col-md-6 mt-auto cover-info">
          <h2 class="mb-4">
            {{ $t('cover.title') }}
          </h2>
          <p class="mb-4" v-html="$t('cover.content')"></p>
          <b-button href="#contact">
            {{ $t('cover.btn-text') }}
          </b-button>
        </b-col>
        <b-col class="col-12 mt-auto">
          <ul class="social-links mt-4">
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {

}
</script>
