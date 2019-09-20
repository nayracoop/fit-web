<template>
  <div id="wrapper">
      <fit-header></fit-header>
      <fit-cover></fit-cover>
      <fit-about></fit-about>
      <fit-services></fit-services>
      <fit-technologies></fit-technologies>
      <fit-portfolio></fit-portfolio>
      <fit-contact></fit-contact>
      <fit-footer></fit-footer>
      <b-container></b-container>
  </div>
</template>

<script>
import FitHeader from '../components/Header.vue'
import FitAbout from '../components/About.vue'
import FitPortfolio from '../components/Portfolio.vue'
import FitContact from '../components/Contact.vue'
import FitCover from '../components/Cover.vue'
import FitFooter from '../components/Footer.vue'
import FitServices from '../components/Services.vue'
import FitTechnologies from '../components/Technologies.vue'

export default {
  components: {
    FitHeader,
    FitCover,
    FitAbout,
    FitPortfolio,
    FitContact,
    FitFooter,
    FitServices,
    FitTechnologies
  }
}
</script>

<style lang="scss">

  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @import '../assets/css/main.css';
  @import '../assets/scss/main.scss';

</style>
