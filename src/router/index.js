import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Central from '@/components/Central'
import Query from '@/components/Query'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Central',
      component: Central
    },
    {
      path:'/query/:id',
      name:'Query',
      component:Query
    },
    {
      path:'*',     //全匹配，防止路由到错误路径而显示空白页
      redirect:'/'  //重新返回主页
    }
  ]
})
