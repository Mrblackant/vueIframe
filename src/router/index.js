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
var jicheng = resolve => require(['@/components/jicheng.vue'], resolve)
var makeHtml = resolve => require(['@/components/makeHtml.vue'], resolve)
var class6 = resolve => require(['@/components/class6.vue'], resolve)
var moreTable = resolve => require(['@/components/moreTable.vue'], resolve)
var realM = resolve => require(['@/components/realM.vue'], resolve)
var definePropty = resolve => require(['@/components/definePropty.vue'], resolve)
var changeRuleForm = resolve => require(['@/components/changeRuleForm.vue'], resolve)
var anlikuReedit = resolve => require(['@/components/anlikuReedit.vue'], resolve)
export const constantRouterMap = [{
    path: '/',
    component: HelloWorld
  },
  {
    path: '/definePropty',
    component: definePropty
  },
  {
    path: '/changeRuleForm',
    component: changeRuleForm
  },
  {
    path: '/anlikuReedit',
    component: anlikuReedit
  },
  {
    path: '/promise',
    component: promise
  },
  {
    path: '/realM',
    component: realM
  },
  {
    path: '/moreTable',
    component: moreTable
  },
  {
    path: '/class6',
    component: class6
  },
  {
    path: '/jicheng',
    component: jicheng
  },
  {
    path: '/makeHtml',
    component: makeHtml
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
