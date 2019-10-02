<template>
<section id="contact">
    <b-container>
        <b-row>
            <b-col class="col-12 section-heading">
                <h2 class="pb-2">{{ $t('contact.title') }}</h2>
                <p>{{ $t('contact.content') }}</p>
            </b-col>
            <b-col>
                <b-form class="w-100" 
                    action="send.php"
                    :class="{ sending, done }"
                    method="post"
                    @submit.prevent="sendMessage">
                    <b-form-row>
                        <b-form-group class="col-12 col-md-6" :label="$t('Name')" label-for="name" :description="$t('This field is required')">
                            <b-form-input
                            id="name"
                            name="name"
                            required
                            v-model="form.name"
                            :placeholder="$t('Enter your name')"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group class="col-12 col-md-6" :label="$t('Company name')" label-for="companyName">
                            <b-form-input
                            id="companyName"
                            name="companyName"
                            required
                            v-model="form.companyName"
                            :placeholder="$t('Enter your company name')"
                            ></b-form-input>
                        </b-form-group>
                    </b-form-row>

                    <b-form-row>
                        <b-form-group class="col-12 col-md-6" :label="$t('Email address')" label-for="email" :description="$t('This field is required')">
                            <b-form-input
                            id="email"
                            name="email"
                            type="email"
                            required
                            v-model="form.email"
                            :placeholder="$t('Enter your email address')"
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group class="col-12 col-md-6" :label="$t('¿What service are you looking for?')" label-for="service" :description="$t('This field is required')">
                            <b-form-select
                            id="service"
                            name="service"
                            v-model="form.services"
                            :options="services"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-form-row>
                    <b-form-group :label="$t('Message')" label-for="message">       
                        <b-form-textarea
                            rows="4"
                            id="message"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('Enter your message')">
                        </b-form-textarea>
                    </b-form-group>

                    <b-button type="submit" class="mt-4 btn">{{ $t('Send')}}</b-button>
                    <span id="messages">{{ $t(output) }}</span>
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
        name: '',
        companyName: '',
        email: '',
        services: null,
        message: ''
      },
      services: [
        { text: 'Seleccione el servicio', value: null },
        {text: 'Capacitación y consultoría', value: 'Capacitación y consultoría', name: 'Capacitación y consultoría'},
        {text: 'Diseño y comunicación', value: 'Diseño y comunicación', name: 'Capacitación y consultoría'},
        {text: 'Desarrollo', value: 'Desarrollo', name: 'Desarrollo'},
        {text: 'Infraestructura', value: 'Infraestructura', name: 'Infraestructura'},
        {text: 'Otros servicios', value: 'Otros servicios', name: 'Otros servicios'}
      ],
      output: '',
      sending: false,
      done: false
    }
  },
  methods: {
    sendMessage () {
      if (!this.done) {
        const formData = new FormData()

        formData.append('name', this.form.name)
        formData.append('companyName', this.form.companyName)
        formData.append('email', this.form.email)
        formData.append('service', this.form.services)
        formData.append('message', this.form.message)
        this.sending = true

        this.$http
          .post('/send.php', formData)
          .then(response => {
            this.sending = false
            console.log(response)
            if (response.data.enviado) {
              this.done = true
              this.output = 'Message sent. Thank you!'
            } else {
              this.output = response.data.mensaje
            }
          })
          .catch(e => {
            this.sending = false
            this.output = 'An error occurred while trying to send your message.'
          })
      }
    }
  }
}
</script>
