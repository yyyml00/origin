import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Indexinfo from '@/components'
import Usermsg from '@/components/user/UserMsg'
import Equipment from '@/components/shebei/equipment'
import System from '@/components/xitong/system'




Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'index'
  },{
    path: '/index',
    component: Index,
    children: [
      {
        path: '/index',
        component: Indexinfo
      },{
        path: '/index/userMsg',
        component: Usermsg
      },{
        path: '/index/equipment',
        component: Equipment
      },{
        path: '/index/system',
        component: System
      }
    ]
  },{
    path: '/login',
    component: Login,
    name: 'login'
  }]
})
