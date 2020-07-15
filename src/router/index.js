import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Doglicense from '@/components/Doglicense'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/doglicense',
      name: 'doglicense',
      component: Doglicense
    }
  ]
})
