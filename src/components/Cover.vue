<template>
    <div id="top-section" class="min-vh-100 d-flex flex-column align-items-center align-content-center">
        <b-container>
                <b-row class="min-vh-100 w-100"> 
                    <b-col class="col-12 col-md-6 mt-auto">
                        <h2 class="mb-4">{{ $t('topSection.title') }}</h2>
                        <p class="mb-4">{{ $t('topSection.content') }}</p>
                        <b-button href="#">{{ $t('topSection.btn-text') }}</b-button>
                    </b-col>
                    <b-col class="col-12 mt-auto">
                        <ul class="social-links">
                            <li><a target="_blank" href="#" title="Facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a></li>
                            <li><a target="_blank" href="#" title="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /><span class="sr-only">Instagram</span></a></li>
                            <li><a target="_blank" href="#" title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /><span class="sr-only">Twitter</span></a></li>
                            <!--li><a target="_blank" href="#" title="Github"><font-awesome-icon :icon="['fab', 'github']" /><span class="sr-only">Github</span></a></li-->
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
