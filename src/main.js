// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from '@/plugins/vuetify'
import App from './App'
import router from './router'
import Bmob from 'hydrogen-js-sdk'

Vue.use(vuetify);
Vue.use(Vuex);
Vue.config.productionTip = false;
Bmob.initialize('de2125da0bd849ac','123456')

const store = new Vuex.Store({
  state: {
    name:'',
    text:''
  },
  mutations: {
    setName(state,val){
      state.name=val;
      
    },
    setText(state,val){
      state.text=val;
      console.log(text)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})
