import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/index',
      name: 'index',
      component: require('../pages/index').default,
      meta:{
        index:0
      }
    }, {
      path: '/login',
      name: 'login',
      component: require('../pages/login').default,
      meta:{
        index:-1
      }
    },
    {
      path:'/borrowMoney',
      name:'borrowMoney',
      component: require('../pages/borrowMoney').default,
      meta:{
        index:1
      }
    },
    {
      path:'/my',
      name:'my',
      component: require('../pages/my').default,
      meta:{
        index:0
      }
    },
    {
      path:'/myset',
      name:'myset',
      component: require('../pages/myset').default,
      meta:{
        index:1
      }
    },
    {
      path:'/xxhk',
      name:'xxhk',
      component: require('../pages/xxhk').default,
      meta:{
        index:1
      }
    },
    {
      path:'/bankList',
      name:'bankList',
      component: require('../pages/bankList').default,
      meta:{
        index:1
      }
    },
    {
      path:'/myInfo',
      name:'myInfo',
      component: require('../pages/myInfo').default,
      meta:{
        index:1
      }
    },
    {
      path:'/baseInfo',
      name:'baseInfo',
      component: require('../pages/baseInfo').default,
      meta:{
        index:2
      }
    },
    {
      path:'/uploadIdcard',
      name:'uploadIdcard',
      component: require('../pages/uploadIdcard').default,
      meta:{
        index:2
      }
    },
    {
      path:'/contacts',
      name:'contacts',
      component: require('../pages/contacts').default,
      meta:{
        index:2
      }
    },
    {
      path:'/professional',
      name:'professional',
      component: require('../pages/professional').default,
      meta:{
        index:2
      }
    },
    {
      path:'/addCard',
      name:'addCard',
      component: require('../pages/addCard').default,
      meta:{
        index:2
      }
    },
    {
      path:'/auditWaiting',
      name:'auditWaiting',
      component: require('../pages/auditWaiting').default,
      meta:{
        index:2
      }
    },
    {
      path:'/withdrawal',
      name:'withdrawal',
      component: require('../pages/withdrawal').default,
      meta:{
        index:2
      }
    },
    {
      path:'/repayment',
      name:'repayment',
      component: require('../pages/repayment').default,
      meta:{
        index:2
      }
    },
    {
      path:'/refuse',
      name:'refuse',
      component: require('../pages/refuse').default,
      meta:{
        index:2
      }
    },
    {
      path:'/password',
      name:'password',
      component: require('../pages/password').default,
      meta:{
        index:2
      }
    },
    {
      path:'/sfzInfo',
      name:'sfzInfo',
      component: require('../pages/sfzInfo').default,
      meta:{
        index:2
      }
    },
    {
      path:'/shenhe',
      name:'shenhe',
      component: require('../pages/shenhe').default,
      meta:{
        index:2
      }
    }

  ]
})
