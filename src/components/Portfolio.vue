<template>
  <section id="case-studies">
    <b-container>
      <b-row>
        <b-col class="col-12 col-md-6 section-heading">
          <h2 class="pb-2">{{ $t('cases.title') }}</h2>
          <p>{{ $t('cases.content') }}</p>
        </b-col>
      </b-row>
      


      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[0].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[0].area') }}</span>
            <p class="project-description">{{ $t('cases.case[0].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[0].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[0].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[0].teamSize') }}
                </li>
              </ul>
            </div>
          </b-col>
      </b-row>

      
      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[2].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[2].area') }}:</span>
            <p class="project-description">{{ $t('cases.case[2].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[2].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[2].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[2].teamSize') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Project link') }}:</span>
                  <a target="_blank" :href="$t('cases.case[2].url[0]')">{{ $t('cases.case[2].url[0]') }}</a> / <a :href="$t('cases.case[2].url[1]')">{{ $t('cases.case[2].url[1]') }}</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="col-12 col-md-4 cont-img">
            <img :src="'/src/assets/img/cases/'+$t('cases.case[2].imgSrc')" :alt="$t('cases.case[2].imgAlt')" />
          </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[1].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[1].area') }}</span>
            <p class="project-description">{{ $t('cases.case[1].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[1].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[1].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[1].teamSize') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Project link') }}:</span>
                  <a target="_blank" :href="$t('cases.case[1]')">{{ $t('cases.case[1].url') }}</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="col-12 col-md-4 cont-img">
            <img :src="'/src/assets/img/cases/'+$t('cases.case[1].imgSrc')" :alt="$t('cases.case[1].imgAlt')" />
          </b-col>
      </b-row>

      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[3].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[3].area') }}</span>
            <p class="project-description">{{ $t('cases.case[3].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[3].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[3].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[3].teamSize') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Project link') }}:</span>
                  <a target="_blank" :href="$t('cases.case[3].url')">{{ $t('cases.case[3].url') }}</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="col-12 col-md-4 cont-img">
            <img :src="'/src/assets/img/cases/'+$t('cases.case[3].imgSrc')" :alt="$t('cases.case[3].imgAlt')" />
          </b-col>
      </b-row>
      
      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[4].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[4].area') }}</span>
            <p class="project-description">{{ $t('cases.case[4].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[4].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[4].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[4].teamSize') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Project link') }}:</span>
                  <a target="_blank" :href="$t('cases.case[4].url')">{{ $t('cases.case[4].url') }}</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="col-12 col-md-4 cont-img">
            <img :src="'/src/assets/img/cases/'+$t('cases.case[4].imgSrc')" :alt="$t('cases.case[4].imgAlt')" />
          </b-col>
      </b-row>
      
      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[5].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[5].area') }}</span>
            <p class="project-description">{{ $t('cases.case[5].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[5].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
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
            <img :src="'/src/assets/img/cases/'+$t('cases.case[5].imgSrc')" :alt="$t('cases.case[5].imgAlt')" />
          </b-col>
      </b-row>
      
      <b-row class="mb-4 project project-alternative">
        
          <b-col class="col-12 col-md-8 project-info">
            <h3 class="mt-3 mb-3" style>{{ $t('cases.case[6].title') }}</h3>
            <span class="project-service">{{ $t('cases.case[6].area') }}</span>
            <p class="project-description">{{ $t('cases.case[6].description') }}</p>
            <div class="case-details">
              <ul class="mb-3">
                <li>
                  <span class="mb-2">{{ $t('cases.Customer') }}:</span>
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
                  <span class="mb-2">{{ $t('cases.Service') }}:</span>
                  {{ $t('cases.case[6].service') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
                  {{ $t('cases.case[6].coOpsQuantity') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Team size') }}:</span>
                  {{ $t('cases.case[6].teamSize') }}
                </li>
                <li>
                  <span class="mb-2">{{ $t('cases.Project link') }}:</span>
                  <a target="_blank" :href="$t('cases.case[6].url')">{{ $t('cases.case[6].url') }}</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col class="col-12 col-md-4 cont-img">
            <img :src="'/src/assets/img/cases/'+$t('cases.case[6].imgSrc')" :alt="$t('cases.case[6].imgAlt')" />
          </b-col>
      </b-row>

      <!--b-row class="mb-4 project">
        <b-col class="col-12 col-md-8 mb-2">
          <h3 class="mt-3 mb-3">{{ $t('cases.case[6].title') }}</h3>
          <p>{{ $t('cases.case[6].description') }}</p>
        </b-col>
        <b-col class="col-12 col-md-4">
          <img src :alt="$t('cases.case[0].imgAlt')" class="w-100" />
        </b-col>
        <b-col class="col-12 col-md-12 case-details">
          <ul class="mb-3">
            <li>
              <span class="mb-2">{{ $t('cases.Customer') }}:</span>
              {{ $t('cases.case[6].customer') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Area') }}:</span>
              {{ $t('cases.case[6].area') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Country') }}:</span>
              {{ $t('cases.case[6].country') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Technologies') }}:</span>
              {{ $t('cases.case[6].technologies[0]') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Service') }}:</span>
              {{ $t('cases.case[6].service') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Co-ops') }}:</span>
              {{ $t('cases.case[6].coOpsQuantity') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Team size') }}:</span>
              {{ $t('cases.case[6].teamSize') }}
            </li>
            <li>
              <span class="mb-2">{{ $t('cases.Project link') }}:</span>
              <a target="_blank" :href="$t('cases.case[6].url')">{{ $t('cases.case[6].url') }}</a>
            </li>
          </ul>
        </b-col>
      </b-row-->
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      /* caseImg: [
        {
          alt: 'shopper trolley',
          src: ''
        },
        {
          alt: 'Aquiles logo',
          src: 'aquiles.png'
        },
        {
          alt: 'Betterez logo',
          src: 'betterez.png'
        },
        {
          alt: 'Asociación por los Derechos Civiles logo',
          src: 'adc.png'
        },
        {
          alt: 'Backstory logo',
          src: 'backstory.png'
        },
        {
          alt: 'PSA logo',
          src: 'psa.png'
        },
        {
          alt: 'Receptiviti logo',
          src: 'receptiviti.png'
        }
      ] */
    }
  }
}
</script>
