<template>
  <v-navigation-drawer
      expand-on-hover
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ $store.state.user.name }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="project in $store.state.projects" :key="project.id" link class="px-2" router-link :to="'/projects/'+project.id">
          <v-list-item-avatar rounded>
            <v-img :src="apiurl +'/storage/'+ project.picture"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ project.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/projects/create">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ceate project</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import store from '../store/store'
  export default {
    data: () => ({
      apiurl: process.env.VUE_APP_API_URL,
      mini: true,
    }),
    mounted() {
      store.dispatch('getProjects')
    },
    methods: {
      
    }
  }
</script>
