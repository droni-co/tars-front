<template>
  <v-container>
    <v-row>
      <v-col md=4>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          grow
        >
          <v-tab href="#login-tab">Login</v-tab>
          <v-tab href="#register-tab">Register</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="login-tab">
            <login></login>
          </v-tab-item>
          <v-tab-item value="register-tab">
            <register></register>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col md=8>
      </v-col>
    </v-row>

    
  </v-container>
</template>
<script>
import Login from '../../components/auth/Login.vue'
import Register from '../../components/auth/Register.vue'

export default {
  name: 'Home',
  data: () => ({
    tab: 'login-tab'
  }),
  mounted() {

  },
  components: {
    Register,
    Login
  }
}
</script>