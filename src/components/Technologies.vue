<template>
<section id="technologies">
    <b-container>
        <b-row>
            <b-col class="col-12 col-md-6">
                <h2>{{ $t('technologies.title') }}</h2>
                <p>{{ $t('technologies.content') }}</p>
            </b-col>
        </b-row>
    </b-container>
        <div class="logos-container">
                <div v-for="(icon, index) in icons" v-bind:key="index" v-bind:class="'logo-' + index">
                    <img :src="'./src/assets/img/tech-logos/'+icon.src" :alt="icon.title" height="20px"/>
                </div>
        </div>
</section>
</template>

<script>

export default {
  data () {
    return {
      icons: [
        {
          title: '',
          src: 'ar-studio.svg'
        },
        {
          title: '',
          src: 'aws.svg'
        },
        {
          title: '',
          src: 'bootstrap.svg'
        },
        {
          title: '',
          src: 'celery.png'
        },
        {
          title: '',
          src: 'css3.svg'
        },
        {
          title: '',
          src: 'django.svg'
        },
        {
          title: '',
          src: 'docker.svg'
        },
        {
          title: '',
          src: 'drupal.svg'
        },
        {
          title: '',
          src: 'elixir.png'
        },
        {
          title: '',
          src: 'express.svg'
        },
        {
          title: '',
          src: 'feathers.png'
        },
        {
          title: '',
          src: 'firebird.svg'
        },
        {
          title: '',
          src: 'grunt.svg'
        },
        {
          title: '',
          src: 'heroku.svg'
        },
        {
          title: '',
          src: 'html5.svg'
        },
        {
          title: '',
          src: 'ionic.svg'
        },
        {
          title: '',
          src: 'java.svg'
        },
        {
          title: '',
          src: 'kubernetes.svg'
        },
        {
          title: '',
          src: 'laravel.svg'
        },
        {
          title: '',
          src: 'mongodb.svg'
        },
        {
          title: '',
          src: 'mysql.svg'
        },
        {
          title: '',
          src: 'nativescript.svg'
        },
        {
          title: '',
          src: 'net.png'
        },
        {
          title: '',
          src: 'nodejs.svg'
        },
        {
          title: '',
          src: 'php.svg'
        },
        {
          title: '',
          src: 'postgresql.svg'
        },
        {
          title: '',
          src: 'python.svg'
        },
        {
          title: '',
          src: 'react.svg'
        },
        {
          title: '',
          src: 'redis.svg'
        },
        {
          title: '',
          src: 'sass.svg'
        },
        {
          title: '',
          src: 'shopify.svg'
        },
        {
          title: '',
          src: 'sparkar.png'
        },
        {
          title: '',
          src: 'suitecrm.png'
        },
        {
          title: '',
          src: 'symfony.svg'
        },
        {
          title: '',
          src: 'threejs.png'
        },
        {
          title: '',
          src: 'tryton.svg'
        },
        {
          title: '',
          src: 'ui5.svg'
        },
        {
          title: '',
          src: 'unity.svg'
        },
        {
          title: '',
          src: 'wordpress.svg'
        },
        {
          title: '',
          src: 'android-studio.svg'
        },
        {
          title: '',
          src: 'angular-icon.svg'
        },
        {
          title: '',
          src: 'apache.svg'
        },
        {
          title: '',
          src: 'arduino.svg'
        }
      ]
    }
  }

}
</script>
