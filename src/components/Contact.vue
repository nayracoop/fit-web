<template>
<section id="contact">
    <b-container>
        <b-row>
            <b-col class="col-12">
                <h2>{{ $t('contact.title') }}</h2>
                <p>{{ $t('contact.content') }}</p>
            </b-col>
            <b-col>
                <b-form class="w-100">
                    <b-form-row>
                        <b-form-group id="input-group-2" class="col-12 col-md-6" :label="$t('Name:')" label-for="input-3" :description="$t('This field is required')">
                            <b-form-input
                            id="input-3"
                            required
                            :placeholder="$t('Enter your name')"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" class="col-12 col-md-6" :label="$t('Company name:')" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            required
                            :placeholder="$t('Enter your company name')"
                            ></b-form-input>
                        </b-form-group>
                    </b-form-row>

                    <b-form-row>
                        <b-form-group id="input-group-3" class="col-12 col-md-6" :label="$t('¿What service are you looking for?')" label-for="input-4" :description="$t('This field is required')">
                            <b-form-select
                            id="input-4"
                            v-model="form.services"
                            :options="services"
                            required
                            ></b-form-select>
                        </b-form-group>

                        <b-form-group id="input-group-1" class="col-12 col-md-6" :label="$t('Email address:')" label-for="input-1" :description="$t('This field is required')">
                            <b-form-input
                            id="input-1"
                            type="email"
                            required
                            :placeholder="$t('Enter your address')"
                            ></b-form-input>
                        </b-form-group>
                    </b-form-row>

                    <b-form-group id="input-group-5" :label="$t('Message:')" label-for="textarea">       
                        <b-form-textarea
                            id="textarea"
                            :placeholder="$t('Enter your message')">
                        </b-form-textarea>
                    </b-form-group>

                    <b-button type="submit" variant="primary">{{ $t('Send')}}</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</section>
</template>

<script>

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        services: null,
        checked: []
      },
      services: [{ text: 'Select the service', value: null }, 'Capacitación y consultoría', 'Diseño y comunicación', 'Desarrollo', 'Infraestructura', 'Otros servicios'],
      show: true
    }
  }
}
</script>
