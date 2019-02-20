/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-29 21:07:35 
 * @Description: 路由配置
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-05 10:58:21
 */

import Vue from 'vue'
import Router from 'vue-router'
// 注册Router
Vue.use(Router)
// 配置项
import config from '@/config/base.config'
// 欢迎页 
import Welcome from '@/containers/welcome/index.vue'
// 首页 
import Home from '@/containers/home/index.vue'
// 关于我们
import AboutUs from '@/containers/aboutUs/index.vue'

const routes = [
  {
    path: '*',
    redirect: `${config.routerPath}/welcome`,
    component: Welcome // 欢迎页
  },{
    path: `${config.routerPath}/welcome`,
    name: '欢迎页',
    component: Welcome  
  },{
    path: `${config.routerPath}/home`,
    name: '首页',
    component: Home  
  },{
    path: `${config.routerPath}/aboutUs`,
    name: '关于我们',
    component: AboutUs  
  }
]

export default new Router({
  mode: 'history',
  routes
})
