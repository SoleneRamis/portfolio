import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import Home from '../containers/Home'
import Project from '../components/Project'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/:name',
      name : '/project',
      component: Project
    },
  ]
})
