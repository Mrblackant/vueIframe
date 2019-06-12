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
    path: '/hzParty',
    component: _import("hzParty/index")
  },
  {
    path: '/hzPartylist',
    component: _import("hzParty/list/index")
  },
  {
    path: '/hzPartydetail',
    component: _import("hzParty/detail/index")
  },
  {
    path: '/hzPartyform',
    component: _import("hzParty/form/index")
  },
  {
    path: '/hzPartyformcompanies',
    component: _import("hzParty/form/allCompanies")
  },
  {
    path: '/hzPartyPersonal',
    component: _import("hzParty/personalCenter/index")
  },
  {
    path: '/hzPartyPersonalName',
    component: _import("hzParty/personalCenter/setName")
  },
  {
    path: '/hzPartyPersonalInfo',
    component: _import("hzParty/personalCenter/setOtherInfo")
  },
  {
    path: '/hzPartyPersonalSfyz',
    component: _import("hzParty/personalCenter/identityAuthentication")
  },
  {
    path: '/hzPartyPersonalTjyx',
    component: _import("hzParty/personalCenter/academicAccreditation")
  },
  // 国合方 ghParty
  {
    path: '/ghParty',
    component: _import("ghParty/list/index")
  },
  {
    path: '/ghPartyDetail',
    component: _import("ghParty/detail/index")
  }, {
    path: '/ghPartyPersonal',
    component: _import("ghParty/personalCenter/index")
  },
  // 分公司 fgsParty
  {
    path: '/fgsParty',
    component: _import("fgsParty/list/index")
  },
  {
    path: '/fgsPartyDetail',
    component: _import("fgsParty/detail/index")
  }, {
    path: '/fgsPartyPersonal',
    component: _import("fgsParty/personalCenter/index")
  }
]
Vue.use(Router)
export default new Router({
  routes: constantRouterMap
})
