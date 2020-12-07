<template>
  <div v-if="project">
    <project-header :project="project"/>
    <v-container>
      <v-row>
        <v-col md="8">
          <v-list>
            <v-list-item v-for="user of 15" :key="user" router-link :to="'/'+user">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Kalvin Manson</v-list-item-title>
                <v-list-item-subtitle>Developer</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-chip small>
                  <v-icon small left>mdi-medal-outline</v-icon>
                  250
                </v-chip>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="4">
          <v-card outlined>
            <v-card-title>Invite people</v-card-title>
            <v-card-text>
              <v-text-field label="Email" v-model="newInvitation.email"></v-text-field>
              <v-select label="Role" :items="['Worker', 'Manager', 'Owner']" v-model="newInvitation.role"></v-select>
              <v-btn color="primary">Invite</v-btn>
            </v-card-text>
          </v-card>
          <v-list>
            <v-list-item v-for="user of 3" :key="user">
              <v-list-item-content>
                <v-list-item-title>kalvinmanson@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Owner</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn text color="red" small>
                  <v-icon small>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
import ProjectHeader from '../../components/projects/ProjectHeader'
export default {
  computed: {},
  data() {
    return {
      apiurl: process.env.VUE_APP_API_URL,
      project: null,
      newInvitation: {}
    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      let headers = { headers: { Authorization: `Bearer ${this.$store.state.token}` }};
      axios.get(this.apiurl+'/api/projects/'+this.$route.params.id, headers)
        .then(res=>{
          this.project = res.data
        })
    },
    getEnrollments() {

    }
  },
  components: {
    ProjectHeader
  },
  watch:{
    $route (){
      this.getProject();
    }
  } 
};
</script>