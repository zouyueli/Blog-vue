import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddBlog',
      component: AddBlog
    }
  ]
})
