import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ErrPage from '@/components/ErrPage'
import filterTable from '@/view/filterTable'

export const constantRouterMap = [{
    path: '/',
    component: HelloWorld
  }, {
    path: '/404',
    component: ErrPage
  },
  { path: '*', redirect: '/404' }
]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})
