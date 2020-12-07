//you need to import both vue and vuex, as both are used here
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'
import axios from 'axios'

const vuexPersist = new VuexPersist({
  key: 'tars',
  storage: window.localStorage
})

//then you use Vuex
Vue.use(Vuex);

 
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    projects: []
  }, 
  mutations: {
    setUser: (state, user) =>
       {state.user = user;},
    setToken: (state, token) => {
      state.token = token;         
    },
    destroyToken: (state) => {
      state.token = null
      state.user = {}
    },
    setProjects: (state, projects) => {
      state.projects = projects;         
    },
  },
  actions: {
    getUser({ commit }, token){
      let headers = {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      }
      axios.get(process.env.VUE_APP_API_URL+'/api/users/my', headers)
          .then(res => {
            commit('setUser', res.data)          
          }).catch(err => {
            console.log(err)
          })
    },
    logout({ commit, state }) {
      let headers = {
        headers: { Authorization: 'Bearer ' + state.token }
      }
      axios.get(process.env.VUE_APP_API_URL+'/api/auth/logout', headers)
      commit('setUser', {})
      commit('setToken', null)      
    },
    getProjects({ commit, state }) {
      let headers = {
        headers: { Authorization: 'Bearer ' + state.token }
      }
      axios.get(process.env.VUE_APP_API_URL+'/api/projects', headers)
          .then(res => {
            commit('setProjects', res.data)
          }).catch(err => {
            console.log(err)
          })
    }
  },
  plugins: [vuexPersist.plugin]
});