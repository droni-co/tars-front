<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Create Project
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Invite people
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Create tasks
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-text-field label="Name of project" v-model="newProject.name">></v-text-field>
          <v-text-field label="Short description" v-model="newProject.description"></v-text-field>
          <v-file-input show-size accept="image/*" v-model="newProject.picture" label="Logo or Icon"></v-file-input>
          <v-btn color="primary" @click="createProject()">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row v-if="e1 == 2">
            <v-col md="6">
              <invite :project="project"/>
            </v-col>
            <v-col md="6">
              <v-card outlined v-if="project">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      {{ project.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  >
                    <v-img :src="apiurl+'/storage/'+project.picture"></v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
          <v-card></v-card>

          <v-btn color="primary" @click="e1 = 3">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12">
            <create-task-component :project="project" />
          </v-card>

          <v-btn color="primary" @click="e1 = 1">
            Save
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
import axios from 'axios'
import invite from '../../components/projects/Invite'
import CreateTaskComponent from '../../components/projects/CreateTaskComponent';
export default {
  computed: {},
  data() {
    return {
      apiurl: process.env.VUE_APP_API_URL,
      newProject: {
        name: '',
        description: ''
      },
      project: null,
      e1: 1,
    }
  },
  mounted() {
  },
  methods: {
    createProject() {
      let data = new FormData();
      data.append('name', this.newProject.name);
      data.append('description', this.newProject.description);
      data.append('picture', this.newProject.picture);
      let config = { headers: { Authorization: `Bearer ${this.$store.state.token}`, 'Content-Type' : 'multipart/form-data' }};
      axios.post(this.apiurl+'/api/projects', data, config)
          .then(res => {
            this.project = res.data
            this.$store.dispatch('getProjects')
            this.e1 = 2
          }).catch(err => {
            console.log(err)
      })
    }
  },
  components: {
    invite,
    CreateTaskComponent
  }
};
</script>