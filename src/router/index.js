import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import async from '@/components/async'
// import callApply from '@/components/callApply'
var callApply = resolve => require(['@/components/callApply.vue'], resolve)
var HelloWorld = resolve => require(['@/components/HelloWorld.vue'], resolve)
var promise = resolve => require(['@/components/promise.vue'], resolve)
var async = resolve => require(['@/components/async.vue'], resolve)
var prototype = resolve => require(['@/components/prototype.vue'], resolve)
var other = resolve => require(['@/components/other.vue'], resolve)
var tthis = resolve => require(['@/components/tthis.vue'], resolve)
var arrary = resolve => require(['@/components/arrary.vue'], resolve)
var AllCom = resolve => require(['@/components/AllCom.vue'], resolve)

export const constantRouterMap = [{
    path: '/',
    component: HelloWorld
  },
  {
    path: '/promise',
    component: promise
  }, {
    path: '/AllCom',
    component: AllCom
  },
  {
    path: '/arrary',
    component: arrary
  },
  {
    path: '/async',
    component: async
  },
  {
    path: '/tthis',
    component: tthis
  },
  {
    path: '/other',
    component: other
  }, {
    path: '/prototype',
    component: prototype
  },
  {
    path: '/callApply',
    component: callApply
  },
  { path: '*', redirect: '/404' }
]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})
