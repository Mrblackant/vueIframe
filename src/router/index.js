import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import filterTable from '@/view/filterTable'
import crm from '@/view/allFrames/crm'//crm
import lx from '@/view/allFrames/lx'//留学
import ym from '@/view/allFrames/ym'//移民


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'crm',
      component: crm
    },
    {
      path: '/lx',
      name: 'lx',
      component: lx
    },
    {
      path: '/ym',
      name: 'ym',
      component: ym
    }
  ]
})
