import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/components/login.vue'
import home from '../views/components/home.vue'
import markdown from '../views/components/markdown.vue'
import write from '../views/components/write.vue'
import page from '../views/components/page.vue'
import detail from '../views/components/articleDetail.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: to => {
    //     return 'home';
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
        {
          path: '',
          name: 'page',
          component: page
        },
        {
          path:'markdown',
          name:'markdown',
          component:markdown
        },
        {
          path:'write',
          name:'write',
          component:write
        },
        {
          path:'detail',
          name:'detail',
          component:detail
        }
      ]
    }
  ]
})
