import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV) //获取组件的方法

// import HelloWorld from '@/components/HelloWorld'
// import forTable from '@/components/forTable'
// import dia from '@/components/dia'
// 登录注册相关

// 合作方



export const constantRouterMap = [
  // {
  //     path: '/',
  //     component: HelloWorld
  //   },
  //   {
  //     path: '/forTable',
  //     component: forTable
  //   },
  //   {
  //     path: '/dia',
  //     component: dia
  //   },
  //   { path: '*', redirect: '/404' }
  {
    path: '/',
    component: _import("index/index")
  },
  {
    path: '/login',
    component: _import("login/index")
  },
  {
    path: '/regist',
    component: _import("regist/index")
  },
  {
    path: '/partners',
    component: _import("partners/index")
  },
  {
    path: '/partnerslist',
    component: _import("partners/list/index")
  },
  {
    path: '/partnersdetail',
    component: _import("partners/detail/index")
  },
  {
    path: '/partnersform',
    component: _import("partners/form/index")
  },
  {
    path: '/partnersPersonal',
    component: _import("partners/personalCenter/index")
  },
  {
    path: '/partnersPersonalName',
    component: _import("partners/personalCenter/setName")
  },
  {
    path: '/partnersPersonalInfo',
    component: _import("partners/personalCenter/setOtherInfo")
  },
  {
    path: '/partnersPersonalSfyz',
    component: _import("partners/personalCenter/identityAuthentication")
  },
  {
    path: '/partnersPersonalTjyx',
    component: _import("partners/personalCenter/academicAccreditation")
  }

]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})
