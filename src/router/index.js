import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import filterTable from '@/view/filterTable'

export const constantRouterMap=[
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    }
  ]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})