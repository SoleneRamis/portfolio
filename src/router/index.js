import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import Home from '../containers/Home'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
