<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-list-item-avatar rounded>
        <v-img :src="apiurl +'/storage/'+ project.picture"></v-img>
      </v-list-item-avatar>

      <v-toolbar-title>{{ project.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <create-task-component :project="project" />

      <v-btn router-link :to="'/projects/'+project.id+'/members'" icon>
        <v-icon>mdi-account-multiple-outline</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="deleteProject()">
            <v-list-item-title>Delete project</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import axios from 'axios'
import CreateTaskComponent from './CreateTaskComponent.vue';
export default {
  components: { CreateTaskComponent },
  props: ['project'],
  data: () => ({
    apiurl: process.env.VUE_APP_API_URL,
    drawer: false
  }),
  methods: {
    deleteProject() {
      let headers = { headers: { Authorization: `Bearer ${this.$store.state.token}` }};
      axios.delete(this.apiurl+'/api/projects/'+this.project.id, headers)
        .then(()=>{
          this.$store.dispatch('getProjects')
          this.$router.push('/')
        })
    }
  },
  watch:{
    project: ()=>{}
  }
}
</script>