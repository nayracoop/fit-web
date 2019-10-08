<template>
  <section id="technologies">
    <b-container>
      <b-row>
        <b-col class="col-12 col-md-6 section-heading">
          <h2 class="pb-2">
            {{ $t('technologies.title') }}
          </h2>
          <p>{{ $t('technologies.content') }}</p>
        </b-col>
      </b-row>
      <b-row>
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="col-4 col-md-2 col-xl-1  d-flex align-items-center mb-5 justify-content-center"
          :class="'logo-' + index"
        >
          <img
            class="tech-logo"
            :src="'static/img/tech-logos/'+icon.src"
            :alt="icon.title"
          >
        </div>
      </b-row>
    </b-container>
    <!--div class="logos-container">
      <div v-for="(icon, index) in icons" v-bind:key="index" v-bind:class="'logo-' + index">
        <img :src="'static/img/tech-logos/'+icon.src" :alt="icon.title" height="20px"/>
      </div>
    </div-->
  </section>
</template>

<script>

export default {
  data () {
    return {
      icons: [
        {
          title: 'Express',
          src: 'express.svg'
        },
        {
          title: 'Ionic',
          src: 'ionic.svg'
        },
        {
          title: 'Django',
          src: 'django.svg'
        },
        {
          title: 'Python',
          src: 'python.svg'
        },
        {
          title: 'React',
          src: 'react.svg'
        },
        {
          title: 'Angular',
          src: 'angular-icon.svg'
        },
        {
          title: 'Node.js',
          src: 'nodejs.svg'
        },
        {
          title: 'Drupal',
          src: 'drupal.svg'
        },
        {
          title: 'Vue js',
          src: 'vuejs.svg'
        },
        {
          title: 'Elixir',
          src: 'elixir.png'
        },
        {
          title: 'Amazon web services',
          src: 'aws.svg'
        },
        {
          title: 'MongoDB',
          src: 'mongodb.svg'
        },
        {
          title: 'Vue Native',
          src: 'vuenative.svg'
        },
        {
          title: 'Bootstrap',
          src: 'bootstrap.svg'
        },
        {
          title: 'Celery',
          src: 'celery.png'
        },
        {
          title: 'CSS3',
          src: 'css3.svg'
        },
        {
          title: 'Docker',
          src: 'docker.svg'
        },
        {
          title: 'Feathers',
          src: 'feathers.svg'
        },
        {
          title: 'Firebird',
          src: 'firebird.svg'
        },
        {
          title: 'Java',
          src: 'java.svg'
        },
        {
          title: 'Grunt',
          src: 'grunt.svg'
        },
        {
          title: 'Heroku',
          src: 'heroku.svg'
        },
        {
          title: 'html5',
          src: 'html5.svg'
        },
        {
          title: 'Kubernetes',
          src: 'kubernetes.svg'
        },
        {
          title: 'Laravel',
          src: 'laravel.svg'
        },
        {
          title: 'mysql',
          src: 'mysql.svg'
        },
        {
          title: 'Net',
          src: 'net.png'
        },
        {
          title: 'php',
          src: 'php.svg'
        },
        {
          title: 'Postgresql',
          src: 'postgresql.svg'
        },
        {
          title: 'Redis',
          src: 'redis.svg'
        },
        {
          title: 'Sass',
          src: 'sass.svg'
        },
        {
          title: 'shopify',
          src: 'shopify.svg'
        },
        {
          title: 'sparkar',
          src: 'sparkar.png'
        },
        {
          title: 'suitecrm',
          src: 'suitecrm.png'
        },
        {
          title: 'symfony',
          src: 'symfony.svg'
        },
        {
          title: 'threejs',
          src: 'threejs.png'
        },
        {
          title: 'tryton',
          src: 'tryton.svg'
        },
        {
          title: 'ui5',
          src: 'ui5.svg'
        },
        {
          title: 'unity',
          src: 'unity.svg'
        },
        {
          title: 'wordpress',
          src: 'wordpress.svg'
        },
        {
          title: 'Android studio',
          src: 'android-studio.svg'
        },
        {
          title: 'apache',
          src: 'apache.svg'
        },
        {
          title: 'arduino',
          src: 'arduino.svg'
        }
      ]
    }
  }

}
</script>
