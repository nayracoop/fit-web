<template>
  <section id="about">
    <b-container>
      <b-row class="about-info">
        <b-col class="col-12 col-md-6 mb-5">
          <h2 class="pb-2">
            {{ $t('about.title') }}
          </h2>
          <p v-html="$t('about.content[0]')"></p>
          <p v-html="$t('about.content[1]')"></p>
          <p>{{ $t('about.content[2]') }}</p>
          <p>{{ $t('about.content[3]') }}</p>
        </b-col>
      </b-row>
      <b-row class="cooperative-work">
        <b-col class="col-12 col-md-6">
          <h2 class="pb-2">
            {{ $t('cooperativeWork.title') }}
          </h2>
          <p>{{ $t('cooperativeWork.content') }}</p>
        </b-col>
        <b-col class="col-12">
          <methodology-chart class="mt-4" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

import MethodologyChart from '../components/snippets/MethodologyChart'

export default {
  components: {
    MethodologyChart
  }
}
</script>
