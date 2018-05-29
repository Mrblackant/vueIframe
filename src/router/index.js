import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import filterTable from '@/view/filterTable'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'filterTable',
      component: filterTable
    }
    
  ]
})
