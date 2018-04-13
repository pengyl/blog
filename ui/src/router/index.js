import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import markdown from '@/components/markdown'
import write from '@/components/write'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/markdown',
      name:'markdown',
      component:markdown
    },
    {
      path:'/write',
      name:'write',
      component:write
    }
  ]
})
