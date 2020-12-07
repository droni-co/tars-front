<template>
  <v-app>
    <v-app-bar
      app
      color="light"
      dark
      dense
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark" class="mt-4"
        persistent-hint
      ></v-switch>
      <v-btn @click="logout()" v-if="$store.state.token" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <navigation v-if="$store.state.token"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template><div class="v-toast v-toast--top"></div>

<script>
import Navigation from './components/Navigation.vue';
export default {
  components: { Navigation },
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/auth');
    }
  }
};
</script>
<style>
.v-toast__text {
  font-family: Arial, Helvetica, sans-serif;
}
</style>