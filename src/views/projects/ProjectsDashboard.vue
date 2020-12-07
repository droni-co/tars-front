<template>
  <div v-if="project">
    <v-navigation-drawer
      v-model="taskDrawer"
      absolute
      temporary
      bottom
      right
      width="50%"
      :transitionend="closeTask()"
    >
      <v-list
        nav
        dense
      >
        <task-component></task-component>
      </v-list>
    </v-navigation-drawer>

    <project-header :project="project"/>
    <v-row>
      <v-col md="8" lg="9">
        <v-container>
          <v-list subheader three-line>
            <v-subheader inset>Folders</v-subheader>

            <v-list-item v-for="folder in 5" :key="folder" @click="openTask(folder)" router-link :to="'/projects/'+project.id+'/t/'+folder">
              <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>
                  mdi-folder
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Tarea de prueba</v-list-item-title>
                <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis at atque hic velit eveniet maiores odio praesentium veritatis minima quis, necessitatibus, itaque eos a iste quaerat, fugit inventore. Dicta.
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="mr-3">
                    <v-icon small>mdi-calendar-alert</v-icon>
                    20 Junio 2019
                  </span>
                  <span class="mr-3">
                    <v-icon small>mdi-comment-text-multiple-outline</v-icon>
                    15
                  </span>
                  <span class="mr-3">
                    <v-icon small>mdi-paperclip</v-icon>
                    2
                  </span>
                  <span class="mr-3">
                    <v-icon small>mdi-calendar-alert</v-icon>
                    20 Junio 2019
                  </span>
                  <span class="mr-3">
                    <v-icon small>mdi-account-arrow-right-outline</v-icon>
                    Kalvin Manson
                  </span>
                  <span class="mr-3">
                    <v-icon small>mdi-update</v-icon>
                    Kalvin Manson 31 min ago
                  </span>
                  
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-avatar size="32">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
              </v-list-item-action>
              <v-list-item-action>
                <v-progress-circular
                  :value="80"
                  color="deep-orange lighten-2"
                >80</v-progress-circular>
              </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-subheader inset>Files</v-subheader>
          </v-list>
        </v-container>
      </v-col>
      <v-col md="4" lg="3">
        sidebar
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
import ProjectHeader from '../../components/projects/ProjectHeader'
import TaskComponent from '../../components/projects/TaskComponent'
export default {
  computed: {},
  data() {
    return {
      apiurl: process.env.VUE_APP_API_URL,
      project: null,
      task: {},
      taskDrawer: false
    }
  },
  mounted() {
    this.getProject();
    if(this.$route.params.task_id > 0) {
      this.openTask(this.$route.params.task_id);
    }
  },
  methods: {
    getProject() {
      let headers = { headers: { Authorization: `Bearer ${this.$store.state.token}` }};
      axios.get(this.apiurl+'/api/projects/'+this.$route.params.id, headers)
        .then(res=>{
          this.project = res.data
        })
    },
    openTask(task_id) {
      this.taskDrawer = true
      this.task = { id: task_id }
    },
    closeTask() {
      if(!this.taskDrawer && this.task.id > 0) {
        this.task = {};
        this.$router.push('/projects/'+this.project.id)
      }
    }
  },
  components: {
    ProjectHeader,
    TaskComponent
  },
  watch:{
    $route (to){
      if(to.params.id != this.project.id) {
        this.getProject();
      }
      if(to.params.task_id != this.task.id) {
        this.openTask(to.params.task_id);
      }
    }
  } 
};
</script>