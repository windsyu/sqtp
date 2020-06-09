import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Central from '@/components/Central'

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
    }
  ]
})
