<template>
<section id="case-studies">
    <b-container>
        <b-row>
            <b-col class="col-12 col-md-6">
                <h2>{{ $t('cases.title') }}</h2>
                <p>{{ $t('cases.content') }}</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[0].title') }}</h3>
                <p>{{ $t('cases.case[0].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[0].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[0].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[0].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[0].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[0].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[0].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[0].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[1].title') }}</h3>
                <a :href="$t('cases.case[1].url')">{{ $t('cases.case[1].url') }}</a>
                <p>{{ $t('cases.case[1].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[1].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[1].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[1].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[1].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[1].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[1].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[1].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[2].title') }}</h3>
                <a :href="$t('cases.case[2].url[0]')">{{ $t('cases.case[2].url[0]') }}</a> / <a :href="$t('cases.case[2].url[1]')">{{ $t('cases.case[2].url[1]') }}</a>
                <p>{{ $t('cases.case[2].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[2].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[2].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[2].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[2].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[2].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[2].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[2].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[3].title') }}</h3>
                <a :href="$t('cases.case[3].url')">{{ $t('cases.case[3].url') }}</a>
                <p>{{ $t('cases.case[3].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[3].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[3].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[3].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[3].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[3].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[3].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[3].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[4].title') }}</h3>
                <a :href="$t('cases.case[4].url')">{{ $t('cases.case[4].url') }}</a>
                <p>{{ $t('cases.case[4].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[4].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[4].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[4].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[4].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[4].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[4].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[4].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[5].title') }}</h3>
                <p>{{ $t('cases.case[5].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[5].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[5].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[5].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[5].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[5].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[5].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[5].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>
            
            <b-col class="col-12 col-md-6">
                <h3>{{ $t('cases.case[6].title') }}</h3>
                <a :href="$t('cases.case[6].url')">{{ $t('cases.case[6].url') }}</a>
                <p>{{ $t('cases.case[6].description') }}</p>  
                <ul>
                    <li>{{ $t('cases.Customer') }} : {{ $t('cases.case[6].customer') }}</li>
                    <li>{{ $t('cases.Area') }} : {{ $t('cases.case[6].area') }}</li>
                    <li>{{ $t('cases.Country') }} : {{ $t('cases.case[6].country') }}</li>
                    <li>{{ $t('cases.Technologies') }} : {{ $t('cases.case[6].technologies[0]') }}</li>
                    <li>{{ $t('cases.Service') }} : {{ $t('cases.case[6].service') }}</li>  
                    <li>{{ $t('cases.Co-ops') }} : {{ $t('cases.case[6].coOpsQuantity') }}</li>
                    <li>{{ $t('cases.Team size') }} : {{ $t('cases.case[6].teamSize') }}</li>   
                </ul>
            </b-col>
            <b-col class="col-12 col-md-6">
                <img src="" :alt="$t('cases.case[0].imgAlt')" class="w-100">
            </b-col>  
        </b-row>
    </b-container>
</section>
</template>

<script>

export default {

}
</script>
