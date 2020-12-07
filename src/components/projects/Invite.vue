<template>
  <v-card :loading="loading">
    <v-card-text>
      <v-text-field append-icon="mdi-magnify" label="Invite user by email"></v-text-field>
    </v-card-text>
    <v-list two-line dense>
        <v-list-item v-for="enrollment of enrollments" :key="enrollment.id">
          <v-list-item-avatar color="indigo">
            <v-img v-if="enrollment.user.picture" :src="enrollment.user.picture"></v-img>
            <span v-else class="white--text headline">{{ enrollment.user.name.split(" ").map((n)=>n[0]).slice(0, 2).join("") }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ enrollment.user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ enrollment.role }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['project'],
    data: () => ({
      apiurl: process.env.VUE_APP_API_URL,
      loading: false,
      enrollments: [],
      errors: {}
    }),
    mounted() {
      this.getEnrollments()
    },
    methods: {
      getEnrollments() {
        this.loading = true
        let headers = { headers: { Authorization: 'Bearer ' + this.$store.state.token}} 
        axios.get(this.apiurl+'/api/enrollments/?project_id='+this.project.id, headers)
            .then(res => {
              this.enrollments = res.data;
              this.loading = false
            }).catch(err => {
              console.log(err.response)
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
