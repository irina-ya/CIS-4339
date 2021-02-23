import Vue from 'vue'
import Router from 'vue-router'
import AFCTeams from '@/components/AFCTeams'
import DivProfile from '@/components/DivProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AFCTeams',
      component: AFCTeams
    },
    {
      path: '/:divName',
      name: 'DivProfile',
      component: DivProfile
    }
  ]
})
