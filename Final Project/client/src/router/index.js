import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import FAQ from '@/components/FAQ'
import Profile from '@/components/Profile'
import viewPolicies from '@/components/viewPolicies'
import editPolicies from '@/components/editPolicies'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/viewPolicies',
      name: 'viewPolicies',
      component: viewPolicies
    },
    {
      path: '/editPolicies',
      name: 'editPolicies',
      component: editPolicies
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
