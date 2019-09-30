<template>
<section id="services">
    <b-container>
        <b-row>
            <b-col class="col-12 col-md-6 section-heading">
                <h2>{{ $t('services.title') }}</h2>
                <p>{{ $t('services.content') }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 col-md-6 service mb-4 mt-4">
                <img src="/src/assets/img/design.svg" :alt="$t('services.service[1].imgAlt')" class="mb-4" />
                <h3 class="mb-3">{{ $t('services.service[1].title') }}</h3>
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
                <img src="/src/assets/img/development.svg" :alt="$t('services.service[2].imgAlt')" class="mb-4" />
                <h3 class="mb-3">{{ $t('services.service[2].title') }}</h3>
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
                <img src="/src/assets/img/consultory.svg" :alt="$t('services.service[0].imgAlt')" class="mb-4" />
                <h3 class="mb-3">{{ $t('services.service[0].title') }}</h3>
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
                <img src="/src/assets/img/development.svg" :alt="$t('services.service[3].imgAlt')" class="mb-4" />
                <h3 class="mb-3">{{ $t('services.service[3].title') }}</h3>
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

export default {

}
</script>
