import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/user'
import Article from '@/components/article'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
