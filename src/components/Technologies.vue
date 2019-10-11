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
          title: 'Vue js',
          src: 'vuejs.svg'
        },
        {
          title: 'es6',
          src: 'es6.svg'
        },
        {
          title: 'ui5',
          src: 'ui5.svg'
        },
        {
          title: 'Feathers',
          src: 'feathers.svg'
        },
        {
          title: 'Grunt',
          src: 'grunt.svg'
        },
        {
          title: 'Vue Native',
          src: 'vuenative.svg'
        },
        {
          title: 'Android studio',
          src: 'android-studio.svg'
        },
        {
          title: 'html5',
          src: 'html5.svg'
        },
        {
          title: 'CSS3',
          src: 'css3.svg'
        },
        {
          title: 'Bootstrap',
          src: 'bootstrap.svg'
        },
        {
          title: 'Sass',
          src: 'sass.svg'
        },
        {
          title: 'Java',
          src: 'java.svg'
        },
        {
          title: 'Python',
          src: 'python.svg'
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
          title: 'Drupal',
          src: 'drupal.svg'
        },
        {
          title: 'wordpress',
          src: 'wordpress.svg'
        },
        {
          title: 'shopify',
          src: 'shopify.svg'
        },
        {
          title: 'Laravel',
          src: 'laravel.svg'
        },
        {
          title: 'symfony',
          src: 'symfony.svg'
        },
        {
          title: 'apache',
          src: 'apache.svg'
        },
        {
          title: 'php',
          src: 'php.svg'
        },
        {
          title: 'mysql',
          src: 'mysql.svg'
        },
        {
          title: 'MongoDB',
          src: 'mongodb.svg'
        },
        {
          title: 'mariadb',
          src: 'mariadb.svg'
        },
        {
          title: 'couchdb',
          src: 'couchdb.svg'
        },
        {
          title: 'Firebird',
          src: 'firebird.svg'
        },
        {
          title: 'Postgresql',
          src: 'postgresql.svg'
        },
        {
          title: 'Net',
          src: 'net.png'
        },
        {
          title: 'Redis',
          src: 'redis.svg'
        },
        {
          title: 'Heroku',
          src: 'heroku.svg'
        },
        {
          title: 'Docker',
          src: 'docker.svg'
        },
        {
          title: 'Kubernetes',
          src: 'kubernetes.svg'
        },
        {
          title: 'virtualbox',
          src: 'virtualbox.svg'
        },
        {
          title: 'suitecrm',
          src: 'suitecrm.png'
        },
        {
          title: 'Celery',
          src: 'celery.png'
        },
        {
          title: 'tryton',
          src: 'tryton.svg'
        },
        {
          title: 'threejs',
          src: 'threejs.png'
        },
        {
          title: 'processing',
          src: 'processing.svg'
        },
        {
          title: 'unity',
          src: 'unity.svg'
        },
        {
          title: 'sparkar',
          src: 'sparkar.png'
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
