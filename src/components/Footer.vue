<template>
<footer class="text-center">
    <b-container>
        <b-row>
            <b-col>
                <img src="../assets/img/logo.svg" alt="logo FIT" height="60" />
                <nav>
                    <b-navbar-nav class="m-auto">
                        <b-nav-item href="#about">{{ $t('About FIT') }}</b-nav-item>
                        <b-nav-item href="#services">{{ $t('Services') }}</b-nav-item>
                        <b-nav-item href="#technologies">{{ $t('Technologies') }}</b-nav-item>
                        <b-nav-item href="#case-studies">{{ $t('Case studies') }}</b-nav-item>
                        <b-nav-item href="#contact">{{ $t('Contact us') }}</b-nav-item>
                    </b-navbar-nav>
                </nav>
                <ul class="social-links">
                    <li><a target="_blank" href="#" title="Facebook"><font-awesome-icon :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a></li>
                    <li><a target="_blank" href="#" title="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /><span class="sr-only">Instagram</span></a></li>
                    <li><a target="_blank" href="#" title="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /><span class="sr-only">Twitter</span></a></li>
                    <li><a target="_blank" href="#" title="Github"><font-awesome-icon :icon="['fab', 'github']" /><span class="sr-only">Github</span></a></li>
                </ul>
                    <small>&lt;/&gt; with <span>♥</span> by cooperativists</small>
                    <div>
                    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    <img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                    </a>
                    </div>
                    <small>Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.</small>
            </b-col>
        </b-row>
    </b-container>
</footer>
</template>

<script>

export default {

}
</script>
