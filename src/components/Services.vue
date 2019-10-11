<template>
  <section id="services" class="bg-grey">
    <b-container>
      <b-row>
        <b-col class="col-12 col-md-6 section-heading">
          <h2 class="pb-2">
            {{ $t('services.title') }}
          </h2>
          <p>{{ $t('services.content') }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12 col-md-6 service mb-4 mt-4">
          <design-icon class="mb-4" />
          <h3 class="mb-3">
            {{ $t('services.service[1].title') }}
          </h3>
          <ul>
            <li>{{ $t('services.service[1].subservice[0]') }} / {{ $t('services.service[1].subservice[1]') }}</li>
            <li>{{ $t('services.service[1].subservice[2]') }}</li>
            <li>{{ $t('services.service[1].subservice[3]') }}</li>
            <li>{{ $t('services.service[1].subservice[4]') }}</li>
            <li>{{ $t('services.service[1].subservice[5]') }}</li>
            <li>{{ $t('services.service[1].subservice[6]') }}</li>
            <li>{{ $t('services.service[1].subservice[7]') }}</li>
            <li>{{ $t('services.service[1].subservice[8]') }}</li>
            <li>{{ $t('services.service[1].subservice[9]') }}</li>
            <li>{{ $t('services.service[1].subservice[10]') }}</li>
            <li>{{ $t('services.service[1].subservice[11]') }}</li>
            <li>{{ $t('services.service[1].subservice[12]') }}</li>
            <li>{{ $t('services.service[1].subservice[13]') }}</li>
            <li>{{ $t('services.service[1].subservice[14]') }}</li>
            <li>{{ $t('services.service[1].subservice[15]') }}</li>
          </ul>
        </b-col>
        <b-col class="col-12 col-md-6 service mb-4 mt-4">
          <development-icon class="mb-4" />
          <h3 class="mb-3">
            {{ $t('services.service[2].title') }}
          </h3>
          <ul>
            <li>{{ $t('services.service[2].subservice[0]') }}</li>
            <li>{{ $t('services.service[2].subservice[1]') }}</li>
            <li>{{ $t('services.service[2].subservice[2]') }}</li>
            <li>{{ $t('services.service[2].subservice[3]') }}</li>
            <li>{{ $t('services.service[2].subservice[4]') }}</li>
            <li>{{ $t('services.service[2].subservice[5]') }}</li>
            <li>{{ $t('services.service[2].subservice[6]') }}</li>
            <li>{{ $t('services.service[2].subservice[7]') }}</li>
            <li>{{ $t('services.service[2].subservice[8]') }}</li>
            <li>{{ $t('services.service[2].subservice[9]') }}</li>
            <li>{{ $t('services.service[2].subservice[10]') }}</li>
            <li>{{ $t('services.service[2].subservice[11]') }}</li>
          </ul>
        </b-col>
        <b-col class="col-12 col-md-6 service mb-4 mt-4">
          <consultory-icon class="mb-4" />
          <h3 class="mb-3">
            {{ $t('services.service[0].title') }}
          </h3>
          <ul>
            <li>{{ $t('services.service[0].subservice[0]') }}</li>
            <li>{{ $t('services.service[0].subservice[1]') }}</li>
            <li>{{ $t('services.service[0].subservice[2]') }}</li>
            <li>{{ $t('services.service[0].subservice[3]') }}</li>
            <li>{{ $t('services.service[0].subservice[4]') }}</li>
            <li>{{ $t('services.service[0].subservice[5]') }}</li>
            <li>{{ $t('services.service[0].subservice[6]') }}</li>
            <li>{{ $t('services.service[0].subservice[7]') }}</li>
          </ul>
        </b-col>
        <b-col class="col-12 col-md-6 service mb-4 mt-4">
          <infrastructure-icon class="mb-4" />
          <h3 class="mb-3">
            {{ $t('services.service[3].title') }}
          </h3>
          <ul>
            <li>{{ $t('services.service[3].subservice[0]') }}</li>
            <li>{{ $t('services.service[3].subservice[1]') }}</li>
            <li>{{ $t('services.service[3].subservice[2]') }}</li>
            <li>{{ $t('services.service[3].subservice[3]') }}</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ConsultoryIcon from '../components/snippets/ConsultoryIcon'
import DesignIcon from '../components/snippets/DesignIcon'
import DevelopmentIcon from '../components/snippets/DevelopmentIcon'
import InfrastructureIcon from '../components/snippets/InfrastructureIcon'

export default {
  components: {
    ConsultoryIcon,
    DesignIcon,
    DevelopmentIcon,
    InfrastructureIcon
  }
}
</script>
