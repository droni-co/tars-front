<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>Welcome to TARS</v-card-title>

      <v-card-text>
        <div>Use your email and password to acces in your dashboard.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-text-field v-model="user.email" tyep="email" :error="typeof errors.email !== 'undefined'" :messages="errors.email" label="Email" required :disabled="loading" v-on:keyup.enter="login()"></v-text-field>
        <v-text-field v-model="user.password" type="password" :error="typeof errors.password !== 'undefined'" :messages="errors.password" label="Password" required :disabled="loading" v-on:keyup.enter="login()"></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" dark @click="login()" :disabled="loading">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      user: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }),
    mounted() {
    },
    methods: {
      login() {
        this.loading = true       
        axios.post(process.env.VUE_APP_API_URL+'/api/auth/login', this.user)
            .then(res => {
              this.$store.commit('setToken', res.data)
              this.$store.dispatch('getUser', res.data)
              this.$router.push('/');
              
            }).catch(err => {
              if(err.response) {
                this.$toast.error(err.response.data.message, { position: 'top' })
                this.errors = err.response.data.errors;
              }
              this.loading = false
            })
      }
    }
  }
</script>
