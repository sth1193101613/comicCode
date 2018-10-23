import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/components/main/main.vue').default
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: require('@/components/toplist/toplist.vue').default
    },
    {
      path: '/classfily',
      name: '类别',
      component: require('@/components/classfily/classfily.vue').default
    },
    {
      path: '/comicdatil',
      name: 'comicdatil',
      component: require('@/components/comicdatil/comicdatil.vue').default
    },
    {
      path: '/dateil',
      name: 'dateil',
      component: require('@/components/dateil/dateil.vue').default
    },
    {
      path: '/comlist',
      name: 'comlist',
      component: require('@/components/comlist/comlist.vue').default
    },
    {
      path: '/classfily/searchlist',
      name: '搜索内容',
      component: require('@/components/classfily/searchlist/searchlist.vue').default
    },
    {
      path: '/my',
      name: 'my',
      meta: {requireAuth: true},
      component: require('@/components/my/my.vue').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login/login.vue').default
    },
    {
      path: '/activity',
      name: 'activity',
      component: require('@/components/activity/activity.vue').default
    },
    {
      path: '/histroy',
      name: '阅读记录',
      component: require('@/components/histroy/histroy.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
