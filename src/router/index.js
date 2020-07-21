import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'
import portrait from '@/components/portrait'
import store from '../vuex/store.js'
import touxiang from '@/components/touxiang'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[1,false,3]);
        next();  //next必须执行，否则会卡住
      }
    },
    // {
    //   path: '/Touxiang',
    //   name: 'Touxiang',
    //   component: touxiang
    // },
    // {
    //   path: '/portrait',
    //   name: 'portrait',
    //   component: portrait
    // },
    {
      path: '/BlogList',
      name: 'Blog',
      component: resolve => require(['../components/bloglist.vue'], resolve),
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[1,false,3]);
        next();  //next必须执行，否则会卡住
      }
    },
    
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[1,false,3]);
        next();  //next必须执行，否则会卡住
      }
    },

    {
      path: '/BlogEditor',
      name: 'BlogEditor',
      component: resolve => require(['../pages/BlogEditor.vue'], resolve),
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[null,false,null]);
        next();  //next必须执行，否则会卡住
      }
    },
    {
      path: '/DetailedBlog',
      name: 'DetailedBlog',
      component: resolve => require(['../pages/DetailedBlog.vue'], resolve),
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[1,false,3]);
        next();  //next必须执行，否则会卡住
      } 
    },
    {
      path: '/',
      name: 'NewHome',
      component: resolve => require(['../newhome/home/MLHome.vue'], resolve),
      beforeEnter(to,from,next){
        store.dispatch("changeShowLayoutItemFun",[1,2,3]);
        console.log(store.state.showLayoutItem)
        next();  //next必须执行，否则会卡住
      }, 
      meta:{
        layout:'mylayout',
        title:"首页"
      }
      
    },
  ]
})
