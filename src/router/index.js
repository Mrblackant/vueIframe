import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

export const constantRouterMap = [{
    path: '/',
    component: HelloWorld
  },
  { path: '*', redirect: '/404' }
]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})
