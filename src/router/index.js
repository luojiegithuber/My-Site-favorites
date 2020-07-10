import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'
import portrait from '@/components/portrait'

import HeadNav from '@/components/HeadNav'

import bloglist from '@/components/bloglist'
import touxiang from '@/components/touxiang'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Touxiang',
      name: 'Touxiang',
      component: touxiang
    },
    {
      path: '/portrait',
      name: 'portrait',
      component: portrait
    },
    {
      path: '/',
      name: 'Blog',
      component: resolve => require(['../pages/Blog.vue'], resolve),
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/BlogEditor',
      name: 'BlogEditor',
      component: resolve => require(['../pages/BlogEditor.vue'], resolve),
    },
    {
      path: '/DetailedBlog',
      name: 'DetailedBlog',
      component: resolve => require(['../pages/DetailedBlog.vue'], resolve),
    }
  ]
})
