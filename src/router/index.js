import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/auth/Auth.vue'
import ProjectsCreate from '../views/projects/ProjectsCreate.vue'
import ProjectsMembers from '../views/projects/ProjectsMembers.vue'
import ProjectsDashboard from '../views/projects/ProjectsDashboard.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from "../store/store";


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '/projects/create', name: 'ProjectsCreate', component: ProjectsCreate },
  { path: '/projects/:id/members', name: 'ProjectsMembers', component: ProjectsMembers },
  { path: '/projects/:id/t/:task_id', name: 'TaskShow', component: ProjectsDashboard },
  { path: '/projects/:id', name: 'ProjectsDashboard', component: ProjectsDashboard },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.token && to.name != 'Auth') {
    next({
      path: '/auth',
      query: { redirect: to.fullPath }
    })
  }
  else {
    next()
  }  
})

export default router
