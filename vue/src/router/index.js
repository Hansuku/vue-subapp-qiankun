/*
 * @Author: jinglin.tan
 * @Date: 2020-07-30 14:46:22
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 14:43:24
 * @Description: 路由表
 */ 
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/micro-app'
    },
    {
      path: '/micro-app',
      name: 'home',
      meta: {
        pathName: '首页'
      },
      component: () => import(/* webpackChunkName: "icons" */ '@/components/HelloWorld.vue')
    }
  ]
})