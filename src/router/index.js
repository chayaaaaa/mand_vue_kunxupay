import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',  // 匹配没有注册的路由
      redirect: '/index'  //重定向
    },
    {
      path: '/',
      redirect: '/login',// (重定向)
    },    {
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve),
    },    {
      path: '/index',
      component: resolve => require(['@/views/index/index.vue'], resolve),
    }
  ]
})
