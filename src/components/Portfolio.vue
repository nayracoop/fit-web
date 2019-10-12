<template>
  <section id="case-studies" class="bg-grey">
    <b-container>
      <b-row>
        <b-col class="col-12 col-md-6 section-heading">
          <h2 class="pb-2">
            {{ $t('cases.title') }}
          </h2>
          <p>{{ $t('cases.content') }}</p>
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[0].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[0].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[0].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[0].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[0].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[0].technologies[0]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[0].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[0].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[0].teamSize') }}
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/shopper-trolley.png"
            alt="shopper trolley logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[2].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[2].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[2].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[2].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[2].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[2].technologies[0]') }},
                {{ $t('cases.case[2].technologies[1]') }},
                {{ $t('cases.case[2].technologies[2]') }},
                {{ $t('cases.case[2].technologies[3]') }},
                {{ $t('cases.case[2].technologies[4]') }},
                {{ $t('cases.case[2].technologies[5]') }},
                {{ $t('cases.case[2].technologies[6]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[2].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[2].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[2].teamSize') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Link') }}:</span>
                <a
                  target="_blank"
                  :href="$t('cases.case[2].url[0]')"
                >{{ $t('cases.case[2].url[0]') }}</a> / <a :href="$t('cases.case[2].url[1]')">{{ $t('cases.case[2].url[1]') }}</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/betterez.png"
            alt="betterez logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[1].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[1].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[1].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[1].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[1].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[1].technologies[0]') }},
                {{ $t('cases.case[1].technologies[1]') }},
                {{ $t('cases.case[1].technologies[2]') }},
                {{ $t('cases.case[1].technologies[3]') }},
                {{ $t('cases.case[1].technologies[4]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[1].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[1].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[1].teamSize') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Link') }}:</span>
                <a
                  target="_blank"
                  :href="$t('cases.case[1].url')"
                >{{ $t('cases.case[1].url') }}</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/aquiles.png"
            alt="aquiles logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[3].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[3].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[3].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[3].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[3].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[3].technologies[0]') }},
                {{ $t('cases.case[3].technologies[1]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[3].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[3].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[3].teamSize') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Link') }}:</span>
                <a
                  target="_blank"
                  :href="$t('cases.case[3].url')"
                >{{ $t('cases.case[3].url') }}</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/adc.png"
            alt="adc logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[4].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[4].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[4].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[4].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[4].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[4].technologies[0]') }},
                {{ $t('cases.case[4].technologies[1]') }},
                {{ $t('cases.case[4].technologies[2]') }},
                {{ $t('cases.case[4].technologies[3]') }},
                {{ $t('cases.case[4].technologies[4]') }},
                {{ $t('cases.case[4].technologies[5]') }},
                {{ $t('cases.case[4].technologies[6]') }},
                {{ $t('cases.case[4].technologies[7]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[4].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[4].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[4].teamSize') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Link') }}:</span>
                <a
                  target="_blank"
                  :href="$t('cases.case[4].url')"
                >{{ $t('cases.case[4].url') }}</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/backstory.png"
            alt="backstory logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[5].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[5].area') }}</span>
          <p class="project-description">
            {{ $t('cases.case[5].description') }}
          </p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[5].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[5].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[5].technologies[0]') }},
                {{ $t('cases.case[5].technologies[1]') }},
                {{ $t('cases.case[5].technologies[2]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[5].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[5].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[5].teamSize') }}
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/psa.png"
            alt="psa logo"
          >
        </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        <b-col class="col-12 col-md-8 project-info">
          <h3
            class="mt-3 mb-3"
            style
          >
            {{ $t('cases.case[6].title') }}
          </h3>
          <span class="project-service">{{ $t('cases.case[6].area') }}</span>
          <p class="project-description" v-html="$t('cases.case[6].description')"></p>
          <div class="case-details">
            <ul class="mb-3">
              <li>
                <span class="mb-2">{{ $t('cases.Client') }}:</span>
                {{ $t('cases.case[6].customer') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Country') }}:</span>
                {{ $t('cases.case[6].country') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
                {{ $t('cases.case[6].technologies[0]') }},
                {{ $t('cases.case[6].technologies[1]') }},
                {{ $t('cases.case[6].technologies[2]') }},
                {{ $t('cases.case[6].technologies[3]') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Services offer') }}:</span>
                {{ $t('cases.case[6].service') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Cooperatives involved') }}:</span>
                {{ $t('cases.case[6].coOpsQuantity') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                {{ $t('cases.case[6].teamSize') }}
              </li>
              <li>
                <span class="mb-2">{{ $t('cases.Link') }}:</span>
                <a
                  target="_blank"
                  :href="$t('cases.case[6].url')"
                >{{ $t('cases.case[6].url') }}</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 cont-img">
          <img
            src="static/img/cases/receptiviti.png"
            alt="recptiviti logo"
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>
